import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC_mOpqYZ5jxZue3GYTl3u5LFaCMqmZaoQ",
  authDomain: "form-karlan.firebaseapp.com",
  databaseURL: "https://form-karlan.firebaseio.com",
  projectId: "form-karlan",
  storageBucket: "form-karlan.appspot.com",
  messagingSenderId: "125398490337",
  appId: "1:125398490337:web:51c14a269d7104a4502ba0"
};

firebase.initializeApp(firebaseConfig);

export default firebase