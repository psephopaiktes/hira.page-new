import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

// const works = defineCollection({
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//   }),
// });

export const collections = { blog };
// export const collections = { blog, works };
