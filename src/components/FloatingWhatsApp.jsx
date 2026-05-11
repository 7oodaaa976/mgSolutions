export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "السلام عليكم، مهتم أبدأ مشروع مع MG Solutions وعايز أعرف التفاصيل."
  );

  return (
    <a
      href={`https://wa.me/201212694594?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact MG Solutions on WhatsApp"
      className="
        fixed bottom-6 left-6 z-[999]
        flex h-16 w-16 items-center justify-center
        rounded-full bg-[#11b35d] text-3xl text-white
        shadow-[0_0_35px_rgba(17,179,93,.55)]
        transition duration-300
        hover:-translate-y-2 hover:scale-105
        max-md:bottom-4 max-md:left-4 max-md:h-14 max-md:w-14 max-md:text-2xl
      "
    >
      ☎
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#11b35d]/35"></span>
    </a>
  );
}