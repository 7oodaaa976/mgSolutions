import { useLanguage } from "../context/LanguageContext";

export default function Idea() {
  const { dir, t } = useLanguage();
  const idea = t.idea;

  return (
    <section
      id="idea"
      dir={dir}
      className="
        relative z-10 mx-auto my-24 w-[calc(100%-120px)]
        overflow-hidden rounded-[42px] border border-white/10
        bg-[radial-gradient(circle_at_20%_10%,rgba(77,163,255,.16),transparent_35%),linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02))]
        px-8 py-20 backdrop-blur-xl
        max-xl:w-[calc(100%-40px)]
        max-md:my-16 max-md:w-[calc(100%-28px)] max-md:px-5 max-md:py-14
      "
    >
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:70px_70px]" />
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#7B5CFF]/20 blur-[100px]" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#FF4FD8]/15 blur-[100px]" />
      </div>

      <div className="relative mx-auto mb-16 max-w-3xl text-center max-md:mb-10">
        <span className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-black text-[#4DA3FF]">
          {idea.badge}
        </span>

        <h2 className="text-[clamp(34px,4vw,62px)] font-black leading-tight text-white">
          {idea.title1}
          <span className="block bg-gradient-to-r from-[#4DA3FF] via-[#7B5CFF] to-[#FF4FD8] bg-clip-text text-transparent">
            {idea.title2}
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-xl leading-9 text-[#a9adbd] max-md:text-base">
          {idea.desc}
        </p>
      </div>

      <div className="relative mx-auto grid max-w-5xl grid-cols-[1fr_auto_1fr] gap-8 max-md:grid-cols-1">
        <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent max-md:hidden" />

        {idea.items.map((item, index) => {
          const rightSide = index % 2 === 0;

          return (
            <div key={item.num} className="contents max-md:block">
              {rightSide ? (
                <IdeaCard item={item} />
              ) : (
                <div className="max-md:hidden" />
              )}

              <div className="relative z-20 flex justify-center max-md:hidden">
                <div className="grid size-16 place-items-center rounded-full border border-white/15 bg-[#080a16] shadow-[0_0_45px_rgba(123,92,255,.30)]">
                  <span className="grid size-8 place-items-center rounded-full bg-gradient-to-br from-[#4DA3FF] to-[#FF4FD8] text-xs font-black text-white">
                    {item.num}
                  </span>
                </div>
              </div>

              {!rightSide ? (
                <IdeaCard item={item} />
              ) : (
                <div className="max-md:hidden" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function IdeaCard({ item }) {
  return (
    <article
      className="
        group relative overflow-hidden rounded-[30px]
        border border-white/10 bg-[#080a16]/75
        p-8 text-start backdrop-blur-xl transition duration-500
        hover:-translate-y-2 hover:border-[#7B5CFF]/60
        hover:shadow-[0_0_70px_rgba(123,92,255,.18)]
        max-md:mb-5 max-md:p-6
      "
    >
      <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#4DA3FF]/15 blur-3xl transition group-hover:bg-[#FF4FD8]/20" />

      <div className="relative mb-7 flex items-center justify-between gap-4">
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-black uppercase tracking-[2px] text-[#a9adbd]">
          {item.tag}
        </span>

        <span className="text-6xl font-black leading-none text-white/[.035]">
          {item.num}
        </span>
      </div>

      <h3 className="relative mb-4 text-3xl font-black text-white max-md:text-2xl">
        {item.title}
      </h3>

      <p className="relative text-lg leading-9 text-[#a9adbd] max-md:text-base">
        {item.text}
      </p>

      <span className="absolute bottom-0 right-0 h-1 w-0 bg-gradient-to-l from-[#4DA3FF] via-[#7B5CFF] to-[#FF4FD8] transition-all duration-500 group-hover:w-full" />
    </article>
  );
}