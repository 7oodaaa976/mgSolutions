import { useEffect, useRef, useState } from "react";
import SectionBadge from "./SectionBadge";
import useReveal from "../hooks/useReveal";
import useTextReveal from "../hooks/useTextReveal";

const works = [
  {
    title: "Simulator Egypt",
    tag: "Industrial Website",
    featured: true,
    text: "منصة رقمية حديثة لشركة صناعية تعمل في مجال أنظمة التدريب والمحاكاة، مصممة لعرض المنتجات والخدمات التقنية بطريقة احترافية تدعم الهوية الصناعية للشركة.",
    video: "/projects/company/preview.mp4",
    images: ["/projects/company/company-1.png", "/projects/company/company-2.png"],
    techs: ["React", "Tailwind", "Industrial UI", "Laravel"],
  },
  {
    title: "AI Dashboard",
    tag: "Productivity Dashboard",
    featured: true,
    text: "لوحة تحكم متكاملة تتيح لكل مستخدم إدارة الـ prompts الخاصة بإنشاء المواقع والصور، حفظ الملاحظات والأنشطة اليومية، تعديل البيانات الشخصية، ومتابعة كل العمليات داخل تجربة استخدام حديثة ومنظمة.",
    video: "/projects/dashboard/preview.mp4",
    images: ["/projects/dashboard/dash-1.png", "/projects/dashboard/dash-2.png"],
    techs: ["React", "Tailwind", "LocalStorage"],
  },
  {
    title: "Movista",
    tag: "Movie Platform",
    text: "منصة أفلام حديثة تعرض المحتوى السينمائي بتجربة استخدام سلسة مع واجهات تفاعلية، تصنيفات ديناميكية، وتصميم Responsive مناسب لكل الأجهزة.",
    video: "/projects/movista/preview.mp4",
    images: ["/projects/movista/movi-1.png", "/projects/movista/movi-2.png"],
    techs: ["React", "TMDB API", "Tailwind", "Responsive UI"],
  },
  {
    title: "Rehlatk",
    tag: "Travel Website",
    text: "موقع سياحي بتجربة عرض جذابة للرحلات والعروض، مع تصميم بصري حديث يساعد المستخدم يكتشف الوجهات ويتواصل بسهولة.",
    video: "/projects/travel/preview.mp4",
    images: ["/projects/travel/re-1.png", "/projects/travel/re-2.png"],
    techs: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Works() {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredWorks = works.filter((work) => work.featured);
  const normalWorks = works.filter((work) => !work.featured);

  useReveal(".project-reveal");
  useTextReveal(".cinematic-title");

  return (
    <section
      id="works"
      className="relative z-10 mx-auto my-24 w-[calc(100%-120px)] max-xl:w-[calc(100%-40px)] max-md:my-16 max-md:w-[calc(100%-28px)]"
    >
      <div className="mx-auto mb-14 max-w-[760px] text-center max-md:mb-10">
        <SectionBadge text="أعمالنا" />

        <h2 className="cinematic-title text-[clamp(34px,4vw,58px)] font-black leading-[1.2] text-white max-md:text-[32px]">
          مشاريع بتعرض قوة التصميم والتجربة
        </h2>

        <p className="mt-5 text-xl leading-[1.9] text-[#a9adbd] max-md:text-base">
          معاينات حية للمشاريع توضح الحركة، التجاوب، وطريقة عرض المحتوى داخل كل تجربة.
        </p>
      </div>

      <ProjectsGroup
        title="Featured Projects"
        projects={featuredWorks}
        featured
        onSelect={setSelectedProject}
      />

      <ProjectsGroup
        title="Other Projects"
        projects={normalWorks}
        onSelect={setSelectedProject}
      />

      <div className="mt-12 rounded-[30px] border border-white/15 bg-[radial-gradient(circle_at_50%_0,rgba(176,65,255,.28),transparent_40%),linear-gradient(145deg,rgba(255,255,255,.08),rgba(255,255,255,.025))] p-8 text-center backdrop-blur-xl max-md:p-6">
        <h3 className="text-3xl font-black text-white max-md:text-2xl">
          عندك فكرة مشروع مشابهة؟
        </h3>

        <p className="mx-auto mt-4 max-w-[650px] text-lg leading-[1.8] text-[#a9adbd] max-md:text-base">
          نقدر نحول فكرتك لتجربة رقمية منظمة، سريعة، ومناسبة لهدف مشروعك.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-flex rounded-2xl bg-gradient-to-r from-[#2f8cff] to-[#b041ff] px-8 py-4 font-black text-white transition hover:-translate-y-1"
        >
          ابدأ مشروعك الآن
        </a>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

function ProjectsGroup({ title, projects, featured = false, onSelect }) {
  return (
    <div className={featured ? "mb-12" : ""}>
      <h3 className="mb-6 text-3xl font-black text-white max-md:text-2xl">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
        {projects.map((work) => (
          <ProjectCard
            key={work.title}
            work={work}
            featured={featured}
            onDetails={() => onSelect(work)}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ work, featured = false, onDetails }) {
  return (
    <article className="project-reveal group overflow-hidden rounded-[30px] border border-white/15 bg-[linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.025))] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#b041ff]/50 hover:shadow-[0_0_55px_rgba(176,65,255,.16)]">
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#080b18]">
        <div
          className={`relative overflow-hidden ${
            featured ? "h-[320px]" : "h-[250px]"
          } max-md:h-[220px]`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={work.images[0]}
            className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
          >
            <source src={work.video} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-white/5" />

          <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-black text-white backdrop-blur">
            {work.tag}
          </span>

          {featured && (
            <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-[#ff4fd8] to-[#b041ff] px-4 py-2 text-xs font-black text-white">
              Featured
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 p-3">
          {work.images.map((img, index) => (
            <div
              key={img}
              className="relative h-[105px] overflow-hidden rounded-[18px] border border-white/10 bg-[#070a15] max-md:h-[95px]"
            >
              <img
                src={img}
                alt={`${work.title} screenshot ${index + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>

      <div className="px-2 pt-6">
        <h3
          className={`mb-3 font-black text-white ${
            featured ? "text-[34px]" : "text-[28px]"
          } max-md:text-2xl`}
        >
          {work.title}
        </h3>

        <p className="text-[17px] leading-[1.8] text-[#a9adbd] max-md:text-base">
          {work.text}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {work.techs.map((tech) => (
            <span
              key={tech}
              className={`rounded-full border px-3 py-1 text-xs font-bold ${getTechClass(
                tech
              )}`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={onDetails}
            className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 py-3 font-black text-white transition hover:-translate-y-1 hover:border-[#b041ff]/50 hover:bg-white/10"
          >
            Details
          </button>
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    modalRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-5 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-[980px] overflow-y-auto rounded-[32px] border border-white/15 bg-[#070a18] p-5 shadow-[0_0_80px_rgba(47,140,255,.18)] outline-none max-md:rounded-[24px] max-md:p-4"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute left-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/40 text-2xl font-black text-white backdrop-blur transition hover:bg-white/20"
        >
          ×
        </button>

        <video
          autoPlay
          muted
          loop
          playsInline
          poster={project.images[0]}
          className="h-[420px] w-full rounded-[24px] border border-white/10 object-cover max-md:h-[240px]"
        >
          <source src={project.video} type="video/mp4" />
        </video>

        <div className="mt-5 grid grid-cols-2 gap-4 max-md:grid-cols-1">
          {project.images.map((img, index) => (
            <img
              key={img}
              src={img}
              alt={`${project.title} preview ${index + 1}`}
              loading="lazy"
              className="h-[220px] w-full rounded-[22px] border border-white/10 object-cover max-md:h-[170px]"
            />
          ))}
        </div>

        <div className="pt-6">
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-black text-[#b8bdd0]">
            {project.tag}
          </span>

          <h3
            id="project-modal-title"
            className="mt-4 text-4xl font-black text-white max-md:text-3xl"
          >
            {project.title}
          </h3>

          <p className="mt-4 text-lg leading-[1.9] text-[#a9adbd] max-md:text-base">
            {project.text}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className={`rounded-full border px-3 py-1 text-xs font-bold ${getTechClass(
                  tech
                )}`}
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#2f8cff] to-[#b041ff] py-4 font-black text-white transition hover:-translate-y-1"
          >
            إغلاق التفاصيل
          </button>
        </div>
      </div>
    </div>
  );
}

function getTechClass(tech) {
  if (tech === "React") return "border-cyan-400/30 bg-cyan-400/10 text-cyan-300";
  if (tech === "Tailwind") return "border-sky-400/30 bg-sky-400/10 text-sky-300";
  if (tech.includes("API")) return "border-green-400/30 bg-green-400/10 text-green-300";
  if (tech === "Laravel") return "border-red-400/30 bg-red-400/10 text-red-300";
  if (tech === "JavaScript") return "border-yellow-400/30 bg-yellow-400/10 text-yellow-300";
  if (tech === "LocalStorage") return "border-purple-400/30 bg-purple-400/10 text-purple-300";

  return "border-white/10 bg-white/5 text-[#b8bdd0]";
}