import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { GlobalStyles } from "./global-styles";
import { FirebaseContext } from "./context/firebase";

var config = {
  apiKey: "AIzaSyAWH3XiyBQjQFDbxKrEJNTh0z-SpSOueF8",
  authDomain: "rbsdata-b02f7.firebaseapp.com",
  projectId: "rbsdata-b02f7",
  storageBucket: "rbsdata-b02f7.appspot.com",
  messagingSenderId: "587678028311",
  appId: "1:587678028311:web:bd52efb7103173ede34252",
  measurementId: "G-F2LQGBEBMQ",
};

const firebase = window.firebase.initializeApp(config);
var auth = firebase.auth();

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,

  document.getElementById("root")
);
