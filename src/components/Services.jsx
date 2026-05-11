import SectionBadge from "./SectionBadge";
import useReveal from "../hooks/useReveal";

const services = [
  {
    icon: "🧩",
    title: "ERP Systems",
    text: "أنظمة لإدارة المخزون، المبيعات، العملاء، الحسابات، والعمليات اليومية.",
  },
  {
    icon: "🧾",
    title: "POS / Cashier Systems",
    text: "أنظمة كاشير للمطاعم، الكافيهات، المحلات، والفواتير اليومية.",
  },
  {
    icon: "💻",
    title: "Desktop Applications",
    text: "برامج سطح مكتب مخصصة لشغل شركتك ونظام التشغيل الداخلي.",
  },
  {
    icon: "🌐",
    title: "Websites & Web Apps",
    text: "مواقع تعريفية، صفحات بيع، لوحات تحكم، ومنصات ويب احترافية.",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    text: "تطبيقات Android و iOS قريبًا ضمن خدمات MG Solutions.",
    soon: true,
  },
  {
    icon: "🎨",
    title: "Logos & Branding",
    text: "تصميم لوجوهات وهوية بصرية تساعد البراند يظهر بشكل واضح.",
  },
  {
    icon: "💳",
    title: "Business Cards",
    text: "تصميم كروت شخصية ومطبوعات بسيطة تعبر عن مشروعك بشكل شيك.",
  },
  {
    icon: "🎬",
    title: "Video Montage",
    text: "مونتاج فيديوهات، Reels، ومحتوى بصري مناسب للسوشيال ميديا.",
  },
  {
    icon: "📊",
    title: "Dashboards",
    text: "لوحات تحكم لإدارة البيانات، الطلبات، المستخدمين، والإحصائيات.",
  },
];

export default function Services() {
  useReveal(".service-reveal"); 
  return (
    <section
      id="services"
      className="
      service-reveal
      reveal-perspective
        relative z-10 mx-auto my-24 w-[calc(100%-120px)]
        max-xl:w-[calc(100%-40px)]
        max-md:my-16 max-md:w-[calc(100%-28px)]
      "
    >
      <div className="mx-auto mb-14 max-w-[760px] text-center max-md:mb-10">
        <SectionBadge text ="أعمالنا"/>

        <h2 className="mb-5 text-[clamp(34px,4vw,58px)] font-black leading-[1.2] text-white max-md:text-[32px]">
          كل اللي يحتاجه مشروعك رقميًا في مكان واحد
        </h2>

        <p className="text-xl leading-[1.9] text-[#a9adbd] max-md:text-base">
          بنشتغل على حلول عملية تناسب الشركات، المحلات، المشاريع الناشئة،
          وأصحاب البراندات اللي عايزين شكل قوي ونظام شغل منظم.
        </p>
      </div>

      <div
        className="
          grid grid-cols-3 gap-6
          max-xl:grid-cols-2
          max-md:grid-cols-1
        "
      >
        {services.map((service) => (
          <article
            key={service.title}
            className={`
              service-reveal
              group relative min-h-[260px] overflow-hidden rounded-[26px]
              border border-white/15
              bg-[radial-gradient(circle_at_80%_20%,rgba(47,140,255,.14),transparent_35%),linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025))]
              p-8 backdrop-blur-xl transition duration-300
              hover:-translate-y-2 hover:border-[#b041ff]/60
              hover:shadow-[0_0_55px_rgba(176,65,255,.18)]
              max-md:min-h-[230px] max-md:p-6
              ${service.soon ? "opacity-70" : ""}
            `}
          >
            {service.soon && (
              <span className="absolute left-5 top-5 rounded-full bg-gradient-to-br from-[#b041ff] to-[#ff4fd8] px-4 py-1.5 text-xs font-black text-white shadow-[0_0_24px_rgba(255,79,216,.25)]">
                Soon
              </span>
            )}

            <div className="mb-6 grid h-[58px] w-[58px] place-items-center rounded-2xl border border-white/15 bg-white/10 text-3xl">
              {service.icon}
            </div>

            <h3 className="mb-4 text-2xl font-black text-white max-md:text-xl">
              {service.title}
            </h3>

            <p className="text-[17px] leading-[1.85] text-[#a9adbd] max-md:text-base">
              {service.text}
            </p>

            <span className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#2f8cff] via-[#b041ff] to-[#ff4fd8] opacity-0 transition group-hover:opacity-100"></span>
          </article>
        ))}
      </div>
    </section>
  );
}