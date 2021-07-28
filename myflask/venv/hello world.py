from flask import Flask, request, jsonify,session
from werkzeug.utils import redirect

app = Flask(__name__)
app.secret_key = "aaaaaa"

# 实例化flask为app对象
@app.route("/", methods=["GET"])  # route为路由,/为5000
def hello_world():
    return "hello world"


@app.route("/hey/<username>")  # <>里面默认为字符串
def hey(username):
    return "hey %s" % (username + username)


@app.route("/my/<float:number>/")
def mynumber(number):
    return "my %s" % (number + number)


@app.route("/baidu")
def baidu():
    return redirect("https://www.baidu.com")


@app.route("/test/my/first", methods=["POST", "GET"])
def first_post():
    try:
        my_json = request.get_json()
        print(my_json)
        get_name = my_json.get("name")
        get_age = my_json.get("age")
        if not all([get_name, get_age]):
            return jsonify(msg="缺少参数")
        get_age += 10

        return jsonify(name=get_name, age=get_age)
    except Exception as e:
        print(e)
        return jsonify(msg="出错了，查看是否正确访问")

#登录接口
@app.route("/try/login", methods=["POST"])
def login():
    get_data = request.get_json()
    username = get_data.get("username")
    password = get_data.get("password")

    if not all([username, password]):
        return jsonify(msg="缺少参数")

    if username == "asd123" and password == "asdasd":
        session["username"] = username
        return jsonify(msg="登陆成功")
    else:
        return jsonify(msg="账号或密码错误")

#检查登录状态
@app.route("/session", methods=["GET"])
def check_session():
    username = session.get("username")
    if username is not None:
        # 操作逻辑，数据库...
        return jsonify(username=username)
    else:
        return jsonify(msg="出错了，没登录")

#登出
@app.route("/try/logout", methods=["GET"])
def logout():
    session.clear()
    return jsonify(msg="成功退出登录")

# app.run(host="0.0.0.0")
app.run()
