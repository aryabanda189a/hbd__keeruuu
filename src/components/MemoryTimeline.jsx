import { useEffect } from "react";
import "./MemoryTimeline.css";
import { motion } from "framer-motion";
const memories = [
  {
    date: "10 November 2023",
    image: "/mem1.jpg",
    text: "Your first pic in my phone ❤️"
  },

  {
    date: "September 2024",
    image: "/mem2.jpeg",
    text: "Our first ride ✨"
  },
  {
    date: "2 Dec 2024",
    image: "/mem3.jpg",
    text: "My first kinderjoy 💕"
  },
  {
    date: "19 Jan 2025",
    image: "/mem4.jpg",
    text: "First gift from you 💖"
  },
    {
    date: "7 Feb 2025",
    image: "/mem5.jpeg",
    text: "Our first date 💖"
  },
  {
    date: "16 Feb 2025",
    image: "/mem6.jpeg",
    text: "Our first fight 💖"
  },
  {
    date: "7 March 2025",
    image: "/mem7.jpg",
    text: "Your first birthday with me 💖"
  },
  {
    date: "17 April 2025",
    image: "/mem8.jpg",
    text: "Confession 💖"
  },
  {
    date: "28 May 2025",
    image: "/mem9.jpeg",
    text: "A heartbreak 💖"
  },
    {
    date: "3 Sept 2025",
    image: "/rusty.jpg",
    text: "Rustyyyyy 💖"
  },
  {
    date: "26 Sept 2025",
    image: "/mem10.jpg",
    text: "Our first movie date 💖"
  },
  {
    date: "4 Oct 2025",
    image: "/mem11.jpg",
    text: "A sweet restart to our journey 💖"
  },
  {
    date: "16 Oct 2025",
    image: "/mem12.jpg",
    text: "First responsibility as a bf 💖"
  },
  {
    date: "20 Oct 2025",
    image: "/mem13.jpg",
    text: "My girl first time in saree 💖"
  },
  {
    date: "19 Jan 2026",
    image: "/mem14.jpg",
    text: "My sweeth proposal 💖"
  },
  {
    date: "Today",
    image: "/mem15.jpg",
    text: "And many more memories to come forever 💖"
  },
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
