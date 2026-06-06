import { useLanguage } from "../context/LanguageContext";

export default function Pricing() {
  const { dir, t, lang } = useLanguage();
  const pricing = t.pricing;
  const plans = pricing.plans;

  return (
    <section
      id="pricing"
      dir={dir}
      className="relative z-10 mx-auto my-24 w-[calc(100%-120px)] max-xl:w-[calc(100%-40px)] max-md:my-16 max-md:w-[calc(100%-28px)]"
    >
      <div className="mx-auto mb-14 max-w-4xl text-center">
        <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-black text-[#4DA3FF] shadow-[0_0_35px_rgba(77,163,255,.12)]">
          {pricing.badge}
        </span>

        <h2 className="text-[clamp(34px,4vw,62px)] font-black leading-tight text-white">
          {pricing.title1}
          <span className="block bg-gradient-to-r from-[#4DA3FF] via-[#7B5CFF] to-[#FF4FD8] bg-clip-text text-transparent">
            {pricing.title2}
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-xl leading-9 text-[#a9adbd] max-md:text-base">
          {pricing.desc}
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[46px] border border-white/10 bg-[#070914] p-6 shadow-[0_0_90px_rgba(123,92,255,.12)] max-md:rounded-[30px] max-md:p-4">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
          <div className="absolute -right-36 -top-36 h-96 w-96 rounded-full bg-[#4DA3FF]/20 blur-[110px]" />
          <div className="absolute -bottom-36 -left-36 h-96 w-96 rounded-full bg-[#FF4FD8]/20 blur-[110px]" />
        </div>

        <div className="relative grid grid-cols-3 gap-5 max-xl:grid-cols-1">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`group relative overflow-hidden rounded-[34px] border p-7 transition duration-500 hover:-translate-y-3 max-md:p-6 ${
                plan.popular
                  ? "border-[#7B5CFF]/70 bg-white/10 shadow-[0_0_80px_rgba(123,92,255,.24)] xl:-translate-y-4"
                  : "border-white/10 bg-white/5 hover:border-[#7B5CFF]/50"
              }`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${plan.accent}`}
              />

              {plan.popular && (
                <span className="absolute left-5 top-5 rounded-full bg-gradient-to-r from-[#4DA3FF] via-[#7B5CFF] to-[#FF4FD8] px-4 py-2 text-xs font-black text-white shadow-[0_0_35px_rgba(123,92,255,.45)]">
                  {pricing.recommended}
                </span>
              )}

              <div className="mb-10 flex items-start justify-between gap-4">
                <div>
                  <span className="block text-6xl font-black leading-none text-white/5 transition group-hover:text-white/10">
                    {plan.number}
                  </span>

                  <span className="mt-3 inline-flex rounded-full border border-white/10 bg-black/20 px-4 py-1.5 text-xs font-black uppercase tracking-[2px] text-[#a9adbd]">
                    {plan.badge}
                  </span>
                </div>

                <div
                  className={`grid size-16 place-items-center rounded-3xl bg-gradient-to-br ${plan.accent} text-2xl font-black text-white shadow-[0_0_35px_rgba(123,92,255,.25)] transition group-hover:rotate-6 group-hover:scale-110`}
                >
                  {plan.name.charAt(0)}
                </div>
              </div>

              <h3 className="text-3xl font-black text-white max-md:text-[28px]">
                {plan.name}
              </h3>

              <strong
                className={`mt-2 block bg-gradient-to-r ${plan.accent} bg-clip-text text-xl font-black text-transparent`}
              >
                {plan.label}
              </strong>

              <p className="mt-5 min-h-28 text-base leading-8 text-[#a9adbd] max-xl:min-h-0">
                {plan.desc}
              </p>

              <div className="my-7 h-px bg-gradient-to-l from-transparent via-white/15 to-transparent" />

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-bold text-[#e5e7f3] transition group-hover:border-white/15 group-hover:bg-white/5"
                  >
                    <span
                      className={`grid size-7 shrink-0 place-items-center rounded-full bg-gradient-to-br ${plan.accent} text-xs text-white`}
                    >
                      ✓
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`relative mt-8 flex w-full items-center justify-center overflow-hidden rounded-2xl border border-white/15 px-5 py-4 font-black text-white transition hover:-translate-y-1 ${
                  plan.popular
                    ? `bg-gradient-to-r ${plan.accent}`
                    : "bg-white/5"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {pricing.cta}
                  <span
                    className={`transition ${
                      lang === "ar"
                        ? "group-hover:-translate-x-1"
                        : "group-hover:translate-x-1"
                    }`}
                  >
                    {lang === "ar" ? "←" : "→"}
                  </span>
                </span>

                {!plan.popular && (
                  <span
                    className={`absolute inset-0 bg-gradient-to-r ${plan.accent} opacity-0 transition duration-300 group-hover:opacity-100`}
                  />
                )}
              </a>

              <span
                className={`pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-gradient-to-br ${plan.accent} opacity-10 blur-3xl transition group-hover:opacity-20`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}