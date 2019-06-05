# Imports the Google Cloud client library
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

# Instantiates a client
client = language.LanguageServiceClient()


def calculate_sentiment(text):
    """Analyzes the text."""
    document = types.Document(
        content=text,
        type=enums.Document.Type.PLAIN_TEXT
    )
    response = client.analyze_sentiment(document=document, encoding_type='UTF8')
    return response