import SectionBadge from "./SectionBadge";
import useReveal from "../hooks/useReveal";
import { useLanguage } from "../context/LanguageContext";

export default function Services() {
  const { dir, t } = useLanguage();
  const servicesData = t.services;
  const services = servicesData.items;

  useReveal(".service-reveal");

  const innerServices = services.slice(0, 4);
  const outerServices = services.slice(4);

  return (
    <section
      id="services"
      dir={dir}
      className="
        service-reveal relative z-10 mx-auto my-24 w-[calc(100%-120px)]
        overflow-hidden rounded-[42px] border border-white/10
        bg-[radial-gradient(circle_at_center,rgba(123,92,255,.20),transparent_35%),linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02))]
        px-8 py-20 backdrop-blur-xl
        max-xl:w-[calc(100%-40px)]
        max-md:my-16 max-md:w-[calc(100%-24px)] max-md:px-4 max-md:py-14
      "
    >
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:70px_70px]" />
        <div className="absolute left-1/2 top-[58%] h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-[58%] h-[940px] w-[940px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
      </div>

      <div className="relative mx-auto mb-20 max-w-3xl text-center">
        <SectionBadge text={servicesData.badge} />

        <h2 className="mb-5 text-[clamp(34px,4vw,62px)] font-black leading-tight text-white">
          {servicesData.title}
        </h2>

        <p className="text-xl leading-9 text-[#a9adbd] max-md:text-base">
          {servicesData.desc}
        </p>
      </div>

      <div className="relative mx-auto h-[1050px] max-w-6xl max-md:h-auto">
        <div
          className="
            absolute left-1/2 top-1/2 z-50 grid size-44
            -translate-x-1/2 -translate-y-1/2 place-items-center
            rounded-full border border-white/20 bg-[#090b18]/95
            shadow-[0_0_100px_rgba(123,92,255,.55)]
            max-md:relative max-md:left-auto max-md:top-auto
            max-md:mx-auto max-md:mb-8 max-md:translate-x-0 max-md:translate-y-0
          "
        >
          <div className="absolute -inset-3.5 rounded-full border border-[#7b5cff]/40" />

          <div className="text-center">
            <h3 className="text-4xl font-black text-white">
              {servicesData.centerTitle}
            </h3>

            <p className="mt-1 text-xs font-bold uppercase tracking-[.35em] text-[#a9adbd]">
              {servicesData.centerSub}
            </p>
          </div>
        </div>

        <div className="hidden max-md:grid max-md:grid-cols-1 max-md:gap-4">
          {services.map((service) => (
            <ServiceNode
              key={service.title}
              service={service}
              soonLabel={servicesData.soon}
              mobile
            />
          ))}
        </div>

        <div className="max-md:hidden">
          {innerServices.map((service, index) => (
            <div
              key={service.title}
              className="orbit-node orbit-inner"
              style={{ "--angle": `${index * 90}deg` }}
            >
              <ServiceNode
                service={service}
                soonLabel={servicesData.soon}
                small
              />
            </div>
          ))}

          {outerServices.map((service, index) => (
            <div
              key={service.title}
              className="orbit-node orbit-outer"
              style={{ "--angle": `${index * 90 + 45}deg` }}
            >
              <ServiceNode
                service={service}
                soonLabel={servicesData.soon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceNode({ service, mobile, small, soonLabel }) {
  return (
    <article
      className={`
        group relative rounded-[26px] border border-white/10
        bg-[linear-gradient(145deg,rgba(255,255,255,.10),rgba(255,255,255,.025))]
        p-px transition duration-500
        hover:-translate-y-2 hover:border-[#7b5cff]/70
        hover:shadow-[0_0_60px_rgba(123,92,255,.25)]
        ${mobile ? "w-full" : small ? "w-52" : "w-56"}
        ${service.soon ? "opacity-75" : ""}
      `}
    >
      <div className="relative min-h-44 overflow-hidden rounded-[25px] bg-[#080a16]/90 p-5">
        <div className="absolute -right-9 -top-9 h-24 w-24 rounded-full bg-[#4DA3FF]/20 blur-2xl transition group-hover:bg-[#FF4FD8]/25" />

        {service.soon && (
          <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-[#7B5CFF] to-[#FF4FD8] px-3 py-1 text-[10px] font-black text-white">
            {soonLabel}
          </span>
        )}

        <div className="mb-4 grid size-14 place-items-center rounded-2xl border border-white/10 bg-white/10 text-3xl transition group-hover:scale-110">
          {service.icon}
        </div>

        <h3 className="mb-3 text-lg font-black text-white">{service.title}</h3>

        <p className="text-sm leading-7 text-[#a9adbd]">{service.text}</p>

        <span className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#4DA3FF] via-[#7B5CFF] to-[#FF4FD8] transition-all duration-500 group-hover:w-full" />
      </div>
    </article>
  );
}