from flask_sqlalchemy import SQLAlchemy
from flask import Flask
import pymysql

app = Flask(__name__)

# app.config["SQLALCHEMY_DATABASE_URI"] = ""
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + "/test.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = "qwerty"

db = SQLAlchemy(app)

#学生表
class Student(db.Model):
    _tablename_ = "student"
    id = db.Column(db.Integer, primary_key=True) #主键
    name = db.Column(db.String(64), nullable=False) #nullable表示能否为空
    gender = db.Column(db.Enum("男","女"), nullable=False) #性别 枚举 不能为空
    phone = db.Column(db.String(11))

#
class Course(db.Model):
    _tablename_ = "course"
    id = db.Column(db.Integer, primary_key=True) #主键
    name = db.Column(db.String(64), nullable=False)
    # teacher_id =


class Teacher(db.Model):
    _tablename_ = "teacher"
    id = db.Column(db.Integer, primary_key=True) #主键
    name = db.Column(db.String(64), nullable=False)
    gender = db.Column(db.Enum("男","女"), nullable=False)
    phone = db.Column(db.String(11))

# class Grage(db.Model):
#     _tablename_ = "grade"
#     id = db.Column(db.Integer, primary_key=True) #主键
#     course_id =
#     grade =
#     student =

# if __name__ == '__main__':

if __name__ == '__main__':
    db.create_all()