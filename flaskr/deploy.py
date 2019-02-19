import json, datetime, urllib.parse

from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from flask_heroku import Heroku


import WaApi

app = Flask(__name__, template_folder='./templates/')
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
        return f"Members('{self.member_id}','{self.firstname}', '{self.lastname}', '{self.email}', '{self.director}')"

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
        if len(pers) != 0:
            curr_user = Members.query.filter_by(email = login_email).first()
            return jsonify({'email': curr_user.email, 'firstname': curr_user.firstname, 'lastname': curr_user.lastname, 'curr': True}), 201
        else:
            return jsonify({'email': curr_user.email, 'firstname': curr_user.firstname, 'lastname': curr_user.lastname, 'curr': False}), 201
    except:
        return("incorrect username and password")

@app.route('/newlogin', methods = ['POST'])
@cross_origin(supports_credentials=True)
def newlogin():
    content = request.json
    login_email = content['email']
    login_password = content['password']
    login_firstname = content['firstname']
    login_lastname = content['lastname']

    newUser = Members(firstname = login_firstname, lastname = login_lastname,
                    email = login_email, director = False)
    newProgress = Progress_Graph(email = login_email)
    session.add(newUser)
    session.add(newProgress)
    session.commit()

@app.route('/calendar-events', methods=['GET'])
def get_current_month_events():
    firstDayOfCurrentMonth = datetime.date.today().replace(day=1) #Get first day of month
    lastDayOfCurrentMonth = last_day_of_month(datetime.date.today()) #Get last day of month
    firstDayOfCurrentMonth_String = firstDayOfCurrentMonth.strftime('%Y-%m-%d') #In YYYY-MM-DD format.
    lastDayOfCurrentMonth_String = lastDayOfCurrentMonth.strftime('%Y-%m-%d')
    params = {'$filter': f'StartDate gt {firstDayOfCurrentMonth_String} AND StartDate lt {lastDayOfCurrentMonth_String}', #Originally was $filter': 'StartDate gt 2019-01-01 AND StartDate lt 2015-01-31'
              '$async': 'false'}
    request_url = eventsUrl + '?' + urllib.parse.urlencode(params)
    return api.execute_request(request_url).Events

@app.route('/progress-graph', methods=['GET'])
def progress_graph():
    login_email ="phender10@uwo.ca"
    # login_email = request.json.get('email')
    # login_password = request.json.get('password')
    # username = "phender9@uwo.ca"
    # password = "chrw123"
    for graph in session.query(Progress_Graph).filter(Progress_Graph.email == login_email):
        json_graph = json.dumps(graph.dprogress_graph)
    return json_graph


def last_day_of_month(any_date_in_specific_month):
    if any_date_in_specific_month.month == 12:
        return any_date_in_specific_month.replace(day=31)
    return any_date_in_specific_month.replace(month=any_date_in_specific_month.month+1, day=1) - datetime.timedelta(days=1)




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

    # events = get_current_month_events()
    # for event in events:
    #     print('\tID:' + str(event.Id))
    #     print('\tEventType:' + event.EventType)
    #     print('\tName:' + event.Name)
    # login()
    app.run(debug = True)
