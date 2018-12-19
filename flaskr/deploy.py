import json
from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_heroku import Heroku


import WaApi

app = Flask(__name__, template_folder='./templates/')
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/ravs-database'
# heroku = Heroku(app)
db = SQLAlchemy(app)

# Create our database model
# class User(db.Model):
#     __tablename__ = "users"
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(120), unique=True)
#     name = db.Column(db.String(120), unique=False)
#
#     def __init__(self, email):
#         self.email = email
#
#     def __repr__(self):
#         return '<E-mail %r>' % self.email

class Members(db.Model):
    __tablename__ = "member"
    member_id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(25), nullable=False)
    lastname = db.Column(db.String(35), nullable=False)
    email = db.Column(db.String(60), unique=True, nullable=False)
    phone = db.Column(db.String(12), unique=True)
    image_file = db.Column(db.String(20), nullable=False, default="default.jpg")
    password = db.Column(db.String(60), nullable=False)

    def __repr__(self):
        return f"Members('{self.firstname}', '{self.lastname}', '{self.email}')"

class Progress_Graph(db.Model):
    __tablename__ = "progress_graph"

    with open("../static/js/data_schemas/progress_graph.json", "r") as read_file:
        data = json.load(read_file)

    progress_id = db.Column(db.Integer, primary_key=True)
    dprogress_graph = db.Column(db.JSON, default=data)
    member_id = db.Column(db.Integer, db.ForeignKey('member.member_id'))

    def __repr(self):
        return f"Progress_Graph('{self.progress_id}', '{self.member_id}')"





# Set "homepage" to index.html
@app.route('/')
def index():
    return render_template('')

@app.route('/login', methods = ['POST', 'GET'])
def login():
    # username = request.args.get('username')
    # password = request.args.get('password')
    api = WaApi.WaApiClient("ynw0blawz7", "2vjwxhjmcspkddxqpkti6qbdsdnpmh")
    try:
        api.authenticate_with_contact_credentials("", "")
    except:
        return "incorrect username and password"




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
    login()
    app.debug = True
    app.run()
