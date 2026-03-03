import { useState, useEffect } from "react";

export default function TeddyMessage({ onFinish }) {
  const message = [
    "Happy Birthday My Love ❤️",
    "You are the most special person in my life ✨",
    "May your smile always shine like this 🌟"
  ];

  const [displayed, setDisplayed] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < message.length) {
      if (charIndex < message[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayed(prev => prev + message[lineIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setDisplayed(prev => prev + "\n");
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }
    } else {
      setTimeout(onFinish, 2000);
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="teddy-section">
      <img src="/teddy.gif" alt="teddy" />
      <pre>{displayed}</pre>
    </div>
  );
}