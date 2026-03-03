import { useEffect } from "react";

export default function FinalSurprise({ onFinish }) {

  useEffect(() => {
    // Floating hearts on click
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerText = "💖";
      document.body.appendChild(heart);

      heart.style.left = Math.random() * 100 + "vw";

      setTimeout(() => heart.remove(), 4000);
    };

    document.addEventListener("click", createHeart);

    return () => document.removeEventListener("click", createHeart);
  }, []);

  return (
    <div className="final-page">
      <h1>You Mean The World To Me 💖</h1>
      <p>
        Thank you for all the memories, smiles, and laughter.
        This is just the beginning of many more beautiful moments.
      </p>

      <button
        className="continue-btn"
        onClick={() => onFinish && onFinish()}
      >
        One Last Message 💌
      </button>
    </div>
  );
}