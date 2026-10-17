// Značka z předchozí verze webu: tmavý zaoblený čtverec s kurzívním „k“.
export function Plate({ className = "size-9", tone = "ink" }: { className?: string; tone?: "ink" | "coral" }) {
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-2xl font-display text-lg italic ${
        tone === "ink" ? "bg-ink text-paper" : "bg-signal text-white"
      } ${className}`}
    >
      <span className="-translate-y-px">k</span>
    </span>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <Plate />
      <span className="font-display text-[18px] leading-none tracking-tight">
        Autoškola <span className="accent">Katka</span>
      </span>
    </span>
  );
}
