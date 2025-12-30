import Script from 'next/script';
import { marketingCampaigns } from '@/lib/constants';

export function PortfolioStructuredData() {
    const portfolioData = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: marketingCampaigns.map((campaign, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
                '@type': 'CreativeWork',
                name: campaign.title,
                description: campaign.description,
                image: campaign.image || campaign.video,
                creator: {
                    '@type': 'Person',
                    name: 'Kanishk Trikha'
                },
                ...(campaign.client && {
                    sponsor: {
                        '@type': 'Organization',
                        name: campaign.client
                    }
                }),
                ...(campaign.duration && {
                    temporalCoverage: campaign.duration
                }),
                keywords: campaign.category
            }
        }))
    };

    return (
        <Script
            id="portfolio-structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioData) }}
            strategy="afterInteractive"
        />
    );
}
