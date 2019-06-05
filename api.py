from flask import Flask
from flask import jsonify
app = Flask(__name__)

# Summary, mainly for debugging connections
@app.route("/")
def Summary():
    return jsonify(
        text="Welcome to the CapitalOne sentiment API!",
        statusCode="200")

# Search about CapitalOne in general
@app.route("/search")
def search():
    return jsonify(
        text="CapitalOne is awesome!",
        statusCode="200")


# Search about a specific subject of CapitalOne
@app.route("/search/<topic>")
def searchTopic(topic):
    return jsonify(
        text=topic,
        statusCode="200")
