import { useEffect } from "react";
import "./MemoryTimeline.css";
import { motion } from "framer-motion";
const memories = [
  {
    date: "12 June 2022",
    image: "/mem1.jpg",
    text: "The day we first met ❤️"
  },
  {
    date: "05 September 2022",
    image: "/mem2.jpg",
    text: "Our first long call that lasted all night ✨"
  },
  {
    date: "14 February 2023",
    image: "/mem3.jpg",
    text: "Our first Valentine's together 💕"
  },
  {
    date: "Today",
    image: "/mem4.jpg",
    text: "And many more memories to come forever 💖"
  }
];

export default function MemoryTimeline({ onFinish }) {

  useEffect(() => {
    const elements = document.querySelectorAll(".memory-card");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.3 });

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="card">
    <div className="timeline-container">
      <h1 className="timeline-title">Our Beautiful Journey ❤️</h1>

      <div className="timeline">
        {memories.map((mem, index) => (
          <div 
            key={index} 
            className={`memory-card ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <h3>{mem.date}</h3>
              <img src={mem.image} alt="memory" />
              <p>{mem.text}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="next-btn" onClick={onFinish}>
        Continue ❤️
      </button>
    </div></div>
  );
}