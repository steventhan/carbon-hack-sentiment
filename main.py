from TwitterAPI import TwitterAPI
from pprint import pprint

api = TwitterAPI(
    "UvoAVFfUa2FZQYbq2fKHK0VlX",
    "qnAunUiohK9adcDPcVTB0jtlwfWTEQvdbd5pIMQzzltEbhhaMB",
    "4244186598-ZdnGgjF6YnpyASCD0gUETtwIs9MX1NCudeb4Sfe",
    "NrZ24yd1eQLCiU2k8rghCVBOj8PqMC3Gmv8stVaP2vJoI"
)

r = api.request('search/tweets', {'q':'@capitalone'})
for item in r:
    pprint(item)
