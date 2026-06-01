import { useRef } from "react";
import MagneticButton from './MagneticButton';
import gsap from "gsap";
import { useEffect } from "react";

export default function Hero() {
    const cardRef = useRef(null);

    function handleMove(e) {
        const card = cardRef.current;
        if (!card) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -5;
        const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;

        card.style.animation = "none";
        card.style.transform = `rotateY(${rotateY - 12}deg) rotateX(${rotateX + 4}deg)`;
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
      ".hero-title",
      {
        opacity: 0,
        y: 120,
        filter: "blur(15px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      ".hero-sub",
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.2,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".hero-btn",
      {
        opacity: 0,
        y: 40,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.12,
        delay: 0.4,
        duration: 0.9,
        ease: "back.out(1.8)",
      }
    );

  }, 1900);

  return () => clearTimeout(timer);

}, []);

    return (
        <main id="home" className=" mx-auto grid min-h-[calc(100vh-150px)] w-[calc(100%-120px)]
    grid-cols-[0.9fr_1.1fr] items-center gap-8
    max-xl:grid-cols-1 max-xl:pt-16
    max-md:w-[calc(100%-28px)]">
            <section className="relative z-10 pt-8">
                <h1 className=" hero-title max-w-[680px] text-[clamp(48px,6vw,60px)] font-black leading-[1.08] tracking-[-2px] text-white">
                    نحول فكرتك
                    <span className="block w-fit bg-gradient-to-r from-[#2f8cff] via-[#b041ff] to-[#ff4fd8] bg-clip-text text-transparent">
                        لمنتج رقمي
                    </span>
                    يشتغل ويبيع
                </h1>

                <p className="my-8 max-w-[590px] text-[18px] leading-[1.9] text-[#a9adbd] max-md:text-lg">
                    بنصمم ونطور مواقع، أنظمة إدارة، حلول كاشير، تطبيقات سطح مكتب،
                    وهوية بصرية تساعد مشروعك يظهر بشكل أقوى ويشتغل بكفاءة.
                </p>

                <div className="flex flex-wrap items-center gap-5 max-md:w-full">
                   <MagneticButton
  href="#contact"
  className="rounded-2xl bg-gradient-to-r from-[#2f8cff] to-[#b041ff] px-8 py-4 font-black text-white"
>
  ابدأ مشروعك
</MagneticButton>
                    <a
                        href="#services"
                        className="flex h-[60px] min-w-[185px] items-center justify-center gap-4 rounded-2xl border border-white/30 bg-white/5 text-lg font-extrabold text-white transition hover:-translate-y-1 max-md:w-full"
                    >
                        شوف الخدمات
                        <span className="grid h-[35px] w-[35px] place-items-center rounded-full bg-white text-[#2f8cff]">
                            ↓
                        </span>
                    </a>
                </div>

                <div className="mt-14 flex items-center gap-5">
                    <div className="flex direction-ltr">
                        {[12, 32, 56].map((img) => (
                            <img
                                key={img}
                                src={`https://i.pravatar.cc/80?img=${img}`}
                                alt="Client"
                                className="-ml-3 h-[45px] w-[45px] rounded-full border-[3px] border-white"
                            />
                        ))}
                    </div>

                    <div>
                        <strong className="block text-[17px] text-white before:content-['+50_'] before:text-[#b041ff]">
                            مشروع رقمي
                        </strong>
                        <span className="mt-1 block text-[#a9adbd]">
                            نقدر نساعدك تبنيه من البداية للنشر
                        </span>
                    </div>
                </div>
            </section>

            <section
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                className="
    relative h-[720px] perspective-[1200px]
    max-xl:h-[620px]
    max-lg:h-[560px]
    max-md:h-[500px]
    max-sm:h-[455px]
  "
            >
                {/* Orbits */}
                <div
                    className="
      absolute left-[4%] right-[4%] top-[26%] h-[260px]
      rotate-[-15deg] rounded-full border-2 border-[#2f8cff]/40
      drop-shadow-[0_0_14px_rgba(47,140,255,0.8)]
      max-lg:top-[28%] max-lg:h-[220px]
      max-md:top-[30%] max-md:h-[180px]
      max-sm:h-[145px]
    "
                ></div>

                <div
                    className="
      absolute left-[4%] right-[4%] top-[37%] h-[260px]
      rotate-[13deg] rounded-full border-2 border-[#ff4fd8]/40
      drop-shadow-[0_0_14px_rgba(255,79,216,0.6)]
      max-lg:top-[39%] max-lg:h-[220px]
      max-md:h-[180px]
      max-sm:h-[145px]
    "
                ></div>

                {/* Platform */}
                <div
                    className="
      absolute bottom-[6%] right-1/2 h-[105px] w-[520px]
      translate-x-1/2 rounded-full border-2 border-[#b041ff]/40
      bg-[radial-gradient(circle,rgba(176,65,255,.45),transparent_55%),radial-gradient(circle,rgba(47,140,255,.35),transparent_62%)]
      shadow-[0_0_35px_rgba(47,140,255,.55),0_0_45px_rgba(255,79,216,.35)]
      max-lg:w-[430px] max-lg:h-[90px]
      max-md:w-[340px] max-md:h-[75px]
      max-sm:w-[280px] max-sm:h-[62px]
    "
                ></div>

                {/* Main Card */}
                <div
                    ref={cardRef}
                    className="
      absolute right-1/2 top-[8%] z-10 h-[570px] w-[390px]
      translate-x-1/2 rounded-[34px] border-2 border-[#6aa9ff]/70
      bg-[radial-gradient(circle_at_80%_75%,rgba(47,140,255,.8),transparent_24%),linear-gradient(145deg,rgba(15,27,60,.98),rgba(4,7,20,.98))]
      p-11 shadow-[0_0_35px_rgba(47,140,255,.45),30px_40px_80px_rgba(0,0,0,.65)]
      transition-transform duration-100 animate-[cardFloat_5s_ease-in-out_infinite]

      max-lg:h-[500px] max-lg:w-[340px] max-lg:p-9
      max-md:h-[430px] max-md:w-[300px] max-md:p-7
      max-sm:h-[395px] max-sm:w-[265px] max-sm:p-6
    "
                >
                    <div className="flex items-center justify-between">
                        <strong className="text-[26px] text-white max-sm:text-xl">MG</strong>

                        <span className="grid h-9 w-[50px] place-items-center rounded-xl border border-[#2f8cff]/30 bg-[#2f8cff]/10 text-white max-sm:h-8 max-sm:w-11">
                            ☰
                        </span>
                    </div>

                    <h2
                        className="
        mt-[70px] text-[37px] font-black leading-[1.22] text-white
        max-lg:mt-14 max-lg:text-[32px]
        max-md:mt-10 max-md:text-[28px]
        max-sm:mt-8 max-sm:text-[24px]
      "
                    >
                        حلول رقمية
                        <span className="block bg-gradient-to-r from-[#2f8cff] via-[#b041ff] to-[#ff4fd8] bg-clip-text text-transparent">
                            مش مجرد تصميم
                        </span>
                    </h2>

                    <div className="my-6 max-sm:my-4">
                        <span className="mb-3 block h-2 w-[145px] rounded-full bg-white/15 max-sm:w-[115px]"></span>
                        <span className="block h-2 w-[100px] rounded-full bg-white/15 max-sm:w-[80px]"></span>
                    </div>

                    <a
                        href="#contact"
                        className="inline-flex rounded-xl bg-gradient-to-br from-[#2f8cff] to-[#b041ff] px-6 py-3 font-extrabold text-white max-sm:px-5 max-sm:py-2 max-sm:text-sm"
                    >
                        ابدأ الآن
                    </a>

                    <div
                        className="
        absolute bottom-10 left-8 right-8 grid grid-cols-3 gap-3
        max-lg:bottom-8 max-lg:left-6 max-lg:right-6
        max-md:bottom-6 max-md:grid-cols-3
        max-sm:left-5 max-sm:right-5 max-sm:gap-2
      "
                    >
                        {[
                            ["ERP", "أنظمة إدارة"],
                            ["POS", "أنظمة كاشير"],
                            ["WEB", "مواقع ومنصات"],
                        ].map(([title, desc]) => (
                            <div
                                key={title}
                                className="
            flex h-[105px] flex-col items-center justify-center gap-2
            rounded-2xl border border-white/15 bg-white/5 text-center
            max-lg:h-[88px]
            max-md:h-[72px]
            max-sm:h-[62px] max-sm:gap-1
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

                <FloatCard
                    className="right-[8%] top-[14%] max-xl:right-[2%] max-lg:hidden"
                    icon="⚡"
                    title="أداء سريع"
                    text="مواقع خفيفة ومناسبة لكل الأجهزة"
                />

                <FloatCard
                    className="left-[4%] top-[22%] max-xl:left-[0%] max-lg:hidden"
                    icon="🧩"
                    title="ERP Systems"
                    text="إدارة شغلك من مكان واحد"
                />

                <FloatCard
                    className="bottom-[17%] right-[4%] max-xl:right-[0%] max-lg:hidden"
                    icon="🧾"
                    title="POS Systems"
                    text="كاشير ومبيعات وفواتير"
                />

                <FloatCard
                    className="bottom-[14%] left-[4%] max-xl:left-[0%] max-lg:hidden"
                    icon="🎨"
                    title="Branding"
                    text="هوية بصرية تليق بمشروعك"
                />
            </section>
        </main>
    );
}

function FloatCard({ icon, title, text, className }) {
    return (
        <div
            className={`absolute z-20 min-h-[160px] w-[155px] rounded-[18px] border border-white/15 bg-[linear-gradient(145deg,rgba(35,25,75,.78),rgba(6,9,24,.78))] p-5 shadow-[0_0_35px_rgba(176,65,255,.22)] backdrop-blur-xl animate-[float_4s_ease-in-out_infinite] max-md:hidden ${className}`}
        >
            <b className="mb-3 block text-3xl">{icon}</b>
            <strong className="mb-2 block text-lg text-white">{title}</strong>
            <span className="text-sm leading-[1.55] text-[#c9cbd6]">{text}</span>
        </div>
    );
}