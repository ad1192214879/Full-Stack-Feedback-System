from flask import Flask, request, jsonify,session
from flask_pymongo import PyMongo
from werkzeug.utils import redirect
# from MongoDBCURD import app

app = Flask(__name__)
# app.config["MONGO_URI"] = "mongodb://localhost:27017/myDatabase"
# mongo = PyMongo(app)
#
# from pymongo import MongoClient
# import pymongo
# client = pymongo.MongoClient('127.0.0.7', 27017)   # 本地IP，默认端口
# db = client['test']  # 进入数据库
# col = db['feedbacks']   # 进入集合
#
# app.run()




import pymongo
from bson.objectid import ObjectId
client= pymongo.MongoClient(host='localhost', port=27017)

db = client.test
collection = db.feedbacks
feedback = {
    'genre' : 'support:question',
    'subject' : 'math',
    'message' : 'hello',
    'yourname' : 'Bob',
    'email' : '1192214879@qq.com'
}
feedback1 = {
    'genre' : 'support:question',
    'subject' : 'cs',
    'message' : 'hi',
    'yourname' : 'Bob',
    'email' : '1192214879@163.com'
}
feedback2 = {
    'genre' : 'feedback:request',
    'subject' : 'EE',
    'message' : 'hello',
    'yourname' : 'Tom',
    'email' : '1192214879@qq.com'
}




# @app.route('/',methods=["GET"])
# def hello_world():
#     return 'Hello World!'

# result = collection.insert(feedback)
@app.route('/add',methods=["POST"])  #get_json时GET ,"GET"
def add():
    # my_json = request.get_json()
    # genre = request.form.get('genre')  #["genre"]
    # genre = request.values.get("genre")
    # genre = request.form["genre"]  #genre还未调试成功
    subject = request.form["subject"]
    message = request.form["message"]
    yourname = request.form["yourname"]
    email = request.form["email"]
    # print(genre)
    print(subject)
    print(message)
    print(yourname)
    print(email)
    # get_genre = my_json.get("genre")
    # print(get_genre)

    # result = collection.insert_one({'subject':subject,'message':message,'yourname':yourname,'email':email}) #
    # print(result)

    # print(result.inserted_id)
    return 'nice'

# 在MongoDB中，每条数据其实都有一个_id属性来唯一标识，如果没有显式指明_id，MongoDB会自动产生一个ObjectId类型的_id属性。
# insert()方法会在执行后返回的_id值。
# 官方推荐使用insert_one()和insert_many()方法将插入单条和多条记录分开。
# 返回结果和insert()方法不同，这次返回的是InsertOneResult对象，我们可以调用其inserted_id属性获取_id。
def insert_two(unit1, unit2):
    result_more= collection.insert_many([unit1, unit2])
    print(result_more)
    print(result_more.inserted_ids)


def delete(unit):
    result = collection.find_one({'message':unit['message']})
    collection.delete_one(result)
    return 'Removed result!'


def update():
    result = collection.find_one({'message':'hi'})
    result['subject'] = 'physical'
    collection.save(result)


# 查询，插入数据后我们可以利用find_one()或find()方法进行查询，find_one()查询得到是单个结果，find()则返回多个结果。
def lookfor_message(unit):
    result1= collection.find_one({'message':unit['hi']}) #双引号
    print(type(result1))
    print(result1)
# 在这里我们查询message为hi的数据，它的返回结果是字典类型，运行结果：
# <class'dict'>
# {'_id': ObjectId('60fe5a6ecdfc80458599b5bd'), 'genre': 'support:question', 'subject': 'cs', 'message': 'hi', 'yourname': 'Bob', 'email': '1192214879@163.com'}
# 可以发现它多了一个_id属性，这就是MongoDB在插入的过程中自动添加的。

def find_id(id):
    result2= collection.find_one({'_id': ObjectId(id)})
    print(result2)

# results= collection.find({'genre' : 'support:question'})
# print(results)
# for result in results:
#     print(result)

# add(feedback)
# delete({'message':'hello'})
# update()



# if __name__ == '__main__':
#     app.run(debug=True)

app.run(host="127.0.0.1", port=3000, debug=True)