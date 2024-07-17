  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBVL3zGeEL6fHb1BpJ6B-NOGnLJ7oz5LPM",
    authDomain: "project1-ec961.firebaseapp.com",
    projectId: "project1-ec961",
    storageBucket: "project1-ec961.appspot.com",
    messagingSenderId: "344080091356",
    appId: "1:344080091356:web:c8177f66cb1e61ea504c19",
    measurementId: "G-TGL25QZWP0"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export{
 
    db
  }