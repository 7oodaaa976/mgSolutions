import logo from "../assets/mglogo.png";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { dir, lang, t } = useLanguage();
  const footer = t.footer;

  return (
    <footer
      dir={dir}
      className="
        relative z-10 mx-auto mb-6 w-[calc(100%-64px)]
        overflow-hidden rounded-[38px] border border-white/10
        bg-[radial-gradient(circle_at_20%_20%,rgba(77,163,255,.13),transparent_32%),linear-gradient(145deg,rgba(255,255,255,.07),rgba(255,255,255,.025))]
        px-8 py-7 text-[#a9adbd] backdrop-blur-xl
        shadow-[0_0_70px_rgba(123,92,255,.08)]
        max-md:w-[calc(100%-28px)] max-md:px-5
      "
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#FF4FD8]/15 blur-[80px]" />
      </div>

      <div className="relative flex items-center justify-between gap-8 max-lg:flex-col max-lg:text-center">
        <div className="flex items-center gap-4 max-lg:flex-col">
          <img
            src={logo}
            alt="MG Solutions"
            className="h-[58px] w-auto object-contain drop-shadow-[0_0_18px_rgba(123,92,255,.45)]"
          />

          <div>
            <h3 className="text-xl font-black text-white">MG Solutions</h3>
            <p className="mt-1 text-sm leading-7">{footer.desc}</p>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-3">
          {footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                rounded-full border border-white/10 bg-white/5
                px-5 py-2.5 text-sm font-bold
                transition hover:-translate-y-1 hover:border-[#7B5CFF]/50 hover:text-white
              "
            >
              {link.text}
            </a>
          ))}
        </nav>

        <a
          href={footer.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="
            group relative overflow-hidden rounded-full
            px-6 py-3.5 font-black text-white
            transition hover:-translate-y-1
          "
        >
          <span className="relative z-10 flex items-center gap-2">
            {footer.whatsapp}
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

          <span className="absolute inset-0 bg-gradient-to-r from-[#2f8cff] via-[#7b5cff] to-[#ff4fd8]" />
        </a>
      </div>

      <div className="relative mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-sm max-md:flex-col">
        <p>{footer.copyright}</p>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
          <span className="relative flex size-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4DA3FF] opacity-75" />
            <span className="relative inline-flex size-2.5 rounded-full bg-[#4DA3FF]" />
          </span>
        </div>
      </div>
    </footer>
  );
}