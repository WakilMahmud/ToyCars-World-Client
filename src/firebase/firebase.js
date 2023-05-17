// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD7VpD_ekQseBxdmfRH_qFUg5hnIT_IwDQ",
	authDomain: "toy-marketplace-project.firebaseapp.com",
	projectId: "toy-marketplace-project",
	storageBucket: "toy-marketplace-project.appspot.com",
	messagingSenderId: "58101588876",
	appId: "1:58101588876:web:183158e78c856b7fc0aca9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
