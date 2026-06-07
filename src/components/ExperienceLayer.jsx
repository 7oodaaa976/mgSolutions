import { useEffect, useState } from "react";

const bootSteps = [
  "Initializing MG.OS",
  "Loading Interface Modules",
  "Syncing ERP / POS Layers",
  "Optimizing Digital Experience",
  "System Ready",
];

const modules = ["WEB", "ERP", "POS", "AI", "UI/UX"];

export default function ExperienceLayer() {
  const [loading, setLoading] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);
  const [progress, setProgress] = useState(0);
  const [bootProgress, setBootProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const bootTimer = setInterval(() => {
      setBootProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 4;
      });
    }, 80);

    const stepTimer = setInterval(() => {
      setActiveStep((prev) =>
        prev < bootSteps.length - 1 ? prev + 1 : prev
      );
    }, 520);

    const hideTimer = setTimeout(() => setHideLoader(true), 3000);
    const removeTimer = setTimeout(() => setLoading(false), 3700);

    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(bootTimer);
      clearInterval(stepTimer);
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

      <div className="pointer-events-none fixed inset-0 z-[9998] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:4px_4px] opacity-[0.03] mix-blend-overlay" />

      {loading && (
        <div
          className={`fixed inset-0 z-[99999] grid place-items-center overflow-hidden bg-[#02040d] transition duration-700 ${
            hideLoader
              ? "scale-110 opacity-0 blur-xl"
              : "scale-100 opacity-100 blur-0"
          }`}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:70px_70px] opacity-25" />

            <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#2f8cff]/25 blur-[120px]" />
            <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#ff4fd8]/25 blur-[120px]" />

            <div className="absolute left-1/2 top-1/2 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2f8cff]/15 animate-[spin_14s_linear_infinite]" />
            <div className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff4fd8]/20 animate-[spin_9s_linear_infinite_reverse]" />

            <div className="absolute left-1/2 top-1/2 h-px w-[680px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#4DA3FF]/25 to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-[680px] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#FF4FD8]/20 to-transparent" />
          </div>

          <div className="relative w-[min(92vw,760px)] overflow-hidden rounded-[38px] border border-white/15 bg-[#050816]/80 p-6 shadow-[0_0_120px_rgba(123,92,255,.28)] backdrop-blur-2xl max-md:rounded-[28px] max-md:p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(77,163,255,.18),transparent_38%),linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,.015))]" />

            <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[5px] text-[#4DA3FF]">
                  System Boot
                </p>

                <h2 className="mt-2 text-2xl font-black text-white max-md:text-xl">
                  MG Solutions Core
                </h2>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4DA3FF] opacity-75" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-[#4DA3FF]" />
                </span>
                <span className="text-xs font-black uppercase tracking-[2px] text-white/70">
                  Online
                </span>
              </div>
            </div>

            <div className="relative grid grid-cols-[220px_1fr] gap-6 py-7 max-md:grid-cols-1">
              <div className="grid place-items-center">
                <div className="relative grid size-40 place-items-center rounded-[44px] border border-white/15 bg-white/5 shadow-[0_0_80px_rgba(176,65,255,.30)] animate-[loaderPulse_2s_ease-in-out_infinite]">
                  <div className="absolute -inset-1 rounded-[48px] bg-gradient-to-r from-[#2f8cff] via-[#b041ff] to-[#ff4fd8] opacity-80 blur-md" />

                  <div className="relative grid size-full place-items-center rounded-[44px] bg-[#050816]">
                    <span className="bg-gradient-to-r from-[#2f8cff] via-[#b041ff] to-[#ff4fd8] bg-clip-text text-7xl font-black tracking-[-5px] text-transparent">
                      MG
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-5 rounded-[24px] border border-white/10 bg-black/25 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-[3px] text-white/40">
                      Boot Sequence
                    </span>

                    <span className="text-sm font-black text-[#4DA3FF]">
                      {bootProgress}%
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#2f8cff] via-[#b041ff] to-[#ff4fd8] shadow-[0_0_22px_rgba(176,65,255,.8)] transition-all duration-200"
                      style={{ width: `${bootProgress}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  {bootSteps.map((step, index) => {
                    const done = index <= activeStep;

                    return (
                      <div
                        key={step}
                        className={`flex items-center justify-between rounded-2xl border px-4 py-3 transition duration-300 ${
                          done
                            ? "border-[#4DA3FF]/30 bg-[#4DA3FF]/10 text-white"
                            : "border-white/10 bg-white/5 text-white/35"
                        }`}
                      >
                        <span className="text-sm font-bold">{step}</span>

                        <span
                          className={`grid size-6 place-items-center rounded-full text-xs font-black ${
                            done
                              ? "bg-[#4DA3FF] text-white"
                              : "bg-white/10 text-white/30"
                          }`}
                        >
                          {done ? "✓" : "•"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
              <div className="flex flex-wrap items-center gap-3">
                {modules.map((word) => (
                  <span
                    key={word}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black tracking-[2px] text-[#dfe3ff] backdrop-blur"
                  >
                    {word}
                  </span>
                ))}
              </div>

              <span className="font-mono text-xs font-bold uppercase tracking-[3px] text-white/40">
                Preparing Experience...
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}