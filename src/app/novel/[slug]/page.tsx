import { notFound } from "next/navigation";
import { novels, getNovelBySlug, CATEGORY_COLORS } from "@/lib/novels";
import { ReaderHeader } from "@/components/ReaderHeader";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return novels.map((novel) => ({ slug: novel.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const novel = getNovelBySlug(slug);
  if (!novel) return { title: "Not Found" };
  return {
    title: `${novel.title} — 物語の泉`,
    description: novel.description,
  };
}

export default async function NovelPage({ params }: PageProps) {
  const { slug } = await params;
  const novel = getNovelBySlug(slug);
  if (!novel) notFound();

  return (
    <main className="min-h-screen">
      <ReaderHeader title={novel.title} />

      {/* Reader content */}
      <article className="mx-auto max-w-[680px] px-8 pt-16 pb-32">
        <span
          className={`mb-6 inline-block border px-3 py-1 text-[0.7rem] tracking-[0.2em] uppercase ${CATEGORY_COLORS[novel.category]}`}
        >
          {novel.categoryLabel}
        </span>

        <h1 className="font-serif text-[clamp(1.8rem,4vw,2.5rem)] font-bold leading-[1.5] tracking-wide">
          {novel.title}
        </h1>

        <div className="mt-4 text-sm tracking-wider text-ink-faint">
          {novel.author}
        </div>
        <div className="mt-2 mb-12 border-b border-border pb-12 text-xs text-ink-faint">
          {novel.date} &middot; {novel.readingTime}
        </div>

        <div
          className="novel-body font-serif text-[1.05rem] leading-[2.2] tracking-wide text-ink [&_p]:mb-7 [&_p]:indent-4 [&_p:first-child]:indent-0 [&_.scene-break]:my-12 [&_.scene-break]:text-center [&_.scene-break]:text-xl [&_.scene-break]:tracking-[1em] [&_.scene-break]:text-ink-faint [&_.scene-break]:indent-0"
          dangerouslySetInnerHTML={{ __html: novel.body }}
        />
      </article>
    </main>
  );
}
