# hackathon-cap1

CapitalOne Sentiment API
A RESTful API used for quick, realtime, real-life information on Twitters opinion of CapitalOne. Uses the Twitter API and IBM's Wattson to gather and analyze the information.

For example use cases, we setup an Amazon Alexa app and visualization website.

API:

    url: https://carbon-hack-sentiment.herokuapp.com/

    paths:
        /search : default option, looks up sentiment of CapitalOne as a whole
        /search/<topic> : searches the topic IN ADDITION to CapitalOne

Alexa App:

Visualization Site:

Resources:
    https://github.com/geduldig/TwitterAPI
