import { defineCollection, z } from 'astro:content';

// Define el esquema para la colección de blog
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

// Exporta las colecciones
export const collections = {
  'blog': blogCollection,
};