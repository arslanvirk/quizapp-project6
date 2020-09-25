Live Firebase URL:
https://quizapp-push-notification.firebaseapp.com/

## PWA Local Installation

1. Install the Firebase JavaScript SDK:
a. If you don't already have a package.json file, create one by running the following command from the root of your JavaScript project:
npm init
b. Install the firebase npm package and save it to your package.json file by running:
npm install --save firebase
OR
npm i --save firebase firebase 
OR
yarn add firebase

2. import Firebase modules:
import firebase from "firebase";

Set up Firebase Hosting:
1. Install Firebase CLI
npm install -g firebase-tools

2. Initialize your project
Open a terminal window and navigate to or create a root directory for your web app
Sign in to Google:
firebase login
Initiate your project
Run this command from your app’s root directory:
firebase init

Deploy to Firebase Hosting:
When you’re ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). 
Then, run this command from your app’s root directory:
firebase deploy