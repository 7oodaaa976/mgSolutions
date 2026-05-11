import { useEffect, useState } from "react";
// Loader
export default function ExperienceLayer() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress((scrollTop / docHeight) * 100);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <div className="fixed left-0 top-0 z-[9999] h-[3px] w-full bg-transparent">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#2f8cff] via-[#b041ff] to-[#ff4fd8] shadow-[0_0_18px_rgba(176,65,255,.8)] transition-[width]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[9998] opacity-[0.035] mix-blend-overlay bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:4px_4px]" />

      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 z-[99999] grid place-items-center bg-[#02040d]">
          <div className="relative text-center">
            <div className="absolute -inset-12 rounded-full bg-[#b041ff]/20 blur-3xl"></div>

            <h1 className="relative bg-gradient-to-r from-[#2f8cff] via-[#b041ff] to-[#ff4fd8] bg-clip-text text-7xl font-black tracking-[-3px] text-transparent max-md:text-5xl">
              MG
            </h1>

            <p className="relative mt-3 text-xl font-black tracking-[8px] text-white/80 max-md:text-base">
              SOLUTIONS
            </p>

            <div className="relative mx-auto mt-8 h-[3px] w-[220px] overflow-hidden rounded-full bg-white/10">
              <span className="absolute left-[-40%] top-0 h-full w-[40%] animate-[lineMove_1.2s_linear_infinite] rounded-full bg-gradient-to-r from-transparent via-[#b041ff] to-[#2f8cff] shadow-[0_0_18px_#b041ff]"></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}