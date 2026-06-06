import { useEffect, useState } from "react";
import logo from "../assets/mglogo.png";
import { useLanguage } from "../context/LanguageContext";

const linkKeys = [
  { key: "home", href: "#home", id: "home" },
  { key: "services", href: "#services", id: "services" },
  { key: "idea", href: "#idea", id: "idea" },
  { key: "works", href: "#works", id: "works" },
  { key: "process", href: "#process", id: "process" },
  { key: "contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const { lang, dir, t, toggleLanguage } = useLanguage();

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll("section[id], main[id]");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
      setScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [lang]);

  return (
    <>
      <header
        dir={dir}
        className={`
          fixed left-1/2 top-5 z-100
          flex -translate-x-1/2 items-center justify-between
          rounded-full border border-white/15
          transition-all duration-300

          ${
            scrolled
              ? "h-16.5 w-[calc(100%-90px)] bg-[#040612]/85 px-5 shadow-[0_0_55px_rgba(123,92,255,.18)] backdrop-blur-2xl"
              : "h-19.5 w-[calc(100%-64px)] bg-[#040612]/45 px-6 shadow-[0_0_45px_rgba(47,140,255,.10)] backdrop-blur-xl"
          }

          max-xl:w-[calc(100%-40px)]
          max-md:h-17 max-md:w-[calc(100%-24px)] max-md:px-4
        `}
      >
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="MG Solutions"
            className={`
              w-auto object-contain drop-shadow-[0_0_18px_rgba(176,65,255,.45)]
              transition-all duration-300
              ${scrolled ? "h-11.5" : "h-14"}
              max-md:h-11
            `}
          />
        </a>

        <nav
          className="
            absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2
            items-center gap-1 rounded-full border border-white/10
            bg-white/4.5 p-1.5 backdrop-blur-xl
            lg:flex
          "
        >
          {linkKeys.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`
                relative rounded-full px-5 py-3 text-[15px] font-extrabold
                transition-all duration-300
                ${
                  active === link.id
                    ? "bg-white text-[#070914] shadow-[0_0_28px_rgba(255,255,255,.12)]"
                    : "text-[#a9adbd] hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            className="
              grid h-12 w-12 place-items-center rounded-full
              border border-white/15 bg-white/6
              text-sm font-black text-white transition
              hover:border-[#7B5CFF]/70 hover:bg-white/10
            "
          >
            {t.nav.langButton}
          </button>

          <a
            href="#contact"
            className="
              group relative overflow-hidden rounded-full
              border border-white/15 bg-white/6
              px-6 py-3.5 text-[15px] font-extrabold text-white
              shadow-[0_0_35px_rgba(123,92,255,.18)]
              transition duration-300
              hover:border-[#7B5CFF]/70
              hover:shadow-[0_0_55px_rgba(123,92,255,.32)]
            "
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.nav.cta}
              <span
                className={`transition duration-300 ${
                  lang === "ar"
                    ? "group-hover:-translate-x-1"
                    : "group-hover:translate-x-1"
                }`}
              >
                {lang === "ar" ? "←" : "→"}
              </span>
            </span>

            <span className="absolute inset-0 bg-linear-to-r from-[#2f8cff] via-[#7b5cff] to-[#ff4fd8] opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="absolute left-[-40%] top-0 h-full w-[40%] skew-x-[-20deg] bg-white/30 opacity-0 transition duration-500 group-hover:left-[120%] group-hover:opacity-100" />
          </a>
        </div>

        <div className="hidden items-center gap-2 max-lg:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            className="
              grid h-12 w-12 place-items-center rounded-full
              border border-white/10 bg-white/[.07]
              text-sm font-black text-white transition hover:bg-white/15
            "
          >
            {t.nav.langButton}
          </button>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="
              grid h-12 w-12 place-items-center rounded-full
              border border-white/10 bg-white/[.07]
              transition hover:bg-white/15
            "
            aria-label={t.nav.menuLabel}
          >
            <span
              className={`block h-0.5 w-5 rounded bg-white transition ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-white transition ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      <div
        dir={dir}
        className={`
          fixed right-4 top-24 z-99 w-[calc(100%-32px)]
          overflow-hidden rounded-[28px] border border-white/15
          bg-[#040612]/95 p-4
          shadow-[0_0_60px_rgba(123,92,255,.20)]
          backdrop-blur-2xl transition-all duration-300 lg:hidden

          ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-5 opacity-0"
          }
        `}
      >
        {linkKeys.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={() => {
              setOpen(false);
              setActive(link.id);
            }}
            className={`
              mb-2 block rounded-2xl px-5 py-4 text-lg font-extrabold transition
              ${
                active === link.id
                  ? "bg-white text-[#070914]"
                  : "text-[#a9adbd] hover:bg-white/10 hover:text-white"
              }
            `}
          >
            {t.nav[link.key]}
          </a>
        ))}

        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="
            group relative mt-4 block overflow-hidden rounded-2xl
            px-5 py-4 text-center text-lg font-extrabold text-white
          "
        >
          <span className="relative z-10">
            {t.nav.cta} {lang === "ar" ? "←" : "→"}
          </span>
          <span className="absolute inset-0 bg-linear-to-r from-[#2f8cff] via-[#7b5cff] to-[#ff4fd8]" />
        </a>
      </div>
    </>
  );
}