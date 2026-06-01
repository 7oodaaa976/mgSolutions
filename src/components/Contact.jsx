const contactOptions = [
  {
    label: "WhatsApp",
    value: "رد سريع ومباشر",
    href: "https://wa.me/201212694594",
    icon: "↗",
  },
  {
    label: "Project Brief",
    value: "ابعت تفاصيل فكرتك",
    href: "https://wa.me/201212694594?text=السلام عليكم، عندي فكرة مشروع وعايز أعرف التفاصيل.",
    icon: "✦",
  },
  {
    label: "Portfolio",
    value: "شوف الأعمال الأول",
    href: "#works",
    icon: "↓",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      dir="rtl"
      className="
        relative z-10 mx-auto my-24 w-[calc(100%-120px)]
        max-xl:w-[calc(100%-40px)]
        max-md:my-16 max-md:w-[calc(100%-28px)]
      "
    >
      <div
        className="
          relative overflow-hidden rounded-[46px] border border-white/10
          bg-[radial-gradient(circle_at_20%_20%,rgba(77,163,255,.18),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(255,79,216,.16),transparent_30%),linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.025))]
          p-8 backdrop-blur-xl
          shadow-[0_0_90px_rgba(123,92,255,.10)]
          max-md:p-5
        "
      >
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
          <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        </div>

        <div className="relative grid grid-cols-[1.1fr_.9fr] gap-6 max-lg:grid-cols-1">
          <div
            className="
              relative overflow-hidden rounded-[36px] border border-white/10
              bg-[#080a16]/75 p-10 backdrop-blur-xl
              max-md:p-6
            "
          >
           

            <h2 className="max-w-[760px] text-[clamp(36px,5vw,72px)] font-black leading-[1.08] text-white">
              جاهز نطلق
              <span className="block bg-gradient-to-r from-[#4DA3FF] via-[#7B5CFF] to-[#FF4FD8] bg-clip-text text-transparent">
                مشروعك القادم؟
              </span>
            </h2>

            <p className="mt-6 max-w-[620px] text-xl leading-[1.9] text-[#a9adbd] max-md:text-base">
              ابعت فكرة المشروع أو نوع الخدمة اللي محتاجها، وهنرتب لك أنسب
              حل من حيث الشكل، التقنية، وطريقة التنفيذ.
            </p>

            <div className="mt-9 grid max-w-[620px] grid-cols-3 gap-3 max-md:grid-cols-1">
              {contactOptions.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="
                    group relative overflow-hidden rounded-[24px]
                    border border-white/10 bg-white/[.045]
                    p-5 transition duration-300
                    hover:-translate-y-1 hover:border-[#7B5CFF]/60
                  "
                >
                  <span className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#4DA3FF] to-[#7B5CFF] font-black text-white">
                    {item.icon}
                  </span>

                  <h3 className="text-lg font-black text-white">
                    {item.label}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-[#a9adbd]">
                    {item.value}
                  </p>

                  <span className="absolute bottom-0 right-0 h-[3px] w-0 bg-gradient-to-l from-[#4DA3FF] via-[#7B5CFF] to-[#FF4FD8] transition-all duration-500 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/201212694594?text=السلام عليكم، عايز أبدأ مشروع مع MG Solutions."
                target="_blank"
                rel="noreferrer"
                className="
                  group relative inline-flex overflow-hidden rounded-full
                  px-8 py-4 font-black text-white transition
                  hover:-translate-y-1
                "
              >
                <span className="relative z-10 flex items-center gap-2">
                  ابدأ على واتساب
                  <span className="transition group-hover:-translate-x-1">
                    ←
                  </span>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#2f8cff] via-[#7b5cff] to-[#ff4fd8]" />
              </a>

              <span className="rounded-full border border-white/10 bg-white/[.045] px-5 py-3 text-sm font-bold text-[#a9adbd]">
                عادة بنبدأ بتحديد المطلوب ثم تصور سريع
              </span>
            </div>

            <span className="absolute left-[-60px] bottom-[-60px] h-48 w-48 rounded-full bg-[#FF4FD8]/15 blur-[80px]" />
          </div>

          <aside
            className="
              relative overflow-hidden rounded-[36px] border border-white/10
              bg-[#070914]/85 p-8 backdrop-blur-xl
              max-md:p-6
            "
          >
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <p className="text-sm font-black uppercase tracking-[3px] text-[#4DA3FF]">
                  Project Status
                </p>
                <h3 className="mt-2 text-2xl font-black text-white">
                  Ready To Start
                </h3>
              </div>

              <span className="relative flex h-4 w-4">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4DA3FF] opacity-75" />
                <span className="relative inline-flex h-4 w-4 rounded-full bg-[#4DA3FF]" />
              </span>
            </div>

            <div className="space-y-4">
              <InfoRow title="Response Channel" value="WhatsApp" />
              <InfoRow title="Project Type" value="Website / System / Branding" />
              <InfoRow title="Direction" value="Arabic RTL First" />
              <InfoRow title="Next Step" value="Send Project Details" />
            </div>

            <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[.045] p-5">
              <p className="mb-4 text-sm font-black uppercase tracking-[3px] text-white/40">
                Message Template
              </p>

              <p className="text-[15px] leading-[1.9] text-[#d7d9e6]">
                السلام عليكم، عندي مشروع وعايز أعرف أنسب حل. نوع المشروع:
                موقع / نظام / هوية بصرية. التفاصيل هي...
              </p>
            </div>

            <a
              href="https://wa.me/201212694594?text=السلام عليكم، عندي مشروع وعايز أعرف أنسب حل. نوع المشروع: "
              target="_blank"
              rel="noreferrer"
              className="
                mt-6 flex w-full items-center justify-center rounded-2xl
                border border-white/15 bg-white/[.06] px-5 py-4
                font-black text-white transition
                hover:-translate-y-1 hover:border-[#7B5CFF]/60
              "
            >
              استخدم الرسالة الجاهزة
            </a>

            <span className="absolute right-[-50px] top-[-50px] h-40 w-40 rounded-full bg-[#4DA3FF]/15 blur-[70px]" />
          </aside>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ title, value }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[.04] px-5 py-4">
      <span className="text-sm font-bold text-[#a9adbd]">{title}</span>
      <strong className="text-sm font-black text-white">{value}</strong>
    </div>
  );
}