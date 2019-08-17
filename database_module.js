var firebase = require("firebase/app");
require('firebase/database');
const dotenv = require('dotenv');
dotenv.config();

var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var methods = {
    createQueueObject: function(phone, people) {
        var db = firebase.database().ref("queue");
        db.push({
            phone: phone,
            people: people
        })
    },

    deleteQueueObject: function(key) {
        var db = firebase.database().ref("items");
        db.child(key).remove();
    },

    createReadyObject: function(phone, people) {
        var db = firebase.database().ref("ready");
        db.push({
            phone: phone, 
            people: people
        })
    },

    deleteReadyObject: function(key) {
        var db = firebase.database().ref("items");
        db.child(key).remove();
    }
};


exports.data = methods;