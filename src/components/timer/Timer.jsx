import React, { useState, useEffect } from "react";

import { StyledTimer } from "./Timer.styled.js";

const Timer = () => {
  // IYKYK ): 
  // Saturday, Oct 23, 2021, 10:24 PM PST +8 hours to convert to UTC
  const timestamp = Date.UTC(2021, 9, 24, 6, 24, 0); // months are 0-indexed
  const startTime = new Date(timestamp);

  const calculateTime = () => {
    const now = new Date();
  
    let years = now.getFullYear() - startTime.getFullYear();
    let months = now.getMonth() - startTime.getMonth();
    let days = now.getDate() - startTime.getDate();
    let hours = now.getHours() - startTime.getHours();
    let minutes = now.getMinutes() - startTime.getMinutes();
    let seconds = now.getSeconds() - startTime.getSeconds();

     // Handle negative values by borrowing
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        // Get days in previous month
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    return { years, months, days, hours, minutes, seconds };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <StyledTimer>
      <div className="heart"></div>
      <div className="time">
        <p>
          {time.years} Years {time.months} Months {time.days} Days
        </p>
        <p>
          {time.hours} Hours {time.minutes} Minutes {time.seconds} Seconds
        </p>
        <p>😘</p>
      </div>
    </StyledTimer>
  );
};

export default Timer;