# ravs
CAPSTONE project for cs4470; working with Radio Western to help give them a more refined interface for keeping track of volunteers and their activities.

## Architecure

## Test Plan


## Current setup

1) Create your virtual environment for the project

```bash
$ virtualenv -p python3 venv
```

Activate your virtual environemtn

```bash
$ . venv/bin/activate
```

deactivate anytime

```bash
$ deactivate
```

2) Download the required libraries and plugins

```bash
$ pip install -r requirements.txt
```
If you are unable to install the required libraries through the requirements file
Install individually with:
```bash
$ pip install Flask
$ pip install Flask-SQLAlchemy
$ pip install Flask-Heorku
$ pip install gunicorn
```

And download all npm dependencies from package.json
```bash
$ npm install
```

3) Run the initial deploy python file to set up local database

```bash
$ python3
>> from deploy import db
>> db.create_all()
>> quit()
```

4) Run the prototype with

```bash
$ npm start
```

## Set-up backend
1) cd into the flaskr directory
```bash
$ cd flaskr/
```

2) Create a postgres db in your local and set it up with the necessary tables
```bash
$ createdb ravs-database #currently the name placeholder we have
$ python3
> from deploy import db
> db.create_all()
> quit()
```

3) run the API
```bash
$ python3 deploy.py
```
