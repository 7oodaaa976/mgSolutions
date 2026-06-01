import { useEffect, useState } from "react";
import logo from "../assets/mglogo.png";

const links = [
  { text: "الرئيسية", href: "#home", id: "home" },
  { text: "الخدمات", href: "#services", id: "services" },
  { text: "الفكرة", href: "#idea", id: "idea" },
  { text: "الأعمال", href: "#works", id: "works" },
  { text: "الخطوات", href: "#process", id: "process" },
  { text: "تواصل", href: "#contact", id: "contact" },
];

export default function Navbar() {
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

  return (
    <>
      <header
        dir="rtl"
        className={`
          fixed left-1/2 top-5 z-[100]
          flex -translate-x-1/2 items-center justify-between
          rounded-full border border-white/15
          transition-all duration-300

          ${
            scrolled
              ? "h-[66px] w-[calc(100%-90px)] bg-[#040612]/85 px-5 shadow-[0_0_55px_rgba(123,92,255,.18)] backdrop-blur-2xl"
              : "h-[78px] w-[calc(100%-64px)] bg-[#040612]/45 px-6 shadow-[0_0_45px_rgba(47,140,255,.10)] backdrop-blur-xl"
          }

          max-xl:w-[calc(100%-40px)]
          max-md:h-[68px] max-md:w-[calc(100%-24px)] max-md:px-4
        `}
      >
        <a href="#home" className="flex items-center">
          <img
            src={logo}
            alt="MG Solutions"
            className={`
              w-auto object-contain drop-shadow-[0_0_18px_rgba(176,65,255,.45)]
              transition-all duration-300
              ${scrolled ? "h-[46px]" : "h-[56px]"}
              max-md:h-[44px]
            `}
          />
        </a>

        <nav
          className="
            absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2
            items-center gap-1 rounded-full border border-white/10
            bg-white/[.045] p-1.5 backdrop-blur-xl
            lg:flex
          "
        >
          {links.map((link) => (
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
              {link.text}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="
            group relative hidden overflow-hidden rounded-full
            border border-white/15 bg-white/[.06]
            px-6 py-3.5 text-[15px] font-extrabold text-white
            shadow-[0_0_35px_rgba(123,92,255,.18)]
            transition duration-300
            hover: hover:border-[#7B5CFF]/70
            hover:shadow-[0_0_55px_rgba(123,92,255,.32)]
            lg:inline-flex
          "
        >
          <span className="relative z-10 flex items-center gap-2">
            احجز استشارة مجانية
            <span className="transition duration-300 group-hover:-translate-x-1">
              ←
            </span>
          </span>

          <span className="absolute inset-0 bg-gradient-to-r from-[#2f8cff] via-[#7b5cff] to-[#ff4fd8] opacity-0 transition duration-300 group-hover:opacity-100" />
          <span className="absolute left-[-40%] top-0 h-full w-[40%] skew-x-[-20deg] bg-white/30 opacity-0 transition duration-500 group-hover:left-[120%] group-hover:opacity-100" />
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="
            hidden h-12 w-12 place-items-center rounded-full
            border border-white/10 bg-white/[.07]
            transition hover:bg-white/15 max-lg:grid
          "
          aria-label="Open Menu"
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
      </header>

      <div
        dir="rtl"
        className={`
          fixed right-4 top-24 z-[99] w-[calc(100%-32px)]
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
        {links.map((link) => (
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
            {link.text}
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
          <span className="relative z-10">احجز استشارة مجانية ←</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#2f8cff] via-[#7b5cff] to-[#ff4fd8]" />
        </a>
      </div>
    </>
  );
}