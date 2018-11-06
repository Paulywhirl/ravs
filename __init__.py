from flask import Flask, render_template, request

app = Flask(__name__)

# Set "homepage" to index.html
@app.route('/', methods=['GET', 'POST'])
def login():
    return render_template('login.html')


if __name__ == '__main__':
	app.run(debug=True)
