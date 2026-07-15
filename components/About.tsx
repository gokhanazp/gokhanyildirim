import Image from "next/image";
import { Eyebrow } from "./ui";

const badges = [
  "Senior Frontend Developer",
  "Shopify Partner",
  "E-ticaret Danışmanı",
];

export default function About() {
  return (
    <section
      id="hakkimda"
      className="relative mx-auto max-w-[1200px] overflow-clip px-8 py-[120px]"
    >
      <div
        className="gy-glow left-[-4%] top-[20%] h-[360px] w-[360px] bg-[radial-gradient(circle,rgba(53,208,127,0.09),transparent_65%)]"
        aria-hidden
      />
      <div className="relative z-10 grid items-center gap-8 md:grid-cols-[380px_1fr] md:gap-[72px]">
        <div data-reveal className="relative">
          <div
            className="pointer-events-none absolute inset-[-1px] z-10 rounded-[24px] bg-[linear-gradient(140deg,rgba(53,208,127,0.4),transparent_40%,transparent_60%,rgba(53,208,127,0.15))]"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[24px] bg-[#101214]">
            <Image
              src="/gokhan-yildirim.jpeg"
              alt="Gökhan Yıldırım portresi"
              width={380}
              height={460}
              priority
              sizes="(max-width: 768px) 100vw, 380px"
              className="block h-[460px] w-full object-cover"
            />
          </div>
        </div>

        <div data-reveal className="flex flex-col gap-6">
          <Eyebrow>HAKKIMDA</Eyebrow>
          <h2 className="m-0 font-sora text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.15] tracking-[-0.03em] text-balance">
            Tasarımcı gözüyle bakan, ticareti bilen bir geliştirici.
          </h2>
          <span className="gy-underline" />
          <p className="m-0 text-[16.5px] leading-[1.75] text-muted text-pretty">
            Kariyerime 2011&apos;de UI tasarımcısı olarak başladım; tasarım
            ekibi liderliğinden frontend geliştirmeye, oradan da e-ticaret
            yönetimine uzanan bir yol izledim. Ayakkabıdan mücevhere, yapı
            sektöründen oyun teknolojilerine kadar farklı sektörlerde mağazalar
            yönettim ve geliştirdim.
          </p>
          <p className="m-0 text-[16.5px] leading-[1.75] text-muted text-pretty">
            Bu birleşim bana nadir bir avantaj sağlıyor: yazdığım her satır
            kodun ciroya, dönüşüm oranına ve müşteri deneyimine etkisini
            biliyorum. Bugün Azerion&apos;da Senior Frontend Developer olarak
            çalışıyor, aynı zamanda seçili markalara Shopify ve e-ticaret
            danışmanlığı veriyorum.
          </p>
          <div className="flex flex-wrap gap-3">
            {badges.map((b) => (
              <div
                key={b}
                className="rounded-full border border-white/10 px-[18px] py-2 text-[13.5px] font-semibold text-chip"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
