import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyDjUuovhRbkom27LAvy5PaQEBz5jSVXJXI",
	authDomain: "freshthreads-43e77.firebaseapp.com",
	databaseURL: "https://freshthreads-43e77.firebaseio.com",
	projectId: "freshthreads-43e77",
	storageBucket: "",
	messagingSenderId: "831778734047",
	appId: "1:831778734047:web:a95f92a28de30186"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
