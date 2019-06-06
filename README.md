# hackathon-cap1

CapitalOne Sentiment API
A RESTful API used for quick, realtime, real-life information on Twitters opinion of CapitalOne. Uses the Twitter API and Google's Sentiment API along with IBM's Watson to gather and analyze the information.

For example use cases, we setup an Amazon Alexa app and visualization website.

API:

    url: https://carbon-hack-sentiment.herokuapp.com/

    paths:
        /api/tone/search : default option, looks up tone of CapitalOne as a whole
        /api/tone/search/<topic> : searches the topic IN ADDITION to CapitalOne
        /api/sentiment/search : default option, looks up sentiment of CapitalOne as a whole
        /api/sentiment/search/<topic> : searches the topic IN ADDITION to CapitalOne

Alexa App:

Visualization Site:

Resources:
    https://github.com/geduldig/TwitterAPI
    https://cloud.ibm.com/catalog/services/tone-analyzer
    
Next Steps:
    Object Notation for tones and averages scores.
    Database storing this same information by date (monthly averages? yearly averages?)
    More robust visualizations with
    Alexa App that asks if you want to add to the search criteria
    Look up more than the last 50/100 tweets
