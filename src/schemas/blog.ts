import { z } from 'astro:content'

export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: z.array(z.string()),
  image: z.string().optional(),
})

export type Blog = {
  id: string
  slug: string
  data: z.infer<typeof blogSchema>
}
