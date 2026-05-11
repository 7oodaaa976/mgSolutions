const plans = [
  {
    name: "Starter",
    label: "مناسب للبداية",
    desc: "صفحة تعريفية قوية تعرض فكرتك بشكل احترافي.",
    features: ["Landing Page", "Responsive Design", "SEO Basics", "Contact Section"],
  },
  {
    name: "Business",
    label: "الأكثر طلبًا",
    desc: "موقع شركة كامل يعرض الخدمات والأعمال ويجهزك للنشر.",
    popular: true,
    features: ["Multi Pages", "Animations", "Projects Section", "Deployment Ready"],
  },
  {
    name: "Custom System",
    label: "حسب المشروع",
    desc: "أنظمة مخصصة مثل Dashboards وERP وPOS حسب احتياجك.",
    features: ["ERP / POS", "Dashboard", "User Management", "Support & Updates"],
  },
];

export default function Pricing() {
  return (
    <section className="relative z-10 mx-auto my-24 w-[calc(100%-120px)] max-xl:w-[calc(100%-40px)] max-md:my-16 max-md:w-[calc(100%-28px)]">
      <div className="mx-auto mb-14 max-w-[760px] text-center max-md:mb-10">
        <span className="mb-3 inline-block font-black text-[#2f8cff]">
          الباقات
        </span>

        <h2 className="text-[clamp(34px,4vw,58px)] font-black leading-[1.2] text-white max-md:text-[32px]">
          اختار البداية المناسبة لمشروعك
        </h2>

        <p className="mt-5 text-xl leading-[1.9] text-[#a9adbd] max-md:text-base">
          كل مشروع ليه تفاصيله، والباقات دي نقطة بداية نقدر نطور عليها حسب احتياجك.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`
              relative overflow-hidden rounded-[30px] border p-8 text-center
              backdrop-blur-xl transition duration-300 hover:-translate-y-2
              max-md:p-6
              ${
                plan.popular
                  ? "border-[#b041ff]/70 bg-[radial-gradient(circle_at_50%_0,rgba(176,65,255,.35),transparent_40%),linear-gradient(145deg,rgba(255,255,255,.1),rgba(255,255,255,.03))] shadow-[0_0_60px_rgba(176,65,255,.18)]"
                  : "border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,.02))]"
              }
            `}
          >
            {plan.popular && (
              <span className="absolute left-5 top-5 rounded-full bg-gradient-to-r from-[#ff4fd8] to-[#b041ff] px-4 py-2 text-xs font-black text-white">
                Popular
              </span>
            )}

            <h3 className="text-[28px] font-black text-white">{plan.name}</h3>

            <strong className="mt-4 block text-2xl font-black text-[#2f8cff]">
              {plan.label}
            </strong>

            <p className="mx-auto mt-4 max-w-[320px] text-base leading-[1.8] text-[#a9adbd]">
              {plan.desc}
            </p>

            <ul className="my-7 space-y-3 text-[#a9adbd]">
              {plan.features.map((feature) => (
                <li key={feature} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#2f8cff] to-[#b041ff] py-4 font-black text-white transition hover:-translate-y-1"
            >
              ابدأ الآن
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}