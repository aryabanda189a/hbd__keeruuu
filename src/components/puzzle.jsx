import { useState } from "react";
import "./Puzzle.css";

const size = 3;

const generatePieces = () => {
  const pieces = [];
  for (let i = 0; i < size * size; i++) {
    pieces.push(i);
  }
  return pieces.sort(() => Math.random() - 0.5);
};

export default function Puzzle({ onComplete }) {
  const [pieces, setPieces] = useState(generatePieces());
  const [solved, setSolved] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null); // tap / click to swap

  const swapPieces = (fromIndex, toIndex) => {
    const newPieces = [...pieces];
    [newPieces[fromIndex], newPieces[toIndex]] = [
      newPieces[toIndex],
      newPieces[fromIndex]
    ];
    setPieces(newPieces);

    // Check if solved
    if (!solved && newPieces.every((val, index) => val === index)) {
      setSolved(true);
      setTimeout(() => {
        onComplete();
      }, 1600);
    }
  };

  return (
    <div className="card">
      <div className={`puzzle-container ${solved ? "puzzle-solved" : ""}`}>
        {pieces.map((piece, index) => (
          <div
            key={index}
            className={`puzzle-piece ${
              selectedIndex === index ? "puzzle-piece-selected" : ""
            }`}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text/plain", index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              const fromIndex = e.dataTransfer.getData("text");
              swapPieces(Number(fromIndex), index);
            }}
            onClick={() => {
              if (selectedIndex === null) {
                setSelectedIndex(index);
              } else if (selectedIndex === index) {
                setSelectedIndex(null);
              } else {
                swapPieces(selectedIndex, index);
                setSelectedIndex(null);
              }
            }}
            style={{
              backgroundImage: "url('/puzzle.jpg')",
              backgroundPosition: `${(piece % size) * -100}px ${Math.floor(piece / size) * -100}px`,
              backgroundSize: "300px 300px"
            }}
          />
        ))}
      </div>
      <p className="puzzle-hint">
        Tap or click one tile to select it, then tap another tile to swap their places.
      </p>
    </div>
  );
}