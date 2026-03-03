import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Puzzle from "./components/puzzle";
import PenguinMessage from "./components/PenguinMessage";
import FinalSurprise from "./components/FinalSurprise";
import MemoryTimeline from "./components/MemoryTimeline";
import Countdown from "./components/Countdown";
import LoveLetter from "./components/LoveLetter";
import CinematicEnding from "./components/CinematicEnding";

import "./styles.css";

function App() {
  const [stage, setStage] = useState("countdown");

  // ✅ Hooks MUST be inside component
  const audioRef = useRef(null);
  const [musicOn, setMusicOn] = useState(false);

  const toggleMusic = () => {
    if (!musicOn) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setMusicOn(!musicOn);
  };

  return (
    <div className="app">

      {/* 🎵 Music */}
      <audio ref={audioRef} src="/music.mp3" loop />
      <button className="music-btn" onClick={toggleMusic}>
        {musicOn ? "🔊" : "🎵"}
      </button>

      {/* 🌟 Smooth Stage Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={stage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >

          {stage === "countdown" && (
            <Countdown onFinish={() => setStage("puzzle")} />
          )}

          {stage === "puzzle" && (
            <Puzzle onComplete={() => setStage("message")} />
          )}

          {stage === "message" && (
            <PenguinMessage onFinish={() => setStage("timeline")} />
          )}

          {stage === "timeline" && (
            <MemoryTimeline onFinish={() => setStage("final")} />
          )}

          {stage === "final" && (
            <FinalSurprise onFinish={() => setStage("letter")} />
          )}

          {stage === "letter" && (
            <LoveLetter onFinish={() => setStage("ending")} />
          )}

          {stage === "ending" && <CinematicEnding />}

        </motion.div>
      </AnimatePresence>

    </div>
  );
}

export default App;