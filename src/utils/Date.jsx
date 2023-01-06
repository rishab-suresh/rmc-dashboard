import React, { useState, useEffect } from "react";

export function DateComponent() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000); // Update the date every 1 second

    return () => clearInterval(intervalId);
  }, []); // Only run the effect once when the component mounts

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  return (
    <div className="date">{date.toLocaleDateString("en-US", dateOptions)}</div>
  );
}