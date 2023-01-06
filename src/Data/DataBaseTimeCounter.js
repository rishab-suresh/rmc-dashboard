let currentTime = 0,
  loginTime = 0,
  TotalWorkTime = 0,
  callDuration = 0,
  meetingDuration = 0,
  productivityTime = 0,
  idleTime = 0;
const dateOptions = {
  day: "2-digit",
  month: "short",
  year: "numeric",
};
const date = new Date().toLocaleDateString("en-GB", dateOptions);
const formattedDate = date.toString();

if (activityData) {
  currentTime = Date.now();
  loginTime = activityData.Login;
  TotalWorkTime = (currentTime - loginTime) / 36000000000;
  callDuration = activityData.call_duration;
  meetingDuration = activityData.meetings_duration;
  productivityTime = callDuration + meetingDuration;
  idleTime =
    TotalWorkTime -
    (productivityTime + activityData.break_duration) / 36000000000;
} else {
  currentTime =
    loginTime =
    TotalWorkTime =
    callDuration =
    meetingDuration =
    productivityTime =
    idleTime =
      0;
}
const idleTimeFormatted = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 2,
}).format(parseFloat(idleTime));
const productivityFormatted = new Intl.NumberFormat("en-US", {
  style: "decimal",
  maximumFractionDigits: 2,
}).format(parseFloat(productivityTime / 3600000));

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState, React } from "react";

function App() {
  const [timers, setTimers] = useState({});

  useEffect(() => {
    const config = {
      apiKey: "AIzaSyBWWQtYioQzMjnxA7oWcP_3yN66UtIkM2A",
      authDomain: "rmc-employee.firebaseapp.com",
      databaseURL: "https://rmc-employee-default-rtdb.firebaseio.com",
      projectId: "rmc-employee",
      storageBucket: "rmc-employee.appspot.com",
      messagingSenderId: "497961924911",
      appId: "1:497961924911:web:c4519fb856d4c6ef5c49da",
      measurementId: "G-YJ8Q0NLFKQ",
    };
    initializeApp(config);
    const db = getDatabase();

    // const usersRef = firebase.database().ref("users");
    const usersRef = ref(db, "users");
    onValue(usersRef, (snapshot) => {
      const uid = "7eTaM8jp5rM7gPwTb3D5P1aRzwi1";
      const userRef = ref(db, `users/${uid}/Activity`);
      onValue(userRef, (snapshot) => {
        const date = "04 Jan 2023";
        const statusRef = ref(db, `users/${uid}/Activity/${date}/Status`);
        onValue(statusRef, (snapshot) => {
          const status = snapshot.val();
          if (!timers[uid]) {
            setTimers((prevTimers) => ({
              ...prevTimers,
              [uid]: {
                productive: 0,
                idle: 0,
                break: 0,
              },
            }));
          }

          let interval;
          if (status.Productive) {
            interval = setInterval(() => {
              setTimers((prevTimers) => ({
                ...prevTimers,
                [uid]: {
                  ...prevTimers[uid],
                  productive: prevTimers[uid].productive + 1,
                },
              }));
            }, 1000);
          } else if (status.Idle) {
            interval = setInterval(() => {
              setTimers((prevTimers) => ({
                ...prevTimers,
                [uid]: {
                  ...prevTimers[uid],
                  idle: prevTimers[uid].idle + 1,
                },
              }));
            }, 1000);
          } else if (status.Break) {
            interval = setInterval(() => {
              setTimers((prevTimers) => ({
                ...prevTimers,
                [uid]: {
                  ...prevTimers[uid],
                  break: prevTimers[uid].break + 1,
                },
              }));
            }, 1000);
          } else {
            clearInterval(interval);
          }
        });
      });
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Productive</th>
          <th>Idle</th>
          <th>Break</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(timers).map((uid) => (
          <tr key={uid}>
            <td>{/* retrieve and display user's name here */}</td>
            <td>
              {timers[uid].productive > 0 ? (
                <div>{formatTime(timers[uid].productive)}</div>
              ) : null}
            </td>
            <td>
              {timers[uid].idle > 0 ? (
                <div>{formatTime(timers[uid].idle)}</div>
              ) : null}
            </td>
            <td>
              {timers[uid].break > 0 ? (
                <div>{formatTime(timers[uid].break)}</div>
              ) : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours}:${minutes}:${seconds}`;
}

export default App;
