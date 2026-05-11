const ideas = [
  {
    num: "01",
    title: "تحليل قبل التنفيذ",
    text: "نفهم مشروعك، العملاء، وطريقة التشغيل قبل ما نكتب سطر كود.",
    big: true,
  },
  {
    num: "02",
    title: "تصميم يخدم الهدف",
    text: "كل سكشن له وظيفة واضحة: ثقة، شرح، بيع، أو تواصل.",
  },
  {
    num: "03",
    title: "كود قابل للتطوير",
    text: "تنظيم في الملفات والكود يخلي المشروع سهل يتكبر بعدين.",
  },
];

export default function Idea() {
  return (
    <section
      id="idea"
      className="relative z-10 mx-auto my-24 w-[calc(100%-120px)] max-xl:w-[calc(100%-40px)] max-md:my-16 max-md:w-[calc(100%-28px)]"
    >
      <div className="mx-auto mb-14 max-w-[760px] text-center max-md:mb-10">
        <span className="mb-3 inline-block font-black text-[#2f8cff]">
          الفكرة
        </span>

        <h2 className="text-[clamp(34px,4vw,58px)] font-black leading-[1.2] text-white max-md:text-[32px]">
          مش بنعمل شكل حلو وبس… بنبني تجربة مفيدة
        </h2>
      </div>

      <div className="grid grid-cols-[1.3fr_1fr_1fr] gap-6 max-xl:grid-cols-2 max-md:grid-cols-1">
        {ideas.map((item) => (
          <article
            key={item.num}
            className={`
              min-h-[260px] rounded-[26px] border border-white/15 p-9
              backdrop-blur-xl transition duration-300
              hover:-translate-y-2 hover:border-[#b041ff]/50
              hover:shadow-[0_0_55px_rgba(176,65,255,.16)]
              max-md:min-h-[220px] max-md:p-6
              ${
                item.big
                  ? "bg-[radial-gradient(circle_at_20%_20%,rgba(47,140,255,.35),transparent_35%),linear-gradient(145deg,rgba(255,255,255,.09),rgba(255,255,255,.03))]"
                  : "bg-[linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025))]"
              }
            `}
          >
            <span className="text-lg font-black text-[#b041ff]">
              {item.num}
            </span>

            <h3 className="my-4 text-[26px] font-black text-white max-md:text-2xl">
              {item.title}
            </h3>

            <p className="text-[17px] leading-[1.8] text-[#a9adbd] max-md:text-base">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}