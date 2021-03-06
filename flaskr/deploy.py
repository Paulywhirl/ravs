import json, datetime, urllib.parse

from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from flask_heroku import Heroku
from dateutil.parser import parse

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

    def __repr(self):
        return f"Progress_Graph('{self.progress_id}', '{self.member_id}')"

class Announcements(db.Model):
    __tablename__ = "announcements"

    annoucement_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(40), nullable=False)
    message = db.Column(db.String(5000), nullable=False)
    email = db.Column(db.String(60), db.ForeignKey('member.email'), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.datetime.utcnow())

    def __repr(self):
        return f"Announcements('{self.title}', '{self.message}','{self.author_email}', '{self.date_created}')"


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
    pers = Members.query.filter_by(email = login_email).all()
    if len(pers) != 0:
        curr_user = Members.query.filter_by(email = login_email).first()
        api = WaApi.WaApiClient("ynw0blawz7", "2vjwxhjmcspkddxqpkti6qbdsdnpmh")
    else:
        return json.dumps({'err_msg': 'invalid email or password'}), 401, {'Content-type': 'application/json'}
    try:
        api.authenticate_with_contact_credentials(login_email, login_password)
        events = get_current_month_events()
        contactId = get_contact_id(api, login_email)
        for graph in session.query(Progress_Graph).filter(Progress_Graph.email == login_email):
            json_graph = json.dumps(graph.dprogress_graph)
        return jsonify({'email': curr_user.email,
             'firstname': curr_user.firstname, 'lastname': curr_user.lastname,
              'director': curr_user.director, 'contactId': contactId,
               "data":{"progress_graph": json_graph, "events": events}}), 201
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
        api.authenticate_with_contact_credentials(register_email, register_password)
        pers = Members.query.filter_by(email = register_email).all()
        if len(pers) != 0:
            return jsonify({'err_msg': 'email already exists in system'}), 204
        contactId = get_contact_id(api, register_email)
        events = get_current_month_events()
        # events =[]
        try:
            session.add(newUser)
            session.add(newProgress)
            session.commit()
            for graph in session.query(Progress_Graph).filter(Progress_Graph.email == register_email):
                json_graph = json.dumps(graph.dprogress_graph)
                return jsonify({'email': register_email,
                'firstname': register_firstname, 'lastname': register_lastname,
                'director': "false", 'contactId': contactId,
                "data":{"progress_graph": json_graph, "events": events}}), 201
        except:
            return jsonify({"err_msg": "something went wrong"}), 404
    except:
        return jsonify({'err_msg': 'user not registered in Wild Apricot'}), 401

@app.route('/calendar-events', methods=['GET'])
def get_current_month_events():
    api = WaApi.WaApiClient("ynw0blawz7", "2vjwxhjmcspkddxqpkti6qbdsdnpmh")
    api.authenticate_with_contact_credentials("phender9@uwo.ca", "chrw123")
    firstDayOfCurrentMonth = datetime.date.today().replace(day=1)
    lastDayOfCurrentMonth = last_day_of_month(datetime.date.today())
    firstDayOfCurrentMonth_String = firstDayOfCurrentMonth.strftime('%Y-%m-%d')
    lastDayOfCurrentMonth_String = lastDayOfCurrentMonth.strftime('%Y-%m-%d')
    params = {'$filter': f'StartDate gt {firstDayOfCurrentMonth_String} AND StartDate lt {lastDayOfCurrentMonth_String}',
              '$async': 'false'}
    acc = account_data(api)
    eventsUrl = next(res for res in acc.Resources if res.Name == 'Events').Url
    request_url = eventsUrl + '?' + urllib.parse.urlencode(params)
    ev = api.execute_request(request_url).Events
    events_to_return = create_json_of_events(ev)
    return json.dumps(events_to_return)

@app.route('/upcomingEvents', methods=['GET'])
def get_upcoming_events():
    api = WaApi.WaApiClient("ynw0blawz7", "2vjwxhjmcspkddxqpkti6qbdsdnpmh")
    api.authenticate_with_contact_credentials("phender9@uwo.ca", "chrw123")
    today = datetime.date.today()
    tomorrow = datetime.date.today() + datetime.timedelta(days=1)
    today_s = today.strftime('%Y-%m-%d')
    tomorrow_s = tomorrow.strftime('%Y-%m-%d')
    params = {'$filter': f'StartDate gt {today_s} AND StartDate lt {tomorrow_s}',
              '$async': 'false'}
    acc = account_data(api)
    eventsUrl = next(res for res in acc.Resources if res.Name == 'Events').Url
    request_url = eventsUrl + '?' + urllib.parse.urlencode(params)
    ev = api.execute_request(request_url).Events
    events_to_return = create_json_of_events(ev)
    return json.dumps({ "events": events_to_return})

@app.route('/progress-graph/', methods=['GET'])
@cross_origin(supports_credentials=True)
def progress_graph():
    login_email = request.args.get('email')
    for graph in session.query(Progress_Graph).filter(Progress_Graph.email == login_email):
        json_graph = json.dumps(graph.dprogress_graph), 201
    return json_graph

@app.route('/progress-graph/submit', methods=['POST'])
@cross_origin(supports_credentials=True)
def submit_progress_graph():
    content = request.json
    email = content['email']
    p_graph = content['progress_graph']
    try:
        session.query(Progress_Graph).filter(Progress_Graph.email == email).update(dict(dprogress_graph = p_graph))
        session.commit()
        return jsonify({'message': 'progress graph successfully updated'}), 200
    except:
        return jsonify({'err_msg': 'something went wrong'}), 401


def last_day_of_month(any_date_in_specific_month):
    if any_date_in_specific_month.month == 12:
        return any_date_in_specific_month.replace(day=31)
    return any_date_in_specific_month.replace(month=any_date_in_specific_month.month+2, day=1) - datetime.timedelta(days=1)

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
    return json_events

def get_eventRegistrationTypesForEvent(eventId):
    params = {
        'eventId': eventId
    }
    request_url = eventRegistrationTypesUrl + '?' + urllib.parse.urlencode(params)
    return api.execute_request(request_url)

@app.route('/register-session/id', methods=['POST'])
@cross_origin(supports_credentials=True)
def register_session(displayName, contactId, eventId):
    content = request.json
    contactId = content['contactId']
    eventId = content['eventId']
    registrationTypeId = get_eventRegistrationTypesForEvent(eventId).pop().Id
    data = {
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

@app.route('/announcements', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_announcements():
    announcements = session.query(Announcements).order_by(Announcements.date_created.desc()).limit(10)
    json_ann = []
    for announcement in announcements:
        js = {
            "title": announcement.title,
            "message": announcement.message,
            "email": announcement.email,
            "date": announcement.date_created
        }
        json_ann.append(js)
        pass
    return json.dumps(json_ann, indent=4, sort_keys=True, default=str), 201

@app.route('/newAnnouncement', methods=['POST'])
@cross_origin(supports_credentials=True)
def create_announcement():
    content = request.json
    title = content['title']
    message = content['message']
    email = content['email']
    newAnnouncement = Announcements(title = title,
                                    message = message,
                                    email = email)

    try:
        session.add(newAnnouncement)
        session.commit()
        return jsonify({'announcement_status': 'created'}), 201
    except Exception as ex:
        print(ex)
        return jsonify({'announcement_status': 'failed'}), 401

if __name__ == '__main__':
    app.run(debug = True)
