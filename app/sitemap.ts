import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date();

    return [
        {
            url: 'https://theviriditas.com/',
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://theviriditas.com/terms-conditions',
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://theviriditas.com/about',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://theviriditas.com/ideas/',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://theviriditas.com/projects/',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://theviriditas.com/plants/',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://theviriditas.com/planters/',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://theviriditas.com/services/',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://theviriditas.com/services/residential',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://theviriditas.com/services/commercial',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://theviriditas.com/team',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://theviriditas.com/events',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://theviriditas.com/events/[slugs]',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        }
    ]
}
