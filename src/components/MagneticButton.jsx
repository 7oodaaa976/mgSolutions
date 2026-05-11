import { useRef } from "react";

export default function MagneticButton({
  href,
  children,
  className = "",
  target,
  onClick,
  type = "link",
}) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;

    el.style.transform = "translate(0, 0)";
  }

  const base =
    "magnetic inline-flex items-center justify-center transition-transform duration-200 will-change-transform";

  if (type === "button") {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`${base} ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`${base} ${className}`}
    >
      {children}
    </a>
  );
}