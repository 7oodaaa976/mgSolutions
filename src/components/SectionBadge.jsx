export default function SectionBadge({ text }) {
  return (
    <div className="mb-4 inline-flex flex-col items-center">
      <span className="text-lg font-black tracking-[3px] text-[#2f8cff] uppercase">
        {text}
      </span>

      <div className="relative mt-3 h-[3px] w-[120px] overflow-hidden rounded-full bg-white/10">
        <span className="absolute left-[-40%] top-0 h-full w-[40%] animate-[lineMove_2.5s_linear_infinite] rounded-full bg-gradient-to-r from-transparent via-[#b041ff] to-[#2f8cff] shadow-[0_0_15px_#b041ff]"></span>
      </div>
    </div>
  );
}