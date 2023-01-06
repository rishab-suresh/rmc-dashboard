import { useState, useEffect } from "react";
import "../styles.css";
import { Table } from "react-bootstrap";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, child } from "firebase/database";

const getStyles = (activity) => {
  switch (activity) {
    case "idle":
      return { backgroundColor: "#ffcccc", color: "white !important" };
    case "break":
      return { backgroundColor: "yellow" };
    case "productive":
      return { backgroundColor: "#ccffcc" };
    default:
      return {};
  }
};

export const Orders = () => {
  const [users, setUsers] = useState([]);

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

    const usersRef = ref(db, "users");
    onValue(usersRef, (snapshot) => {
      let users = [];
      snapshot.forEach((childSnapshot) => {
        let user = childSnapshot.val();
        let userId = childSnapshot.key;
        users.push({ userId, user });
      });
      setUsers(users);
    });
  }, [setUsers]);

  return (
    <div>
      {users.map((user) => (
        <User key={user.userId} user={user} />
      ))}
    </div>
  );
};

const User = ({ user }) => {
  const [idle, setIdle] = useState();
  const [productive, setProductive] = useState();
  const [breakTimer, setBreakTimer] = useState();

  const [breakTime, setBreakTime] = useState(0);
  const [idleTime, setIdleTime] = useState(0);
  const [productiveTime, setProductiveTime] = useState(0);
  const [activity, setActivity] = useState("idle");

  useEffect(() => {
    if (idle === "1") {
      setActivity("idle");
    } else if (breakTimer === "1") {
      setActivity("break");
    } else if (productive === "1") {
      setActivity("productive");
    }
  }, [idle, productive, breakTimer]);

  const styles = getStyles(activity);
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

    const userRef = ref(db, `users/${user.userId}`);
    onValue(userRef, (snapshot) => {
      var statusSize = snapshot.child("Activity").size;
      var count = 0;
      let recentDate;
      snapshot.child("Activity").forEach((child) => {
        if (count == statusSize - 1) {
          recentDate = child.key;
          console.log(recentDate);
        }
        count++;
      });
      console.log(recentDate);
      var idleVal = snapshot
        .child("Activity")
        .child(recentDate)
        .child("Status")
        .child("Idle")
        .val();

      var productiveVal = snapshot
        .child("Activity")
        .child(recentDate)
        .child("Status")
        .child("Productive")
        .val();
      var breakTimerVal = snapshot
        .child("Activity")
        .child(recentDate)
        .child("Status")
        .child("Break")
        .val();

      setIdle(idleVal);
      setProductive(productiveVal);
      setBreakTimer(breakTimerVal);
    });
  }, [user.userId]);

  useEffect(() => {
    let intervalId;

    if (idle == "1") {
      intervalId = setInterval(() => {
        setIdleTime((idleTime) => idleTime + 1000);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [idle]);

  useEffect(() => {
    let intervalId;

    if (breakTimer == "1") {
      intervalId = setInterval(() => {
        setBreakTime((breakTime) => breakTime + 1000);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [breakTimer]);

  useEffect(() => {
    let intervalId;

    if (productive == "1") {
      intervalId = setInterval(() => {
        setProductiveTime((productiveTime) => productiveTime + 1000);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [productive]);
  // similar useEffect for breakTime and productiveTime state variables

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${hours}:${minutes}:${seconds}`;
  };


  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Productive</th>
            <th>Idle</th>
            <th>Break</th>
          </tr>
        </thead>
        <tbody style={styles}>
          <tr>
            <td>
              <span>{user.user.Name}</span>
            </td>
            <td>
              <span>{activity}</span>
            </td>
            <td>
              <span>{formatTime(productiveTime)} </span>
            </td>
            <td>
              <span>{formatTime(idleTime)}</span>
            </td>
            <td>
              <span>{formatTime(breakTime)}</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
