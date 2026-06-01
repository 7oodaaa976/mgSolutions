import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div
        className="
        pointer-events-none
        fixed z-[99999]
        h-2 w-2 rounded-full
        bg-white
        max-lg:hidden
      "
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%,-50%)",
        }}
      />

      <div
        className="
        pointer-events-none
        fixed z-[99998]
        h-32 w-32 rounded-full
        bg-[#7B5CFF]/20
        blur-3xl
        max-lg:hidden
      "
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%,-50%)",
        }}
      />
    </>
  );
}