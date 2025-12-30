"use client";

export function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Kanishk Trikha",
        "jobTitle": "Marketing & Commerce Professional",
        "url": "https://kanishktrikha.vercel.app",
        "image": "https://kanishktrikha.vercel.app/profile.jpeg",
        "sameAs": [
            "https://www.instagram.com/_bjkjff235__k",
            "https://www.linkedin.com/in/kanishk-trikha"
        ],
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "Delhi NCR",
            "addressLocality": "Gurugram",
            "addressCountry": "IN"
        },
        "knowsAbout": [
            "Marketing",
            "Commerce",
            "Strategic Communication",
            "Content Creation",
            "Market Research",
            "Data Analysis",
            "Project Management",
            "Event Coordination",
            "Social Media Marketing",
            "Video Editing"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
