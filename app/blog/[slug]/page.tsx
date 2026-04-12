import { blogPosts } from "@/lib/blog";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return buildPageMetadata({
    title: post.title,
    description: post.summary,
    path: `/blog/${slug}/`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main id="main-content" className="flex-1">
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Insights</p>
        <h1 className="mt-3 font-[family-name:var(--font-playfair)] text-4xl font-semibold">{post.title}</h1>
        <p className="mt-4 text-lg text-muted">{post.summary}</p>
        <p className="mt-10 text-muted leading-relaxed">
          Add long-form content in this route when you are ready. The structure supports static generation from{" "}
          <span className="font-mono text-sm text-foreground">lib/blog.ts</span>.
        </p>
      </article>
    </main>
  );
}
