import { useEffect, useState } from "react";

export default function Countdown({ onFinish }) {
  const target = new Date(Date.now() + 10000); // 10 seconds for testing
  const [timeLeft, setTimeLeft] = useState(target - new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = target - new Date();

      if (diff <= 0) {
        clearInterval(timer);
        onFinish();
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onFinish]);

  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="countdown">
      <div className="card countdown-card">
        <p className="countdown-subtitle">A tiny wait before your surprise</p>
        <h1>It’s Almost Time… 💖</h1>
        <div className="countdown-circle">
          <span className="countdown-number">{seconds}</span>
          <span className="countdown-label">seconds</span>
        </div>
      </div>
    </div>
  );
}