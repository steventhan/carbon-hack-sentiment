import json
from os.path import join, dirname
from ibm_watson import ToneAnalyzerV3
from ibm_watson.tone_analyzer_v3 import ToneInput
from twitter import get_tweets
from collections import defaultdict

def get_tones(topic):
    service = ToneAnalyzerV3(
        url='https://gateway.watsonplatform.net/tone-analyzer/api',
        version='2018-06-05',
        iam_apikey='i5NQ4PEpjkuL6SMqASyjoCcnY8ftngT_HTSEAOFi6hf8')

    tweets = get_tweets(topic, 50)

    tweet_object_arr = []

    for tweet in tweets:
        tweet_object_arr.append({'text': tweet,'user': 'not-important'})
    
    tone_chat = service.tone_chat(tweet_object_arr).get_result()

    return tone_chat

def analyze_tones(topic):
    tone_chat = get_tones(topic)

    report = defaultdict(int)

    for tone_response in tone_chat['utterances_tone']:
        tones = tone_response['tones']

        for tone in tones:
            tone_id = tone['tone_id']
            score = tone['score']
            report[tone_id] += 1
            report[tone_id + "_average_score"] += score

        report['total'] += 1

    for key in list(report.keys()):
        if key != "total" and not "_" in key:
            report[key + '_average_score'] /= report[key]

    return report

if __name__ == '__main__':
    print(analyze_tones(['@capitalone']))