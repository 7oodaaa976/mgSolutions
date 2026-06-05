import { useEffect, useState } from "react";

const words = ["WEB", "ERP", "POS", "AI", "UI/UX"];

export default function ExperienceLayer() {
  const [loading, setLoading] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const hideTimer = setTimeout(() => setHideLoader(true), 2600);
    const removeTimer = setTimeout(() => setLoading(false), 3300);

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-[9999] h-[3px] w-full">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#2f8cff] via-[#b041ff] to-[#ff4fd8] shadow-[0_0_18px_rgba(176,65,255,.8)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="pointer-events-none fixed inset-0 z-[9998] opacity-[0.03] mix-blend-overlay bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:4px_4px]" />

      {loading && (
        <div
          className={`fixed inset-0 z-[99999] grid place-items-center overflow-hidden bg-[#02040d] transition duration-700 ${
            hideLoader ? "opacity-0 scale-110 blur-xl" : "opacity-100 scale-100 blur-0"
          }`}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:70px_70px] opacity-25" />
            <div className="absolute right-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full bg-[#2f8cff]/25 blur-[120px]" />
            <div className="absolute bottom-[-160px] left-[-160px] h-[420px] w-[420px] rounded-full bg-[#ff4fd8]/25 blur-[120px]" />
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2f8cff]/15 animate-[spin_12s_linear_infinite]" />
            <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff4fd8]/20 animate-[spin_8s_linear_infinite_reverse]" />
          </div>

          <div className="relative text-center">
            <div className="absolute -inset-24 rounded-full bg-[#b041ff]/20 blur-[80px]" />

            <div className="relative mx-auto grid h-[160px] w-[160px] place-items-center rounded-[45px] border border-white/15 bg-white/[.06] shadow-[0_0_100px_rgba(176,65,255,.35)] backdrop-blur-xl animate-[loaderPulse_2s_ease-in-out_infinite]">
              <div className="absolute inset-[-3px] rounded-[48px] bg-gradient-to-r from-[#2f8cff] via-[#b041ff] to-[#ff4fd8] opacity-80 blur-md" />

              <div className="relative grid h-full w-full place-items-center rounded-[45px] bg-[#050816]">
                <span className="bg-gradient-to-r from-[#2f8cff] via-[#b041ff] to-[#ff4fd8] bg-clip-text text-7xl font-black tracking-[-5px] text-transparent">
                  MG
                </span>
              </div>
            </div>

            <p className="relative mt-8 text-sm font-black uppercase tracking-[12px] text-white/65 max-md:tracking-[7px]">
              Solutions
            </p>

            <h2 className="relative mt-4 text-3xl font-black text-white max-md:text-xl">
              Loading Digital Experience
            </h2>

            <div className="relative mx-auto mt-8 h-[5px] w-[310px] overflow-hidden rounded-full bg-white/10 max-md:w-[230px]">
              <span className="absolute left-[-45%] top-0 h-full w-[45%] animate-[lineMove_1s_linear_infinite] rounded-full bg-gradient-to-r from-transparent via-[#b041ff] to-[#2f8cff] shadow-[0_0_22px_#b041ff]" />
            </div>

            <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
              {words.map((word) => (
                <span
                  key={word}
                  className="rounded-full border border-white/10 bg-white/[.06] px-4 py-2 text-xs font-black tracking-[2px] text-[#dfe3ff] backdrop-blur"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}