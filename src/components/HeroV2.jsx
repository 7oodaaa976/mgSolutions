import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import MagneticButton from "./MagneticButton";

const services = [
  {
    key: "WEB",
    title: "مواقع ومنصات",
    headline: "موقع يشرح ويبيع",
    desc: "مواقع شركات و Landing Pages سريعة، جذابة، ومناسبة لكل الأجهزة.",
    icon: "🌐",
  },
  {
    key: "ERP",
    title: "أنظمة إدارة",
    headline: "نظام يدير شغلك",
    desc: "حلول مخصصة لإدارة العملاء، المخزون، الفواتير، والتقارير.",
    icon: "🧩",
  },
  {
    key: "POS",
    title: "أنظمة كاشير",
    headline: "بيع أسرع وتحكم أكبر",
    desc: "أنظمة POS للمحلات والمطاعم مع فواتير وتقارير ومخزون.",
    icon: "🧾",
  },
  {
    key: "BRAND",
    title: "هوية بصرية",
    headline: "شكل يليق ببراندك",
    desc: "لوجوهات، كروت شخصية، بانرات، ومحتوى بصري احترافي.",
    icon: "🎨",
  },
];

const floating = [
  ["⚡", "أداء سريع", "واجهة خفيفة وسريعة"],
  ["📱", "Responsive", "مناسبة للموبايل والتابلت"],
  ["🚀", "Launch Ready", "من الفكرة للنشر"],
];

