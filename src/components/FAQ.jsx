import { useState } from "react";
import SectionBadge from "./SectionBadge";

const faqs = [
  {
    question: "هل ممكن أبدأ بموقع بسيط وبعدها أطور لنظام أكبر؟",
    answer:
      "أيوه طبعًا. بنقدر نبدأ بـ Landing Page أو موقع تعريفي، وبعدها نضيف Dashboard أو نظام إدارة حسب نمو المشروع.",
  },
  {
    question: "هل التصميم بيكون Responsive للموبايل؟",
    answer:
      "أكيد. كل المشاريع بتتجهز عشان تشتغل بشكل مناسب على الموبايل، التابلت، والكمبيوتر.",
  },
  {
    question: "هل ممكن أطلب Dashboard أو نظام مخصص؟",
    answer:
      "نعم، نقدر نبني أنظمة مخصصة زي ERP، POS، HR System، أو Dashboard لإدارة البيانات والمستخدمين.",
  },
  {
    question: "هل بتساعدوني في رفع المشروع أونلاين؟",
    answer:
      "أيوه، بنجهز المشروع للنشر ونساعد في رفعه على الاستضافة أو المنصات المناسبة حسب نوع المشروع.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative z-10 mx-auto my-24 w-[calc(100%-120px)] max-xl:w-[calc(100%-40px)] max-md:my-16 max-md:w-[calc(100%-28px)]">
      <div className="mx-auto mb-14 max-w-[760px] text-center max-md:mb-10">
        <SectionBadge text="FAQ" />

        <h2 className="cinematic-title text-[clamp(34px,4vw,58px)] font-black leading-[1.2] text-white max-md:text-[32px]">
          أسئلة ممكن تكون في بالك
        </h2>

        <p className="mt-5 text-xl leading-[1.9] text-[#a9adbd] max-md:text-base">
          جمعنالك أهم الأسئلة اللي بتتكرر قبل بداية أي مشروع جديد.
        </p>
      </div>

      <div className="mx-auto max-w-[900px] space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = active === index;

          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-[24px] border border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025))] backdrop-blur-xl"
            >
              <button
                type="button"
                onClick={() => setActive(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-right"
              >
                <span className="text-lg font-black text-white max-md:text-base">
                  {faq.question}
                </span>

                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-xl font-black text-white transition ${
                    isOpen ? "rotate-45 bg-[#b041ff]/30" : ""
                  }`}
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
                    {faq.answer}
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