
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  import { getAuth,onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.13/firebase-auth.js'
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDfiVL64WL2xPBJ1X4GqxdiV_2EXR-gUsw",
    authDomain: "iscool-82d08.firebaseapp.com",
    projectId: "iscool-82d08",
    storageBucket: "iscool-82d08.appspot.com",
    messagingSenderId: "396165503285",
    appId: "1:396165503285:web:b25d5c1ac56fb7c296d47c",
    measurementId: "G-7MLKPM06VC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
console.log(auth);

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(user)
    } else {
      console.log(user)
      // User is signed out
      console.log("user not logged in")
    }
  });