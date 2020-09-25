// Firebase(the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB7cyKN_ue9390iqtlHWN2t1p9g_BfxMwQ",
    authDomain: "quizapp-push-notification.firebaseapp.com",
    // databaseURL: "https://fir-push-notification1.firebaseio.com",
    projectId: "quizapp-push-notification",
    // storageBucket: "fir-push-notification1.appspot.com",
    messagingSenderId: "122159620785",
    appId: "1:122159620785:web:85d357d087db8973b5b890"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then(() => {
        return messaging.getToken()
    }).then((token) => {
        alert(token);
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
}