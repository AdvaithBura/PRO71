import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyBC8Qh-m3p9WRUS4HClpClGm0nvWXwNjGY",
    authDomain: "e-ride-3daf3.firebaseapp.com",
    databaseURL: "https://e-ride-3daf3-default-rtdb.firebaseio.com/",
    projectId: "e-ride-3daf3",
    storageBucket: "e-ride-3daf3.appspot.com",
    messagingSenderId: "394195673092",
    appId: "1:394195673092:web:ded2b894699700c112d551"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


