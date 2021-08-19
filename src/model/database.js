import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyB3eTixPwzFobVTrmom_vQpOnP3wZ5hkuA",
	authDomain: "react-chat-9e283.firebaseapp.com",
	databaseURL: "https://react-chat-9e283-default-rtdb.firebaseio.com",
	projectId: "react-chat-9e283",
	storageBucket: "react-chat-9e283.appspot.com",
	messagingSenderId: "178991264140",
	appId: "1:178991264140:web:bdfebce71e614ef73626a9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
