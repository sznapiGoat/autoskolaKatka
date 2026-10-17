// Značka: modrá výcviková L-tabulka z dveří auta. Bílé L je vystřižené z plochy,
// proto je to path, ne písmeno ve fontu.
export function Plate({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="5" className="fill-sign" />
      <rect x="2.5" y="2.5" width="35" height="35" rx="3" fill="none" stroke="#fff" strokeWidth="1.5" />
      <path d="M13 9h6v16.5h10V31H13z" fill="#fff" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <Plate />
      <span className="font-display text-[19px] leading-none font-extrabold tracking-tight">
        Autoškola Katka
      </span>
    </span>
  );
}
