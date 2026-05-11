import logo from "../assets/mglogo.png";
export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto mb-6 flex min-h-[82px] w-[calc(100%-64px)] items-center justify-between gap-6 rounded-[34px] border border-white/15 bg-[#040612]/70 px-9 py-5 text-[#a9adbd] backdrop-blur-xl max-md:w-[calc(100%-28px)] max-md:flex-col max-md:text-center">
      <div className="flex items-center gap-3">
        <a
          href="https://wa.me/201212694594"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-[#11b35d] px-6 py-3 font-black text-white shadow-[0_0_28px_rgba(17,179,93,.5)] transition hover:-translate-y-1"
        >
          واتساب
        </a>
      <p>© 2026 MG Solutions. All rights reserved.</p>
  
</div>
 

      <div className="flex flex-wrap items-center justify-center gap-3">
        <a href="#services" className="transition hover:text-white">
          الخدمات
        </a>

        <a href="#works" className="transition hover:text-white">
          الأعمال
        </a>

        <a href="#contact" className="transition hover:text-white">
          تواصل
        </a>

       
        <img
    src={logo}
    alt="MG Solutions"
    className="h-[52px] w-auto object-contain"
  />
      </div>
    </footer>
  );
}