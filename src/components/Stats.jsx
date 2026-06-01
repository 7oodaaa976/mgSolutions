import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "مشروع منفذ", hint: "Web / UI / Systems" },
  { value: 6, suffix: "+", label: "مجالات أعمال", hint: "Stores / Clinics / Services" },
  { value: 30, suffix: "+", label: "واجهة UI", hint: "Screens & Dashboards" },
  { value: 100, suffix: "%", label: "Responsive", hint: "Mobile / Tablet / Desktop" },
];

export default function Stats() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      dir="rtl"
      className="
        relative z-10 mx-auto my-20 w-[calc(100%-120px)]
        max-xl:w-[calc(100%-40px)]
        max-md:my-12 max-md:w-[calc(100%-28px)]
      "
    >
      <div
        className="
          relative overflow-hidden rounded-[34px]
          border border-white/10
          bg-[linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.025))]
          p-5 backdrop-blur-xl
          shadow-[0_0_70px_rgba(123,92,255,.08)]
        "
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#4DA3FF]/15 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-[#FF4FD8]/15 blur-3xl" />
        </div>

        <div className="relative mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-5 max-md:flex-col max-md:items-start">
          <div>
            <p className="mb-2 text-sm font-black uppercase tracking-[4px] text-[#7B5CFF]">
              MG Metrics
            </p>
            <h3 className="text-2xl font-black text-white max-md:text-xl">
              أرقام بتوضح حجم الشغل والاهتمام بالتفاصيل
            </h3>
          </div>

          <div className="rounded-full border border-white/10 bg-white/[.05] px-5 py-2 text-sm font-bold text-[#a9adbd]">
            Live Overview
          </div>
        </div>

        <div className="relative grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {stats.map((stat) => (
            <StatMetric key={stat.label} stat={stat} start={start} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatMetric({ stat, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1200;
    const steps = 45;
    const increment = stat.value / steps;

    const timer = setInterval(() => {
      current += increment;

      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [start, stat.value]);

  return (
    <article
      className="
        group relative overflow-hidden rounded-[24px]
        border border-white/10 bg-[#080a16]/65
        p-6 transition duration-300
        hover:-translate-y-1 hover:border-[#7B5CFF]/60
        hover:bg-white/[.06]
      "
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="grid h-3 w-3 place-items-center rounded-full bg-[#4DA3FF] shadow-[0_0_18px_rgba(77,163,255,.8)]" />
        <span className="text-xs font-black uppercase tracking-[3px] text-white/30">
          Data
        </span>
      </div>

      <h3 className="mb-3 bg-gradient-to-r from-[#4DA3FF] via-[#7B5CFF] to-[#FF4FD8] bg-clip-text text-5xl font-black text-transparent">
        {count}
        {stat.suffix}
      </h3>

      <p className="text-lg font-black text-white">{stat.label}</p>
      <p className="mt-2 text-sm font-medium text-[#a9adbd]">{stat.hint}</p>

      <span className="absolute bottom-0 right-0 h-[3px] w-0 bg-gradient-to-l from-[#4DA3FF] via-[#7B5CFF] to-[#FF4FD8] transition-all duration-500 group-hover:w-full" />
    </article>
  );
}