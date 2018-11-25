import * as firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAPPo1w9qSTjWT269GEpDB0fS0WGOA0rsg",
  authDomain: "note241118.firebaseapp.com",
  databaseURL: "https://note241118.firebaseio.com",
  projectId: "note241118",
  storageBucket: "note241118.appspot.com",
  messagingSenderId: "475985844132"
};

// export const noteData = firebase.initializeApp(config);
firebase.initializeApp(config);
export const noteData = firebase.database().ref('note_manager');//noteData.val()