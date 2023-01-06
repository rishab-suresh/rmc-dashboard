// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, onValue } from "firebase/database";
// import { useEffect } from "react";

// const UserDatabase = ({ setUsers }) => {
//   var user = null;
//   var idle = 0
//   var productive = 0
//   var breakTime = 0
//   useEffect(() => {
//     const config = {
//       apiKey: "AIzaSyBWWQtYioQzMjnxA7oWcP_3yN66UtIkM2A",
//       authDomain: "rmc-employee.firebaseapp.com",
//       databaseURL: "https://rmc-employee-default-rtdb.firebaseio.com",
//       projectId: "rmc-employee",
//       storageBucket: "rmc-employee.appspot.com",
//       messagingSenderId: "497961924911",
//       appId: "1:497961924911:web:c4519fb856d4c6ef5c49da",
//       measurementId: "G-YJ8Q0NLFKQ",
//     };
//     initializeApp(config);
//     const db = getDatabase();

//     const userRef = ref(db, "users/7eTaM8jp5rM7gPwTb3D5P1aRzwi1");
//     onValue(userRef, (snapshot) => {
//       user = (snapshot.val());
//       var statusSize = snapshot.child("Activity").size
//       idle = snapshot.child("Activity").child("05 Jan 2023").child("Status").child("Idle").val();
//       productive = snapshot.child("Activity").child("05 Jan 2023").child("Status").child("Productive").val();
//       breakTime = snapshot.child("Activity").child("05 Jan 2023").child("Status").child("Break").val();
      
//       // console.log(user);
//       setUsers([user]);
//     });
//   }, [setUsers]);
// };

// export default UserDatabase;