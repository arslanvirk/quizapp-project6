// Firebase App (the core Firebase SDK) is always required and must be listed first 
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
// Add Firebase products that you want to use
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

//FireBase Messaging Implementation

const firebaseConfig = {
  apiKey: "AIzaSyB7cyKN_ue9390iqtlHWN2t1p9g_BfxMwQ",
  authDomain: "quizapp-push-notification.firebaseapp.com",
  // databaseURL: "https://fir-push-notification1.firebaseio.com",
  projectId: "quizapp-push-notification",
  // storageBucket: "fir-push-notification1.appspot.com",
  messagingSenderId: "122159620785",
  appId: "1:122159620785:web:85d357d087db8973b5b890"
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();