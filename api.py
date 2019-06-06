import os
from flask import Flask, render_template, send_from_directory
from flask import jsonify
from twitter import analyze_sentiment
from watson import analyze_tones

# app = Flask(__name__, static_folder="./build")
app = Flask(__name__, static_folder="react/static", template_folder="react")

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/api")
def api():
    return jsonify(response="Welcome to the CapitalOne Twitter Analysis API! Paths include /api/sentiment and /api/tone. To search about a specific CapitalOne product, add '<name_of_product>'")

@app.route("/api/sentiment/search")
def search_sentiment():
    topics = ["@capitalone"]
    return jsonify(analyze_sentiment(topics)) 

@app.route("/api/sentiment/search/<topic>")
def search_sentiment_topic(topic):
    topics = [topic]
    return jsonify(analyze_sentiment(topics))

@app.route("/api/tone/search")
def search_tone():
    topics = ["@capitalone"]
    return jsonify(analyze_tones(topics))

@app.route("/api/tone/search/<topic>")
def search_tone_topic(topic):
    topics = [topic]
    return jsonify(analyze_tones(topics))