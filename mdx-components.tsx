import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * @next/mdx App Router için gerekli. MDX içeriğinin sitenin koyu temasına
 * uygun tipografiyle render edilmesini sağlar.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2
        className="mt-12 mb-4 font-sora text-[26px] font-bold tracking-[-0.02em] text-ink"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mt-8 mb-3 font-sora text-[20px] font-semibold tracking-[-0.01em] text-ink"
        {...props}
      />
    ),
    p: (props) => (
      <p className="my-4 text-[16.5px] leading-[1.8] text-muted" {...props} />
    ),
    ul: (props) => (
      <ul
        className="my-4 flex list-disc flex-col gap-2 pl-6 text-[16.5px] leading-[1.8] text-muted marker:text-accent"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="my-4 flex list-decimal flex-col gap-2 pl-6 text-[16.5px] leading-[1.8] text-muted marker:text-accent"
        {...props}
      />
    ),
    li: (props) => <li className="pl-1" {...props} />,
    a: ({ href = "#", ...props }) => (
      <Link
        href={href}
        className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
        {...props}
      />
    ),
    strong: (props) => (
      <strong className="font-semibold text-ink" {...props} />
    ),
    blockquote: (props) => (
      <blockquote
        className="my-6 rounded-r-xl border-l-2 border-accent bg-white/[0.03] py-3 pl-5 pr-4 text-[16px] italic text-chip"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[14px] text-accent"
        {...props}
      />
    ),
    hr: () => <hr className="my-10 gy-divider border-0" />,
    ...components,
  };
}
