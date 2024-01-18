import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  function calculateTimeRemaining() {
    // Calculate the time remaining until the next update
    // You can replace this with your specific date and time
    const nextUpdateDate = new Date('2024-01-19T12:00:00Z');
    const now = new Date();
    const difference = nextUpdateDate - now;

    if (difference <= 0) {
      // If the next update time has passed, return 0 for all fields
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="text-white text-center mt-4 text-lg">
      {timeRemaining.days > 0 && (
        <div>
          {timeRemaining.days} {timeRemaining.days === 1 ? 'day' : 'days'}{' '}
        </div>
      )}
      <div>
        {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
      </div>
      Til neste oppdatering.
    </div>
  );
};

export default Countdown;
