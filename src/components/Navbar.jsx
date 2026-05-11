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
        className={`
    fixed left-1/2 top-5 z-[100]
    flex -translate-x-1/2 items-center gap-8 rounded-full
    border border-white/15 ${scrolled
            ? "bg-[#040612]/85 backdrop-blur-2xl"
            : "bg-[#040612]/40 backdrop-blur-xl"
          }  backdrop-blur-xl
    transition-all duration-300

    ${scrolled
            ? "h-[68px] w-[calc(100%-90px)] px-6 shadow-[0_0_55px_rgba(176,65,255,.18)]"
            : "h-[78px] w-[calc(100%-64px)] px-7 shadow-[0_0_45px_rgba(47,140,255,.08)]"
          }

    max-lg:gap-5
    max-md:w-[calc(100%-28px)] max-md:px-4
  `}
      >
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="hidden h-13 w-13 place-items-center rounded-full bg-white/10 p-4 transition hover:bg-white/15 max-lg:grid"
          aria-label="Open Menu"
        >
          <span
            className={`block h-0.5 w-5 rounded bg-white transition ${open ? "translate-y-1.5 rotate-45" : ""
              }`}
          ></span>
          <span
            className={`block h-0.5 w-5 rounded bg-white transition ${open ? "opacity-0" : ""
              }`}
          ></span>
          <span
            className={`block h-0.5 w-5 rounded bg-white transition ${open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
          ></span>
        </button>

        <a href="#home" className="ml-auto flex items-center">
          <img
            src={logo}
            alt="MG Solutions"
            className={`
              w-auto object-contain drop-shadow-[0_0_18px_rgba(176,65,255,.45)]
              transition-all duration-300
              ${scrolled ? "h-[48px]" : "h-[56px]"}
              max-md:h-[46px]
            `}
          />
        </a>

        <nav className="flex gap-8 text-[17px] font-bold max-lg:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`
                relative transition duration-300 hover:text-white
                ${active === link.id
                  ? "text-white after:absolute after:-bottom-6 after:left-[18%] after:right-[18%] after:h-[3px] after:rounded-full after:bg-gradient-to-r after:from-[#2f8cff] after:to-[#b041ff]"
                  : "text-[#a9adbd]"
                }
              `}
            >
              {link.text}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-2xl bg-gradient-to-br from-[#2f8cff] to-[#b041ff] px-7 py-4 text-base font-extrabold text-white shadow-[0_0_35px_rgba(176,65,255,.3)] transition hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(176,65,255,.45)] max-lg:hidden"
        >
          ابدأ مشروعك
        </a>
      </header>

      <div
        className={`
          fixed right-8 top-28 z-[99] w-[calc(100%-64px)] overflow-hidden
          rounded-[26px] border border-white/15 bg-[#040612]/95 p-5
          shadow-[0_0_50px_rgba(47,140,255,.18)] backdrop-blur-xl
          transition-all duration-300 max-md:right-4 max-md:w-[calc(100%-28px)]

          ${open
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
              ${active === link.id
                ? "bg-gradient-to-r from-[#2f8cff]/20 to-[#b041ff]/20 text-white"
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
          className="mt-3 block rounded-2xl bg-gradient-to-br from-[#2f8cff] to-[#b041ff] px-5 py-4 text-center text-lg font-extrabold text-white"
        >
          ابدأ مشروعك
        </a>
      </div>
    </>
  );
}