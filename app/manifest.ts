import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Viriditas',
        short_name: 'Viriditas',
        description: 'Viriditas is a plant-based, eco-friendly, sustainable, home and garden interior design company.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        scope: '/',
        orientation: 'portrait',
        lang: 'en-US',
        dir: 'ltr',
        icons: [
            {
                src: '/icons/icon-72x72.png',
                sizes: '72x72',
                type: 'image/png',
            },
            {
                src: '/icons/icon-96x96.png',
                sizes: '96x96',
                type: 'image/png',
            },
            {
                src: '/icons/icon-128x128.png',
                sizes: '128x128',
                type: 'image/png',
            },
            {
                src: '/icons/icon-144x144.png',
                sizes: '144x144',
                type: 'image/png',
            },
            {
                src: '/icons/icon-152x152.png',
                sizes: '152x152',
                type: 'image/png',
            },
            {
                src: '/icons/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icons/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
        screenshots: [
            {
                src: '/screenshots/screenshot_1.png',
                sizes: '720x1419',
                type: 'image/png',
            },
            {
                src: '/screenshots/screenshot_2.png',
                sizes: '720x1419',
                type: 'image/png',
            },
            {
                src: '/screenshots/screenshot_3.png',
                sizes: '720x1419',
                type: 'image/png',
            },
        ],
    }
}