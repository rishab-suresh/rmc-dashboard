import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBWWQtYioQzMjnxA7oWcP_3yN66UtIkM2A",
  authDomain: "rmc-employee.firebaseapp.com",
  databaseURL: "https://rmc-employee-default-rtdb.firebaseio.com",
  projectId: "rmc-employee",
  storageBucket: "rmc-employee.appspot.com",
  messagingSenderId: "497961924911",
  appId: "1:497961924911:web:c4519fb856d4c6ef5c49da",
  measurementId: "G-YJ8Q0NLFKQ",
};

// Initialize Firebase
// export const firebaseaspp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseaspp);

