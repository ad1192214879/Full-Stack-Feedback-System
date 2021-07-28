from flask import Flask, render_template
from werkzeug.utils import redirect

app = Flask(__name__)

@app.route("/")
def port_():
    return(render_template("D:\\front-end\\test\\feedback-page\\feedback\\src\\index.js"))
    # print(request.form['subject'])
    # return "hi"

app.run()
