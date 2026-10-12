import { MetadataRoute } from 'next'
import { posts, categories } from '@/content/blog'
import { services } from '@/content/services'

const lastModified = new Date('2026-10-11')

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls: MetadataRoute.Sitemap = services
    .filter((service) => service.href)
    .map((service) => ({
      url: `https://huellaonline.com${service.href}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    }))

  const categoryUrls: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `https://huellaonline.com/blog/${category.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://huellaonline.com/blog/${post.category}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [
    {
      url: 'https://huellaonline.com',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://huellaonline.com/servicios',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://huellaonline.com/blog',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...serviceUrls,
    ...categoryUrls,
    ...postUrls,
  ]
}
