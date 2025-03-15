from flask import Flask, request, jsonify
import mysql.connector


app = Flask(__name__)
NOT_FOUND = 404
SUCCESS = 200
SERVER_ERROR = 500

config = {
     "user": "root",
     "password": "senha123",
     "host":"localhost",
     "database": "testing"
}

@app.route("/")

def hello_world():
    
    return "<p>Hello, World</p>"

@app.route("/user", methods=["PUT"])
def update_user():

     
    id = request.args.get("id")

    if id is None:
            
            return jsonify({"message": "insert id of valid success"}), NOT_FOUND
    
    connection = mysql.connector.connect(**config)

    if not connection.is_connected():
         return __standard_message_return ("problem on database", SERVER_ERROR)
    
    cursor = connection.cursor()

    cursor.execute("SELECT * FROM user WHERE id = " + str(id))

    user = cursor.fetchone()

    if user is None:
         return __standard_message_return(
         "this user does not exist on database, please - inform a user that exist", 
         NOT_FOUND
    )

    body = request.get_json()
    print(body)

    return __standard_message_return("the update  was done with success", SUCCESS)

def __standard_message_return(message, httpCOde):
     return jsonify({"message": message}), httpCOde


if __name__ == "__main__":
    app.run(port=3000, debug=True)