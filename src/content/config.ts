import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      cover: image().refine((img) => img.width >= 600, {
        message: "カバー画像は幅600ピクセル以上でなければなりません",
      }),
      tags: z.array(z.string()),
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
