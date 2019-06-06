from TwitterAPI import TwitterAPI
from pprint import pprint
from analyzer import calculate_sentiment
from collections import defaultdict
from math import isclose

api = TwitterAPI(
    "UvoAVFfUa2FZQYbq2fKHK0VlX",
    "qnAunUiohK9adcDPcVTB0jtlwfWTEQvdbd5pIMQzzltEbhhaMB",
    "4244186598-ZdnGgjF6YnpyASCD0gUETtwIs9MX1NCudeb4Sfe",
    "NrZ24yd1eQLCiU2k8rghCVBOj8PqMC3Gmv8stVaP2vJoI"
)

POSITIVE_THRESHOLD = 0.3333
NEGATIVE_THRESHOLD = -0.3333


def get_tweets(topic, count):
    r = api.request('search/tweets', {'q': topic, 'count': count, 'tweet_mode': 'extended'})
    tweets = []
    for index, item in enumerate(r):
        if 'retweeted_status' in item:
            text = item['retweeted_status']['full_text']
        else:
            text = item['full_text']
        tweets.append(text)
    return tweets


def analyze_sentiment(topics):
    tweets = (tweet for topic in topics for tweet in get_tweets(topic, 100))

    tweets_string = "\n".join(tweets)
    annotations = calculate_sentiment(tweets_string)
    report = defaultdict(int)

    for index, sentence in enumerate(annotations.sentences):
        score = sentence.sentiment.score
        if not isclose(score, 0):
            if score > POSITIVE_THRESHOLD:
                report['positives'] += 1
            elif score < NEGATIVE_THRESHOLD:
                report['negatives'] += 1
            else:
                report['neutrals'] += 1
            report['total'] += 1
            report['average'] += score

    report['average'] /= report['total']
    
    return report

if __name__ == '__main__':
    print(analyze_sentiment(['@capitalone']))