export default function HeroV2() {
  const cardRef = useRef(null);
  const [active, setActive] = useState(services[0]);

  function handleMove(e) {
    const card = cardRef.current;
    if (!card) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `rotateX(${-y / 35}deg) rotateY(${x / 35}deg) translateY(-10px)`;
  }

  function handleLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "";
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-v2-reveal",
        { opacity: 0, y: 80, filter: "blur(14px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          stagger: 0.12,
          ease: "power4.out",
          delay: 0.2,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main
      id="home"
      className="relative mx-auto grid min-h-[calc(100vh-110px)] w-[calc(100%-120px)] grid-cols-[1fr_1fr] items-center gap-12 overflow-hidden py-20 max-xl:grid-cols-1 max-md:w-[calc(100%-28px)]"
    >
      <div className="pointer-events-none absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-[#2f8cff]/25 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 right-[-10%] h-96 w-96 rounded-full bg-[#ff4fd8]/20 blur-[140px]" />

      <section className="relative z-10">
        <span className="hero-v2-reveal mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-black text-[#8abfff]">
          MG Solutions • Digital Business Builder
        </span>

        <h1 className="hero-v2-reveal max-w-[760px] text-[clamp(48px,7vw,105px)] font-black leading-[1.02] tracking-[-3px] text-white">
          بنحوّل فكرتك
          <span className="block bg-gradient-to-r from-[#2f8cff] via-[#b041ff] to-[#ff4fd8] bg-clip-text text-transparent">
            لتجربة رقمية
          </span>
          تشتغل وتكبر
        </h1>

        <p className="hero-v2-reveal my-8 max-w-[640px] text-[20px] leading-[1.9] text-[#a9adbd] max-md:text-lg">
          نصمم ونطور مواقع، أنظمة إدارة، حلول كاشير، وهوية بصرية بشكل حديث
          يساعد مشروعك يظهر باحتراف ويحقق نتيجة حقيقية.
        </p>

        <div className="hero-v2-reveal flex flex-wrap gap-4 max-md:w-full">
          <MagneticButton
            href="#contact"
            className="rounded-2xl bg-gradient-to-r from-[#2f8cff] to-[#b041ff] px-8 py-4 font-black text-white shadow-[0_0_35px_rgba(47,140,255,.35)]"
          >
            ابدأ مشروعك
          </MagneticButton>

          <a
            href="#services"
            className="flex min-h-[60px] min-w-[185px] items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-8 py-4 font-extrabold text-white transition hover:-translate-y-1 hover:border-[#2f8cff]/70 max-md:w-full"
          >
            استكشف الخدمات ↓
          </a>
        </div>

        <div className="hero-v2-reveal mt-12 grid max-w-[620px] grid-cols-3 gap-4 max-sm:grid-cols-1">
          {[
            ["+50", "مشروع رقمي"],
            ["100%", "Responsive"],
            ["Fast", "Delivery"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center"
            >
              <h3 className="text-3xl font-black text-[#8abfff]">{num}</h3>
              <p className="mt-1 text-sm text-[#a9adbd]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative z-10 flex min-h-[680px] items-center justify-center perspective-[1300px] max-lg:min-h-[560px] max-md:min-h-[520px]"
      >
        <div className="absolute h-[460px] w-[460px] rounded-full border border-[#2f8cff]/25 max-md:h-[340px] max-md:w-[340px]" />
        <div className="absolute h-[560px] w-[560px] rounded-full border border-[#ff4fd8]/15 max-md:h-[430px] max-md:w-[430px]" />

        <div
          ref={cardRef}
          className="relative h-[570px] w-[410px] rounded-[38px] border border-[#6aa9ff]/50 bg-[linear-gradient(145deg,rgba(12,19,47,.96),rgba(5,7,18,.98))] p-8 shadow-[0_0_45px_rgba(47,140,255,.35),35px_45px_90px_rgba(0,0,0,.65)] transition-transform duration-200 animate-[cardFloat_5s_ease-in-out_infinite] max-md:h-[500px] max-md:w-[330px] max-md:p-6"
        >
          <div className="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_80%_20%,rgba(47,140,255,.35),transparent_30%),radial-gradient(circle_at_20%_85%,rgba(255,79,216,.25),transparent_32%)]" />

          <div className="relative">
            <div className="mb-10 flex items-center justify-between">
              <strong className="text-3xl font-black text-white">MG</strong>
              <span className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-black text-[#8abfff]">
                Live Preview
              </span>
            </div>

            <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-[#2f8cff]/15 text-4xl">
              {active.icon}
            </div>

            <h2 className="text-[36px] font-black leading-[1.25] text-white max-md:text-[29px]">
              {active.headline}
              <span className="block bg-gradient-to-r from-[#2f8cff] via-[#b041ff] to-[#ff4fd8] bg-clip-text text-transparent">
                {active.title}
              </span>
            </h2>

            <p className="mt-5 min-h-[84px] text-[15px] leading-8 text-[#c9cbd6]">
              {active.desc}
            </p>

            <a
              href="#contact"
              className="mt-3 inline-flex rounded-2xl bg-gradient-to-r from-[#2f8cff] to-[#b041ff] px-6 py-3 font-black text-white"
            >
              اطلب الخدمة
            </a>

            <div className="absolute bottom-[-170px] left-0 right-0 grid grid-cols-2 gap-3 max-md:bottom-[-145px]">
              {services.map((service) => (
                <button
                  key={service.key}
                  onClick={() => setActive(service)}
                  className={`rounded-2xl border p-4 text-right transition ${
                    active.key === service.key
                      ? "border-[#2f8cff] bg-[#2f8cff]/20 shadow-[0_0_24px_rgba(47,140,255,.25)]"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <b className="block text-white">{service.key}</b>
                  <span className="mt-1 block text-xs font-bold text-[#c9cbd6]">
                    {service.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {floating.map(([icon, title, text], index) => (
          <div
            key={title}
            className={`absolute hidden w-[165px] rounded-[22px] border border-white/10 bg-black/35 p-5 shadow-[0_0_35px_rgba(176,65,255,.2)] backdrop-blur-xl animate-[float_4s_ease-in-out_infinite] lg:block ${
              index === 0
                ? "right-[2%] top-[13%]"
                : index === 1
                  ? "left-[2%] top-[25%]"
                  : "bottom-[13%] right-[6%]"
            }`}
          >
            <b className="mb-3 block text-3xl">{icon}</b>
            <strong className="mb-2 block text-lg text-white">{title}</strong>
            <span className="text-sm leading-6 text-[#c9cbd6]">{text}</span>
          </div>
        ))}
      </section>
    </main>
  );
}