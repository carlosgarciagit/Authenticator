import pyrebase

config = {
    "apiKey": "AIzaSyDalLMFokRStD376mIQ-TpLDn-e-bI2x7U",
    "authDomain": "authenticator-13e56.firebaseapp.com",
    "databaseURL": "https://authenticator-13e56.firebaseio.com",
    "storageBucket": "authenticator-13e56.appspot.com"
  }

firebase = pyrebase.initialize_app(config)

db = firebase.database()


def getCredData():
    credRef = db.child("credRef")
    length = db.child("passwordLength").get().val()

    #add wait for length to retreive

    data = []
    for i in range(length):

        letterData = []
        for j in range(2):
            info = credRef.child(i).child(j).get().val()
            letterData.append(info)

        data.append(letterData)

    return data

print(getCredData())

def getLoginData():
    loginRef = db.child("loginData")
