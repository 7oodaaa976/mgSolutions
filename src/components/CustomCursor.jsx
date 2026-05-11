import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    function move(e) {
      setPos({ x: e.clientX, y: e.clientY });
    }

    function enter() {
      setHovering(true);
    }

    function leave() {
      setHovering(false);
    }

    const targets = document.querySelectorAll("a, button, .magnetic");

    window.addEventListener("mousemove", move);

    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`
          pointer-events-none fixed left-0 top-0 z-[99997]
          h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-white transition-transform duration-75
          max-lg:hidden
          ${hovering ? "scale-0" : "scale-100"}
        `}
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      />

      <div
        className={`
          pointer-events-none fixed left-0 top-0 z-[99996]
          h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full
          border border-[#b041ff]/70
          bg-[#2f8cff]/10 backdrop-blur-sm
          transition-all duration-300
          max-lg:hidden
          ${hovering ? "scale-[2.2] border-white/30 bg-[#b041ff]/15" : "scale-100"}
        `}
        style={{ transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)` }}
      />
    </>
  );
}