from flask import Flask
from flask import jsonify
from twitter import analyze_sentiment
from watson import analyze_tones

app = Flask(__name__)

@app.route("/")
def Summary():
    return jsonify(response="Welcome to the CapitalOne Twitter Analysis API! Paths include /api/sentiment and /api/tone. To search about a specific CapitalOne product, add '<name_of_product>'")

@app.route("/api/sentiment/search")
def search_sentiment():
    topics = ["@capitalone"]
    return jsonify(analyze_sentiment(topics)) 

@app.route("/api/sentiment/search/<topic>")
def search_sentiment_topic(topic):
    topics = ["@capitalone", topic]
    return jsonify(analyze_sentiment(topics))

@app.route("/api/tone/search")
def search_tone():
    topics = ["@capitalone"]
    return jsonify(analyze_tones(topics))

@app.route("/api/tone/search/<topic>")
def search_tone_topic(topic):
    topics = ["@capitalone", topic]
    return jsonify(analyze_tones(topics))