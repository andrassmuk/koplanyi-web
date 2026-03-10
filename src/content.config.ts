import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const szolgaltatasok = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/szolgaltatasok' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    order: z.number(),
    prices: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })),
  }),
});

const szobak = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/szobak' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    size: z.string(),
    order: z.number(),
    images: z.array(z.string()).optional(),
    prices: z.object({
      hourly: z.string(),
      daily: z.string(),
      monthly: z.string(),
    }),
    equipment: z.array(z.string()),
  }),
});

const csapat = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/csapat' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    initials: z.string(),
    order: z.number(),
    specialties: z.array(z.string()),
  }),
});

export const collections = { szolgaltatasok, szobak, csapat };
