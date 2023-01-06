  // import { useState, useEffect } from "react";

  // export const useTimer = (currentStatus) => {
  //   const [breakTime, setBreakTime] = useState(0);
  //   const [idleTime, setIdleTime] = useState(0);
  //   const [productiveTime, setProductiveTime] = useState(0);

  //   useEffect(() => {
  //     let intervalId;

  //     if (idle === "1") {
  //       console.log("Yes")
  //       intervalId = setInterval(() => {
  //         setIdleTime((idleTime) => idleTime + 1000);
  //       }, 1000);
  //     } else {
  //       clearInterval(intervalId);
  //     }

  //     return () => clearInterval(intervalId);
  //   }, [currentStatus]);

  //   return {
  //     breakTime,
  //     idleTime,
  //     productiveTime,
  //   };
  // };
