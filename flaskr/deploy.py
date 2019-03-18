import json, datetime, urllib.parse

from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from flask_heroku import Heroku


import WaApi

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/ravs-database'
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, support_credentials=True, resources={r"/*": {"origins": "*"}})
# heroku = Heroku(app)
db = SQLAlchemy(app)

db_uri="postgresql://localhost/ravs-database"

engine = create_engine(db_uri)

Session = sessionmaker()
Session.configure(bind=engine)
session = Session()

global api

class Members(db.Model):
    __tablename__ = "member"
    member_id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(25), nullable=False)
    lastname = db.Column(db.String(35), nullable=False)
    email = db.Column(db.String(60), unique=True, nullable=False)
    phone = db.Column(db.String(12), unique=True)
    image_file = db.Column(db.String(20)
    # , nullable=False, default="default.jpg"
    )
    director = db.Column(db.Boolean, nullable=False, default=False)

    def __repr__(self):
        return f"Members('{self.member_id}','{self.firstname}','{self.lastname}', '{self.email}', '{self.director}')"

class Progress_Graph(db.Model):
    __tablename__ = "progress_graph"

    with open("../static/js/data_schemas/progress_graph.json", "r") as read_file:
        data = json.load(read_file)

    progress_id = db.Column(db.Integer, primary_key=True)
    dprogress_graph = db.Column(db.JSON, default=data)
    email = db.Column(db.String(60), db.ForeignKey('member.email'))
    # member_id = db.Column(db.Integer, db.ForeignKey('member.member_id'))

    def __repr(self):
        return f"Progress_Graph('{self.progress_id}', '{self.member_id}')"

class Announcents(db.Model):
    __tablename__ = "announcements"

    annoucement_id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(5000), nullable=False)
    author = db.Column(db.Integer, db.ForeignKey('member.member_id'))


# Set "homepage" to index.html
@app.route('/')
def index():
    # return render_template('')
    return 'Hello world'

@app.route('/login', methods = ['POST'])
@cross_origin(supports_credentials=True)
def login():
    content = request.json
    login_email = content['email']
    login_password = content['password']

    api = WaApi.WaApiClient("ynw0blawz7", "2vjwxhjmcspkddxqpkti6qbdsdnpmh")
    try:
        api.authenticate_with_contact_credentials(login_email, login_password)
        pers = Members.query.filter_by(email = login_email).all()
        graph = Progress_Graph.query.filter_by(email = login_email).all()
        events = get_current_month_events()
        contactId = get_contact_id(api, login_email)
        for graph in session.query(Progress_Graph).filter(Progress_Graph.email == login_email):
            json_graph = json.dumps(graph.dprogress_graph)
        if len(pers) != 0:
            curr_user = Members.query.filter_by(email = login_email).first()
            return jsonify({'email': curr_user.email,
             'firstname': curr_user.firstname, 'lastname': curr_user.lastname,
              'curr': True, 'contactId': contactId,
               "data":{"progress_graph": json_graph, "events": events}}), 201
        else:
            return jsonify({'email': curr_user.email,
             'firstname': curr_user.firstname, 'lastname': curr_user.lastname,
              'curr': False}), 201
    except:
        return json.dumps({'err_msg': 'invalid email or password'}), 401, {'Content-type': 'application/json'}
        # return jsonify({'err_msg': 'invalid email or password'}), 401


@app.route('/register', methods = ['POST'])
@cross_origin(supports_credentials=True)
def newlogin():
    content = request.json
    register_email = content['email']
    register_password = content['password']
    register_firstname = content['firstname']
    register_lastname = content['lastname']

    newUser = Members(firstname = register_firstname,
                        lastname = register_lastname,
                        email = register_email,
                        director = False)
    newProgress = Progress_Graph(email = register_email)
    api = WaApi.WaApiClient("ynw0blawz7", "2vjwxhjmcspkddxqpkti6qbdsdnpmh")
    try:
        api.authenticate_with_contact_credentials(register_email,
                                                    register_password)
        pers = Members.query.filter_by(email = register_email).all()
        if len(pers) != 0:
            return jsonify({'err_msg': 'email already exists in system'}), 204
        session.add(newUser)
        session.add(newProgress)
        session.commit()
        return jsonify({'email': register_email,
            'firstname': register_firstname, 'lastname': register_lastname,
            'curr': True}), 201
    except:
        return jsonify({'err_msg': 'user not registered in Wild Apricot'}), 401

