import { useState } from "react";

export default function LoveLetter({ onFinish }) {
  const [isOpen, setIsOpen] = useState(false);

  // Edit this text to whatever final message you want to show
  const letterText = `My dearest love,

I made all of this just for you. Every little puzzle, every tiny animation,
every second of waiting was filled with thoughts of you.

Thank you for being the most beautiful part of my life.
I am so lucky I get to call you mine. ❤️

Forever yours,
(your name here)`;

  return (
    <div className="love-letter-page">
      <div className={`envelope ${isOpen ? "open" : ""}`}>
        <div className="envelope-pocket" />
        <div className="envelope-flap" />
        <div className="letter">
          <h2>One Last Message 💌</h2>
          <p>{letterText}</p>
        </div>
        <button
          type="button"
          className="envelope-seal"
          onClick={() => setIsOpen(true)}
          aria-label="Open the letter"
        >
          💖
        </button>
      </div>

      {!isOpen && (
        <p className="letter-hint">
          Please click on the glowing heart for a little surprise 💌
        </p>
      )}

      {isOpen && (
        <button className="next-btn letter-next" onClick={onFinish}>
          Continue to the ending ✨
        </button>
      )}
    </div>
  );
}
