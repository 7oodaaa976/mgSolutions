import useReveal from "../hooks/useReveal";
import { useLanguage } from "../context/LanguageContext";

export default function Process() {
  const { dir, t } = useLanguage();
  const process = t.process;

  useReveal(".process-reveal");

  return (
    <section
      id="process"
      dir={dir}
      className="relative z-10 mx-auto my-24 w-[calc(100%-120px)] max-xl:w-[calc(100%-40px)] max-md:my-16 max-md:w-[calc(100%-28px)]"
    >
      <div className="mx-auto mb-14 max-w-3xl text-center max-md:mb-10">
        <span className="mb-3 inline-block font-black text-[#2f8cff]">
          {process.badge}
        </span>

        <h2 className="text-[clamp(34px,4vw,58px)] font-black leading-tight text-white max-md:text-3xl">
          {process.title}
        </h2>

        <p className="mt-5 text-xl leading-9 text-[#a9adbd] max-md:text-base">
          {process.desc}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-2 max-md:grid-cols-1">
        {process.steps.map((step) => (
          <article
            key={step.num}
            className="process-reveal group relative overflow-hidden rounded-[28px] border border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025))] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#b041ff]/50 hover:shadow-[0_0_55px_rgba(176,65,255,.16)]"
          >
            <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-[#2f8cff] to-[#b041ff] text-lg font-black text-white shadow-[0_0_30px_rgba(47,140,255,.25)]">
              {step.num}
            </div>

            <h3 className="mb-3 text-2xl font-black text-white">
              {step.title}
            </h3>

            <p className="text-[17px] leading-8 text-[#a9adbd] max-md:text-base">
              {step.text}
            </p>

            <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-[#b041ff]/20 blur-3xl transition group-hover:bg-[#2f8cff]/25" />
          </article>
        ))}
      </div>
    </section>
  );
}