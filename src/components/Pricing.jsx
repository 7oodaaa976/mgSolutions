const plans = [
  {
    name: "Starter",
    label: "بداية ذكية",
    desc: "صفحة تعريفية أو Landing Page قوية تعرض فكرتك بشكل احترافي وسريع.",
    badge: "Launch",
    features: [
      "Landing Page",
      "Responsive Design",
      "SEO Basics",
      "Contact Section",
    ],
  },
  {
    name: "Business",
    label: "الأكثر طلبًا",
    desc: "موقع شركة كامل يعرض الخدمات، الأعمال، طريقة الشغل، ووسائل التواصل.",
    badge: "Growth",
    popular: true,
    features: [
      "Multi Sections",
      "Motion Effects",
      "Projects Showcase",
      "Deployment Ready",
    ],
  },
  {
    name: "Custom System",
    label: "حسب احتياجك",
    desc: "أنظمة مخصصة مثل Dashboards وERP وPOS حسب طبيعة مشروعك وطريقة تشغيله.",
    badge: "Scale",
    features: [
      "ERP / POS",
      "Dashboard",
      "User Management",
      "Support & Updates",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      dir="rtl"
      className="
        relative z-10 mx-auto my-24 w-[calc(100%-120px)]
        max-xl:w-[calc(100%-40px)]
        max-md:my-16 max-md:w-[calc(100%-28px)]
      "
    >
      <div className="mx-auto mb-16 max-w-[820px] text-center max-md:mb-10">
        <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/[.06] px-5 py-2 text-sm font-black text-[#4DA3FF]">
          الباقات
        </span>

        <h2 className="text-[clamp(34px,4vw,62px)] font-black leading-[1.15] text-white">
          اختار طريقة البداية
          <span className="block bg-gradient-to-r from-[#4DA3FF] via-[#7B5CFF] to-[#FF4FD8] bg-clip-text text-transparent">
            حسب حجم مشروعك
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-[720px] text-xl leading-[1.9] text-[#a9adbd] max-md:text-base">
          الباقات دي مش أسعار ثابتة، لكنها نقطة بداية تساعدنا نحدد أنسب مسار
          لمشروعك حسب الهدف والمميزات المطلوبة.
        </p>
      </div>

      <div
        className="
          relative overflow-hidden rounded-[42px] border border-white/10
          bg-[radial-gradient(circle_at_50%_0%,rgba(123,92,255,.18),transparent_36%),linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.025))]
          p-7 backdrop-blur-xl
          max-md:p-4
        "
      >
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:70px_70px]" />
          <div className="absolute right-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-[#4DA3FF]/15 blur-[100px]" />
          <div className="absolute bottom-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-[#FF4FD8]/15 blur-[100px]" />
        </div>

        <div className="relative grid grid-cols-3 gap-5 max-xl:grid-cols-1">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`
                group relative overflow-hidden rounded-[32px]
                border bg-[#080a16]/75 p-7 backdrop-blur-xl
                transition duration-500 hover:-translate-y-2
                max-md:p-6
                ${
                  plan.popular
                    ? "border-[#7B5CFF]/70 shadow-[0_0_70px_rgba(123,92,255,.20)]"
                    : "border-white/10 hover:border-[#7B5CFF]/50"
                }
              `}
            >
              {plan.popular && (
                <span className="absolute left-5 top-5 rounded-full bg-gradient-to-r from-[#4DA3FF] via-[#7B5CFF] to-[#FF4FD8] px-4 py-2 text-xs font-black text-white shadow-[0_0_30px_rgba(123,92,255,.35)]">
                  الأكثر طلبًا
                </span>
              )}

              <div className="mb-8 flex items-center justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[.06] text-lg font-black text-white">
                  0{index + 1}
                </div>

                <span className="rounded-full border border-white/10 bg-white/[.05] px-4 py-1.5 text-xs font-black uppercase tracking-[2px] text-[#a9adbd]">
                  {plan.badge}
                </span>
              </div>

              <h3 className="mb-3 text-[30px] font-black text-white">
                {plan.name}
              </h3>

              <strong className="block text-xl font-black text-[#4DA3FF]">
                {plan.label}
              </strong>

              <p className="mt-5 min-h-[90px] text-[16px] leading-[1.85] text-[#a9adbd]">
                {plan.desc}
              </p>

              <div className="my-7 h-px bg-gradient-to-l from-transparent via-white/15 to-transparent" />

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="
                      flex items-center justify-between gap-3 rounded-2xl
                      border border-white/10 bg-white/[.045]
                      px-4 py-3 text-sm font-bold text-[#d7d9e6]
                    "
                  >
                    <span>{feature}</span>
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#4DA3FF]/15 text-[#4DA3FF]">
                      ✓
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="
                  group/btn relative mt-8 flex w-full items-center justify-center
                  overflow-hidden rounded-2xl border border-white/15 bg-white/[.06]
                  px-5 py-4 font-black text-white transition
                  hover:border-[#7B5CFF]/70
                "
              >
                <span className="relative z-10 flex items-center gap-2">
                  اطلب تفاصيل الباقة
                  <span className="transition group-hover/btn:-translate-x-1">
                    ←
                  </span>
                </span>

                <span className="absolute inset-0 bg-gradient-to-r from-[#2f8cff] via-[#7b5cff] to-[#ff4fd8] opacity-0 transition duration-300 group-hover/btn:opacity-100" />
              </a>

              <span className="absolute right-[-45px] top-[-45px] h-32 w-32 rounded-full bg-[#4DA3FF]/15 blur-3xl transition group-hover:bg-[#FF4FD8]/20" />

              {plan.popular && (
                <span className="pointer-events-none absolute inset-0 rounded-[32px] border border-[#7B5CFF]/40" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 