from flask import Flask
from flask import jsonify
from twitter import analyze

app = Flask(__name__)

# Summary, mainly for debugging connections
@app.route("/api")
def Summary():
    return jsonify(response="Welcome to the CapitalOne sentiment API!")

# Search about CapitalOne in general
@app.route("api/search")
def search():
    topics = ["@capitalone"]
    return jsonify(analyze(topics)) 


# Search about a specific subject of CapitalOne
@app.route("api/search/<topic>")
def searchTopic(topic):
    topics = ["@capitalone", topic]
    return jsonify(analyze(topics))
