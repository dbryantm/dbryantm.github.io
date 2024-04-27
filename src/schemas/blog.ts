import { z } from 'astro:content'

export interface Blog {
  id: string
  slug: string
  data: z.infer<typeof blogSchema>
}

export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  tags: z.array(z.string()),
  image: z.string().optional(),
})
