import type { CollectionEntry } from 'astro:content';

export type PostEntry = CollectionEntry<'posts'>;

export function sortPublishedPosts(posts: PostEntry[]) {
  return posts
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function getReadingTime(body?: string) {
  const words = body?.trim().split(/\s+/).filter(Boolean).length ?? 0;
  return Math.max(1, Math.ceil(words / 180));
}

export function formatPostDate(
  date: Date,
  format: 'long' | 'medium' | 'short' | 'year' = 'long',
) {
  const optionsByFormat: Record<
    'long' | 'medium' | 'short' | 'year',
    Intl.DateTimeFormatOptions
  > = {
    long: { year: 'numeric', month: 'long', day: 'numeric' },
    medium: { year: 'numeric', month: 'short', day: 'numeric' },
    short: { month: 'short', day: 'numeric' },
    year: { year: 'numeric' },
  };

  return date.toLocaleDateString('en-US', optionsByFormat[format]);
}

export function groupPostsByYear(posts: PostEntry[]) {
  return posts.reduce((acc, post) => {
    const year = post.data.date.getFullYear();

    if (!acc[year]) {
      acc[year] = [];
    }

    acc[year].push(post);
    return acc;
  }, {} as Record<number, PostEntry[]>);
}

export function getTagCounts(posts: PostEntry[]) {
  return posts.reduce((acc, post) => {
    post.data.tags.forEach((tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
    });

    return acc;
  }, {} as Record<string, number>);
}
