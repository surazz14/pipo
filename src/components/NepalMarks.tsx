import { site } from "@/config/site";

export function Nepal({
  children = "Nepal",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`nepal-word ${className}`.trim()}>{children}</span>
  );
}

export function NepalFlag({ className = "h-10 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 75 90"
      className={className}
      aria-label={`${site.shortName} Nepal flag`}
      role="img"
    >
      <path
        d="M4 4 L71 42 L28 42 L71 86 L4 86 Z"
        fill="#003893"
      />
      <path
        d="M8 8 L60 40 L24 40 L62 82 L8 82 Z"
        fill="#c8102e"
      />
      <circle cx="24" cy="24" r="6" fill="#fffdf8" />
      <path
        d="M18 64 l6-8 6 8-6 3z M16 68 h16 M20 72 h8"
        fill="#fffdf8"
      />
    </svg>
  );
}

export function PrayerFlags({ className = "" }: { className?: string }) {
  const colours = [
    "var(--flag-blue)",
    "var(--flag-white)",
    "var(--flag-red)",
    "var(--flag-green)",
    "var(--flag-yellow)",
  ];

  return (
    <div
      className={`prayer-flags ${className}`.trim()}
      aria-hidden="true"
    >
      {Array.from({ length: 24 }, (_, i) => (
        <span
          key={i}
          style={{ background: colours[i % colours.length] }}
        />
      ))}
    </div>
  );
}

export function MountainRule({ light = false }: { light?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      className={`block w-full ${light ? "text-pipo-cream" : "text-pipo-navy"}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0 80 L0 48 L120 20 L240 44 L380 8 L520 40 L680 4 L840 36 L980 12 L1120 42 L1280 18 L1440 40 L1440 80 Z"
      />
    </svg>
  );
}
