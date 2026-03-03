import { useEffect, useState, useRef } from "react";
import "./PenguinMessage.css";

const messages = [
  "Happy Birthday My Favorite Human 💖",
  "You make my world brighter every day ✨",
  "I am so lucky to have you 🥹",
  "May your smile shine forever 🌟"
];

export default function PenguinMessage({ onFinish }) {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const cursorRef = useRef(null);
  const paperRef = useRef(null);
  

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (lineIndex < messages.length) {
      if (charIndex < messages[lineIndex].length) {
        const timeout = setTimeout(() => {
          setText(prev => prev + messages[lineIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        }, 110);

        return () => clearTimeout(timeout);
      } else {
        setText(prev => prev + "\n");
        setLineIndex(prev => prev + 1);
        setCharIndex(0);
      }
    } else {
      setTimeout(() => onFinish(), 2000);
    }
  }, [charIndex, lineIndex, onFinish]);

  useEffect(() => {
    if (cursorRef.current && paperRef.current) {
      const cursorRect = cursorRef.current.getBoundingClientRect();
      const paperRect = paperRef.current.getBoundingClientRect();

      setPos({
        x: cursorRect.left - paperRect.left,
        y: cursorRect.top - paperRect.top
      });
    }
  }, [text]);

  return (
    <div className="scene">
      <div className="paper" ref={paperRef}>
        <pre className="text">
          {text}
          <span ref={cursorRef} className="cursor">|</span>
        </pre>

        <img
          src="/penguin.png"
          alt="penguin"
          className="penguin"
          style={{
            left: `${pos.x - 60}px`,
            top: `${pos.y + 10}px`
          }}
        />
      </div>
    </div>
  );
}