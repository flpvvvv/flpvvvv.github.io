import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    author: z.string().default('flpvvvv'),
    tags: z.array(z.string()).default([]),
    toc: z.boolean().default(true),
    pinned: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };