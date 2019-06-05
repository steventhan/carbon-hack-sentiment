from flask import Flask
from flask import jsonify
app = Flask(__name__)

# Summary, mainly for debugging connections
@app.route("/")
def Summary():
    return jsonify(
        response="Welcome to the CapitalOne sentiment API!",
        statusCode="200")

# Search about CapitalOne in general
@app.route("/search")
def search():
    topics = ["@capitalone"]

    return jsonify(
        response="CapitalOne is awesome!", #set equal to result of Steven's code
        statusCode="200")


# Search about a specific subject of CapitalOne
@app.route("/search/<topic>")
def searchTopic(topic):
    topics = ["@capitalone", topic]

    return jsonify(
        response=topic,  #set equal to result of Steven's code
        statusCode="200")
