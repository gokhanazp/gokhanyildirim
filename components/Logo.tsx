import Link from "next/link";
import Image from "next/image";

/**
 * Logo işareti + "yıldırım.dev" wordmark.
 * İşaret, yazı boyutuna orantılı ölçeklenir.
 * İşaret dosyası: public/logo-mark-dark.svg (kendi logonla değiştir).
 */
export default function Logo({
  size = 25,
  href = "/",
}: {
  size?: number;
  href?: string;
}) {
  const mark = Math.round(size * 1.5);

  return (
    <Link
      href={href}
      aria-label="yıldırım.dev — ana sayfa"
      className="flex items-center gap-3"
    >
      <Image
        src="/logo-mark-dark.svg"
        alt=""
        width={mark}
        height={mark}
        style={{ width: `${mark}px`, height: `${mark}px` }}
        priority
        unoptimized
      />
      <span
        className="font-sora font-bold leading-none tracking-tight"
        style={{ fontSize: `${size}px` }}
      >
        yıldırım
        <span className="font-normal text-neutral-500">.dev</span>
      </span>
    </Link>
  );
}
