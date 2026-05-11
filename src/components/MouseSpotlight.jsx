import { useEffect, useState } from "react";

export default function MouseSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function move(e) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-5] hidden lg:block"
      style={{
        background: `
          radial-gradient(
            600px circle at ${position.x}px ${position.y}px,
            rgba(176,65,255,.10),
            transparent 40%
          )
        `,
      }}
    />
  );
}