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
  cover: z.object({
    src: z.string(),
    alt: z.string(),
  }).optional(),
});

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: commonSchema,
});

const poetry = defineCollection({
  loader: glob({ base: './src/content/poetry', pattern: '**/*.{md,mdx}' }),
  schema: commonSchema.extend({
    poetryType: z.enum(['free', 'classical']),
    meter: z.string().trim().min(1).optional(),
    titleNote: z.string().trim().min(1).optional(),
    showCoverOnPage: z.boolean().default(true),
  }).superRefine((poem, context) => {
    if (poem.poetryType === 'classical' && !poem.meter) {
      context.addIssue({
        code: 'custom',
        path: ['meter'],
        message: 'Classical poetry requires a meter.',
      });
    }
  }),
});

export const collections = { articles, poetry };
