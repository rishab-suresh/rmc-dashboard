import React, { useState, useRef, useEffect } from "react";
import "../pages/styles.css";
import { scrollDown } from "./ScrollRef";

export const AutoScroller = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const ref = useRef(null); // store a reference to the element that you want to scroll

  useEffect(() => {
    if (isScrolling) {
      const id = setInterval(() => scrollDown(ref), 5000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }
  }, [isScrolling]);

  const toggleScrolling = () => {
    setIsScrolling(!isScrolling);
  };

  return (
    <div>
      <button className="sticky-button" onClick={toggleScrolling}></button>
    </div>
  );
};
