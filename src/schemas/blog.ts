import { z } from "astro:content"

export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  tags: z.array(z.string()),
  image: z.string().optional(),
})

export type Blog = z.infer<typeof blogSchema>