@app.route('/calendar-events', methods=['GET'])
def get_current_month_events():
    api = WaApi.WaApiClient("ynw0blawz7", "2vjwxhjmcspkddxqpkti6qbdsdnpmh")
    api.authenticate_with_contact_credentials("phender9@uwo.ca", "chrw123")
    firstDayOfCurrentMonth = datetime.date.today().replace(day=1) #Get first day of month
    lastDayOfCurrentMonth = last_day_of_month(datetime.date.today()) #Get last day of month
    firstDayOfCurrentMonth_String = firstDayOfCurrentMonth.strftime('%Y-%m-%d') #In YYYY-MM-DD format.
    lastDayOfCurrentMonth_String = lastDayOfCurrentMonth.strftime('%Y-%m-%d')
    params = {'$filter': f'StartDate gt {firstDayOfCurrentMonth_String} AND StartDate lt {lastDayOfCurrentMonth_String}', #Originally was $filter': 'StartDate gt 2019-01-01 AND StartDate lt 2015-01-31'
              '$async': 'false'}
    acc = account_data(api)
    eventsUrl = next(res for res in acc.Resources if res.Name == 'Events').Url
    request_url = eventsUrl + '?' + urllib.parse.urlencode(params)
    ev = api.execute_request(request_url).Events
    events_to_return = create_json_of_events(ev)
    return json.dumps(events_to_return)

@app.route('/progress-graph', methods=['GET'])
def progress_graph():
    content = request.json
    login_email = content['email']
    for graph in session.query(Progress_Graph).filter(Progress_Graph.email == login_email):
        json_graph = json.dumps(graph.dprogress_graph), 201
    return json_graph


def last_day_of_month(any_date_in_specific_month):
    if any_date_in_specific_month.month == 12:
        return any_date_in_specific_month.replace(day=31)
    return any_date_in_specific_month.replace(month=any_date_in_specific_month.month+1, day=1) - datetime.timedelta(days=1)

def account_data(api):
    accounts = api.execute_request("/v2/accounts")
    return accounts[0]

def create_json_of_events(events):
    json_events = []
    for event in events:
        js = {
            "eventId": event.Id,
            "title": event.Name,
            "start": event.StartDate,
            "end": event.EndDate,
            # "description": event.Description,
            "reg_limit": event.RegistrationsLimit,
            "confirmed_count": event.ConfirmedRegistrationsCount,
            "location": event.Location,
        }
        json_events.append(js)
        pass
    return json_events

def register_session(displayName, contactId, eventId):
    registrationTypeId = get_eventRegistrationTypesForEvent(eventId).pop().Id
    data = {
        'DisplayName': displayName,
        'Contact': { 'Id': contactId },
        'Event': { 'Id': eventId },
        'RegistrationTypeId': registrationTypeId #Fetched RegistrationTypes for specific Event and use the first one's Id.
    }
    try:
        response = api.execute_request(eventRegistrationsUrl,
                                api_request_object=data, method='POST')
        return {'registration': 'success'}, 201
    except:
        return {'error message': 'could not identify IDs'}

def unregister_session():
    return {}

def create_session():
    return {}

def delete_session():
    return {}

def get_contact_id(api, email):
    accounts = api.execute_request("/v2/accounts")
    account = accounts[0]
    contactsUrl = next(res for res in account.Resources if res.Name == 'Contacts').Url
    params = { '$filter': 'email eq ' + email,
              '$top': '10',
              '$async': 'false'}
    request_url = contactsUrl + '?' + urllib.parse.urlencode(params)
    contacts = api.execute_request(request_url).Contacts
    for contact in contacts:
        cID = str(contact.Id)
        return cID


# api = WaApi.WaApiClient("ynw0blawz7", "2vjwxhjmcspkddxqpkti6qbdsdnpmh")
# api.authenticate_with_contact_credentials("phender9@uwo.ca", "chrw123")
# accounts = api.execute_request("/v2/accounts")
# account = accounts[0]
# eventsUrl = next(res for res in account.Resources if res.Name == 'Events').Url


# Save e-mail to database and send to success page
# @app.route('/prereg', methods=['POST'])
# def prereg():
#     email = None
#     if request.method == 'POST':
#         email = request.form['email']
#         # Check that email does not already exist (not a great query, but works)
#         if not db.session.query(User).filter(User.email == email).count():
#             reg = User(email)
#             db.session.add(reg)
#             db.session.commit()
#             return render_template('success.html')
#     return render_template('index.html')


if __name__ == '__main__':
    app.run(debug = True)
