from flask import Flask
from flask import jsonify
app = Flask(__name__)

# Summary, mainly for debugging connections
@app.route("/")
def Summary():
    return jsonify("Welcome to the CapitalOne sentiment API!")

# Search about CapitalOne in general
@app.route("/search")
def search():
    return jsonify("CapitalOne is awesome!")


# Search about a specific subject of CapitalOne
@app.route("/search/<topic>")
def searchTopic(topic):
    return jsonify(topic)
