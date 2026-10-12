import type { BlogPost } from "./types";
import { posts as fotografosPosts } from "./fotografos";
import { posts as maestrosPosts } from "./maestros";
import { posts as gimnasiosPosts } from "./gimnasios";
import { posts as arquitecturaPosts } from "./arquitectura";

export const posts: BlogPost[] = [
  ...fotografosPosts,
  ...maestrosPosts,
  ...gimnasiosPosts,
  ...arquitecturaPosts,
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPost(category: string, slug: string): BlogPost | undefined {
  return posts.find((post) => post.category === category && post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return posts.filter((post) => post.category === category);
}

export { categories, getCategory } from "./categories";
export type { BlogPost, BlogCategory } from "./types";
