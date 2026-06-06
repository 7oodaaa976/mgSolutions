import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "./MagneticButton";
import CodeRainBackground from "./CodeRainBackground";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const cardRef = useRef(null);
  const { lang, dir, t } = useLanguage();
  const hero = t.hero;

  function handleMove(e) {
    const card = cardRef.current;
    if (!card) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;

    card.style.animation = "none";
    card.style.transform = `translateX(50%) rotateY(${rotateY - 12}deg) rotateX(${rotateX + 4}deg)`;
  }

  function handleLeave() {
    const card = cardRef.current;
    if (!card) return;

    card.style.animation = "";
    card.style.transform = "";
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.fromTo(
        ".hero-animate",
        {
          opacity: 0,
          y: 80,
          filter: "blur(14px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          stagger: 0.12,
          ease: "power4.out",
        }
      );
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      id="home"
      dir={dir}
      className="
        relative grid min-h-screen w-full
    grid-cols-[0.9fr_1.1fr]
    items-center gap-8 overflow-hidden
    px-16 pt-28
    max-xl:grid-cols-1 max-xl:px-8 max-xl:pt-32
    max-md:px-4
      "
    >
      <CodeRainBackground />

      <section className="relative z-10 pt-8 max-xl:text-center">
       

        <h1
          className="
            hero-animate max-w-3xl text-[clamp(48px,6vw,72px)]
            font-black leading-none tracking-[-2px] text-white
            max-xl:mx-auto
          "
        >
          {hero.title1}
          <span
            className={`
              block bg-gradient-to-r from-[#2f8cff] via-[#b041ff] to-[#ff4fd8]
              bg-clip-text text-transparent
              ${lang === "ar" ? "w-fit max-xl:mx-auto" : ""}
            `}
          >
            {hero.title2}
          </span>
          {hero.title3}
        </h1>

        <p
          className="
            hero-animate my-8 max-w-2xl text-lg leading-9
            text-[#a9adbd] max-xl:mx-auto max-md:text-base
          "
        >
          {hero.desc}
        </p>

        <div className="hero-animate flex flex-wrap items-center gap-5 max-xl:justify-center max-md:w-full">
          <MagneticButton
            href="#contact"
            className="
              rounded-2xl bg-gradient-to-r from-[#2f8cff] to-[#b041ff]
              px-8 py-4 font-black text-white
              shadow-[0_0_35px_rgba(47,140,255,.25)]
            "
          >
            {hero.start}
          </MagneticButton>

          <a
            href="#services"
            className="
              flex h-15 min-w-48 items-center justify-center gap-4
              rounded-2xl border border-white/30 bg-white/5
              text-lg font-extrabold text-white transition
              hover:-translate-y-1 hover:border-[#b041ff]/60
              max-md:w-full
            "
          >
            {hero.services}
            <span className="grid size-9 place-items-center rounded-full bg-white text-[#2f8cff]">
              ↓
            </span>
          </a>
        </div>

        <div className="hero-animate mt-14 flex items-center gap-5 max-xl:justify-center">
          <div className="flex ltr">
            {[12, 32, 56].map((img) => (
              <img
                key={img}
                src={`https://i.pravatar.cc/80?img=${img}`}
                alt="Client"
                className="-ms-3 size-11 rounded-full border-3 border-white object-cover"
              />
            ))}
          </div>

          <div className={lang === "ar" ? "text-right" : "text-left"}>
            <strong className="block text-base text-white">
              <span className="text-[#b041ff]">+50 </span>
              {hero.projects}
            </strong>

            <span className="mt-1 block text-[#a9adbd]">
              {hero.projectsDesc}
            </span>
          </div>
        </div>
      </section>

      <section
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="
          relative h-[720px] perspective-[1200px]
          max-xl:h-[620px] max-lg:h-[560px]
          max-md:h-[500px] max-sm:h-[455px]
        "
      >
        <div
          className="
            absolute left-[4%] right-[4%] top-[26%] h-64
            rotate-[-15deg] rounded-full border-2 border-[#2f8cff]/40
            drop-shadow-[0_0_14px_rgba(47,140,255,.8)]
            max-lg:top-[28%] max-lg:h-56
            max-md:top-[30%] max-md:h-44
            max-sm:h-36
          "
        />

        <div
          className="
            absolute left-[4%] right-[4%] top-[37%] h-64
            rotate-[13deg] rounded-full border-2 border-[#ff4fd8]/40
            drop-shadow-[0_0_14px_rgba(255,79,216,.6)]
            max-lg:top-[39%] max-lg:h-56
            max-md:h-44 max-sm:h-36
          "
        />

        <div
          className="
            absolute bottom-[6%] right-1/2 h-28 w-[520px]
            translate-x-1/2 rounded-full border-2 border-[#b041ff]/40
            bg-[radial-gradient(circle,rgba(176,65,255,.45),transparent_55%),radial-gradient(circle,rgba(47,140,255,.35),transparent_62%)]
            shadow-[0_0_35px_rgba(47,140,255,.55),0_0_45px_rgba(255,79,216,.35)]
            max-lg:h-24 max-lg:w-[430px]
            max-md:h-20 max-md:w-[340px]
            max-sm:h-16 max-sm:w-72
          "
        />

        <div
          ref={cardRef}
          className="
            absolute right-1/2 top-[8%] z-10 h-[570px] w-[390px]
            translate-x-1/2 animate-[cardFloat_5s_ease-in-out_infinite]
            rounded-[34px] border-2 border-[#6aa9ff]/70
            bg-[radial-gradient(circle_at_80%_75%,rgba(47,140,255,.8),transparent_24%),linear-gradient(145deg,rgba(15,27,60,.98),rgba(4,7,20,.98))]
            p-11 shadow-[0_0_35px_rgba(47,140,255,.45),30px_40px_80px_rgba(0,0,0,.65)]
            transition-transform duration-100
            max-lg:h-[500px] max-lg:w-[340px] max-lg:p-9
            max-md:h-[430px] max-md:w-[300px] max-md:p-7
            max-sm:h-[395px] max-sm:w-[265px] max-sm:p-6
          "
        >
          <div className="flex items-center justify-between">
            <strong className="text-3xl text-white max-sm:text-xl">MG</strong>

            <span className="grid h-9 w-12 place-items-center rounded-xl border border-[#2f8cff]/30 bg-[#2f8cff]/10 text-white max-sm:h-8 max-sm:w-11">
              ☰
            </span>
          </div>

          <h2
            className="
              mt-16 text-4xl font-black leading-tight text-white
              max-lg:mt-14 max-lg:text-3xl
              max-md:mt-10 max-md:text-2xl
              max-sm:mt-8
            "
          >
            {hero.cardTitle1}
            <span className="block bg-gradient-to-r from-[#2f8cff] via-[#b041ff] to-[#ff4fd8] bg-clip-text text-transparent">
              {hero.cardTitle2}
            </span>
          </h2>

          <div className="my-6 max-sm:my-4">
            <span className="mb-3 block h-2 w-36 rounded-full bg-white/15 max-sm:w-28" />
            <span className="block h-2 w-24 rounded-full bg-white/15 max-sm:w-20" />
          </div>

          <a
            href="#contact"
            className="
              inline-flex rounded-xl bg-gradient-to-br from-[#2f8cff] to-[#b041ff]
              px-6 py-3 font-extrabold text-white
              max-sm:px-5 max-sm:py-2 max-sm:text-sm
            "
          >
            {hero.cardBtn}
          </a>

          <div
            className="
              absolute bottom-10 left-8 right-8 grid grid-cols-3 gap-3
              max-lg:bottom-8 max-lg:left-6 max-lg:right-6
              max-md:bottom-6
              max-sm:left-5 max-sm:right-5 max-sm:gap-2
            "
          >
            {hero.stats.map(([title, desc]) => (
              <div
                key={title}
                className="
                  flex h-28 flex-col items-center justify-center gap-2
                  rounded-2xl border border-white/15 bg-white/5 text-center
                  max-lg:h-22 max-md:h-18 max-sm:h-16 max-sm:gap-1
                "
              >
                <b className="text-xl text-white max-sm:text-base">{title}</b>
                <span className="text-sm font-extrabold text-white max-sm:text-[11px]">
                  {desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {hero.floatCards.map(([icon, title, text], index) => (
          <FloatCard
            key={title}
            icon={icon}
            title={title}
            text={text}
            className={[
              "right-[8%] top-[14%] max-xl:right-[2%]",
              "left-[4%] top-[22%] max-xl:left-0",
              "bottom-[17%] right-[4%] max-xl:right-0",
              "bottom-[14%] left-[4%] max-xl:left-0",
            ][index]}
          />
        ))}
      </section>
    </main>
  );
}

function FloatCard({ icon, title, text, className }) {
  return (
    <div
      className={`
        absolute z-20 min-h-40 w-40 rounded-2xl border border-white/15
        bg-[linear-gradient(145deg,rgba(35,25,75,.78),rgba(6,9,24,.78))]
        p-5 shadow-[0_0_35px_rgba(176,65,255,.22)]
        backdrop-blur-xl animate-[float_4s_ease-in-out_infinite]
        max-lg:hidden
        ${className}
      `}
    >
      <b className="mb-3 block text-3xl">{icon}</b>
      <strong className="mb-2 block text-lg text-white">{title}</strong>
      <span className="text-sm leading-6 text-[#c9cbd6]">{text}</span>
    </div>
  );
}