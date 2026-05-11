export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto my-24 w-[calc(100%-120px)] max-xl:w-[calc(100%-40px)] max-md:my-16 max-md:w-[calc(100%-28px)]"
    >
      <div className="overflow-hidden rounded-[34px] border border-white/15 bg-[radial-gradient(circle_at_50%_0,rgba(176,65,255,.35),transparent_40%),linear-gradient(145deg,rgba(255,255,255,.09),rgba(255,255,255,.025))] px-8 py-20 text-center backdrop-blur-xl max-md:px-5 max-md:py-14">
        <span className="mb-4 inline-block font-black text-[#2f8cff]">
          تواصل معنا
        </span>

        <h2 className="mx-auto max-w-[850px] text-[clamp(36px,5vw,66px)] font-black leading-[1.15] text-white">
          جاهز نحول فكرتك لمشروع حقيقي؟
        </h2>

        <p className="mx-auto mt-5 max-w-[650px] text-xl leading-[1.9] text-[#a9adbd] max-md:text-base">
          ابعتلنا تفاصيل مشروعك، وهنساعدك تختار أنسب حل يناسب هدفك وميزانيتك.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 max-sm:flex-col">
          <a
            href="https://wa.me/201212694594"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-[190px] items-center justify-center rounded-2xl bg-gradient-to-r from-[#2f8cff] to-[#b041ff] px-8 py-4 font-black text-white transition hover:-translate-y-1"
          >
            تواصل واتساب
          </a>

          <a
            href="#works"
            className="inline-flex min-w-[190px] items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
          >
            شوف الأعمال
          </a>
        </div>
      </div>
    </section>
  );
}