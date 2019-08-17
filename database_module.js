var firebase = require("firebase/app");
require('firebase/database');
const dotenv = require('dotenv');
dotenv.config();

var firebaseConfig = {
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var methods = {
    createQueueObject: function(phone, people) {
        var db = firebase.database().ref("queue");
        db.push({
            phone: phone,
            people: people
        }).then(snap => {
            return snap.key;
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