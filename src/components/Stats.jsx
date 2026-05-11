import { useEffect, useRef, useState } from "react";

const stats = [
    { value: 15, suffix: "+", label: "Projects" },
    { value: 6, suffix: "+", label: "Business Fields" },
    { value: 30, suffix: "+", label: "UI Screens" },
    { value: 100, suffix: "%", label: "Responsive" },
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
            className="relative z-10 mx-auto my-16 w-[calc(100%-120px)] max-xl:w-[calc(100%-40px)] max-md:my-10 max-md:w-[calc(100%-28px)]"
        >
            <div className="grid grid-cols-4 gap-5 rounded-[34px] border border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025))] p-6 backdrop-blur-xl max-lg:grid-cols-2 max-sm:grid-cols-1">
                {stats.map((stat) => (
                    <StatCard key={stat.label} stat={stat} start={start} />
                ))}
            </div>
        </section>
    );
}

function StatCard({ stat, start }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let current = 0;
        const duration = 1200;
        const steps = 40;
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
        <div className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-[#b041ff]/50 hover:shadow-[0_0_45px_rgba(176,65,255,.15)]">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#2f8cff]/20 blur-3xl transition group-hover:bg-[#b041ff]/25"></div>

            <h3 className="relative bg-gradient-to-r from-[#2f8cff] via-[#b041ff] to-[#ff4fd8] bg-clip-text text-5xl font-black text-transparent max-md:text-4xl">
                {count}
                {stat.suffix}
            </h3>

            <p className="relative mt-3 text-sm font-black uppercase tracking-[3px] text-[#a9adbd]">
                {stat.label}
            </p>
        </div>
    );
}