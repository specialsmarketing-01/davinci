export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
};

/** Add posts here to generate `/blog/[slug]/` routes at build time. */
export const blogPosts: BlogPost[] = [];
