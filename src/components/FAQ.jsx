import { useState } from "react";
import SectionBadge from "./SectionBadge";
import { useLanguage } from "../context/LanguageContext";

export default function FAQ() {
  const { dir, t } = useLanguage();
  const faq = t.faq;

  const [active, setActive] = useState(0);

  return (
    <section
      id="faq"
      dir={dir}
      className="
        relative z-10 mx-auto my-24
        w-[calc(100%-120px)]
        max-xl:w-[calc(100%-40px)]
        max-md:my-16
        max-md:w-[calc(100%-28px)]
      "
    >
      <div className="mx-auto mb-14 max-w-[760px] text-center max-md:mb-10">
        <SectionBadge text={faq.badge} />

        <h2
          className="
            cinematic-title
            text-[clamp(34px,4vw,58px)]
            font-black
            leading-tight
            text-white
            max-md:text-[32px]
          "
        >
          {faq.title}
        </h2>

        <p className="mt-5 text-xl leading-[1.9] text-[#a9adbd] max-md:text-base">
          {faq.desc}
        </p>
      </div>

      <div className="mx-auto max-w-[900px] space-y-4">
        {faq.items.map((item, index) => {
          const isOpen = active === index;

          return (
            <div
              key={item.question}
              className="
                overflow-hidden rounded-[24px]
                border border-white/15
                bg-[linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025))]
                backdrop-blur-xl
                transition duration-300
                hover:border-[#b041ff]/40
              "
            >
              <button
                type="button"
                onClick={() => setActive(isOpen ? null : index)}
                className="
                  flex w-full items-center justify-between gap-5
                  px-6 py-5 text-right
                "
              >
                <span className="text-lg font-black text-white max-md:text-base">
                  {item.question}
                </span>

                <span
                  className={`
                    grid h-10 w-10 shrink-0 place-items-center
                    rounded-full border border-white/15
                    bg-white/5 text-xl font-black text-white
                    transition-all duration-300
                    ${
                      isOpen
                        ? "rotate-45 bg-[#b041ff]/30 border-[#b041ff]/40"
                        : ""
                    }
                  `}
                >
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-[17px] leading-[1.9] text-[#a9adbd] max-md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}