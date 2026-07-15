import { site } from "@/lib/site";

function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V21h-4V9Z" />
    </svg>
  );
}

const base =
  "flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent hover:shadow-[0_0_20px_-6px_rgba(53,208,127,0.7)]";

export default function SocialIcons({
  size = 36,
  iconSize = 17,
  className = "",
}: {
  size?: number;
  iconSize?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={site.social.instagram}
        target="_blank"
        rel="noopener"
        aria-label="Instagram"
        title="Instagram"
        className={base}
        style={{ width: size, height: size }}
      >
        <InstagramIcon size={iconSize} />
      </a>
      <a
        href={site.social.linkedin}
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
        title="LinkedIn"
        className={base}
        style={{ width: size, height: size }}
      >
        <LinkedInIcon size={iconSize} />
      </a>
    </div>
  );
}
