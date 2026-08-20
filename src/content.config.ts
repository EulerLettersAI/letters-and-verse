import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const commonSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: z.coerce.date(),
  author: z.string().default('Samer El Kababji'),
  language: z.enum(['ar', 'en']).default('ar'),
  draft: z.boolean().default(false),
});

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: commonSchema,
});

const poetry = defineCollection({
  loader: glob({ base: './src/content/poetry', pattern: '**/*.{md,mdx}' }),
  schema: commonSchema.extend({
    form: z.string().optional(),
  }),
});

export const collections = { articles, poetry };
