import { Instagram, Mail, Linkedin, FileText, Twitter } from "lucide-react";

// Social links configuration
export const socialLinks = [
    {
        Icon: Mail,
        href: "mailto:Trikhakanishk@gmail.com",
        label: "Email",
        delay: 0.1,
    },
    {
        Icon: Instagram,
        href: "https://www.instagram.com/_bjkjff235__k",
        label: "Instagram",
        delay: 0.2,
    },
    {
        Icon: Linkedin,
        href: "https://www.linkedin.com/in/yourusername",
        label: "LinkedIn",
        delay: 0.3,
    },
];

// Education data
export const educationData = [
    {
        degree: "Bachelor of Commerce (Hons) with Minor in Economics",
        institution: "Ram Lal Anand College, University of Delhi",
        location: "Delhi, India",
        duration: "2022 - 2025",
    },
    {
        degree: "High School",
        institution: "Delhi Public School",
        location: "Delhi, India",
        duration: "2009 - 2022",
    },
];

// Experience data
interface ExperienceItem {
    icon: string;
    title: string;
    company: string;
    duration: string;
    location?: string;
    responsibilities: string[];
}

export const experienceData: ExperienceItem[] = [
    {
        icon: "location",
        title: "Marketing & HR Enthusiast",
        company: "Student Leadership & Internships",
        duration: "Present",
        location: "Delhi, India",
        responsibilities: [
            "Completed internships in Marketing and Data Management, strengthening analytical thinking and content creation abilities",
            "Led marketing initiatives and managed teams across student societies including Placement Cell and English Debating Society",
            "Designed and executed marketing campaigns, balancing creativity with strategic execution"
        ],
    },
    {
        icon: "clock",
        title: "Student Leader",
        company: "Ram Lal Anand College Societies",
        duration: "2022 - 2025",
        responsibilities: [
            "Headed Pathway - The Career Counselling and Placement Cell",
            "Active member of Awaaz - The English Debating Society",
            "Organized events, managed teams, and developed strategic communication skills",
        ],
    },
];

// Achievements data
export const achievementsData = [
    {
        emoji: "👥",
        title: "Head of Placement Cell",
        description:
            "Led Pathway - The Career Counselling and Placement Cell, organizing career guidance sessions and placement drives for students.",
    },
    {
        emoji: "🎤",
        title: "English Debating Society Member",
        description:
            "Active member of Awaaz - The English Debating Society, developing public speaking and critical thinking skills.",
    },
    {
        emoji: "📜",
        title: "B.Com (Hons) with Minor in Economics",
        description:
            "Completed undergraduate degree with First Division from Ram Lal Anand College, University of Delhi.",
    },
    {
        emoji: "�",
        title: "Marketing & Data Management Internships",
        description:
            "Gained hands-on experience in Marketing and Data Management through multiple internships, strengthening analytical and creative skills.",
    },
];

// Export detailed experience and achievements
export { detailedExperience, detailedAchievements } from './experience';

// Gallery items for portfolio
export const galleryItems = [
    {
        title: "Agora 2024 Event Poster",
        image: "/images/Agora_Final posts Grid.webp",
        category: "Event Design",
        description: "Event poster design for Agora 2024"
    },
    {
        title: "Raaye GD Event Poster",
        image: "/images/Raaye GD Event _24 Poster.webp",
        category: "Event Design",
        description: "Graphic design event poster"
    },
    {
        title: "Diwali Campaign",
        image: "/images/Diwali Standee 3 (1).webp",
        category: "Marketing Campaign",
        description: "Diwali festival marketing standee"
    },
    {
        title: "Diwali Recap Grid",
        image: "/images/Diwali recap grid cover kanishk (1).webp",
        category: "Social Media",
        description: "Diwali event recap social media grid"
    },
    {
        title: "Budapest Recap",
        image: "/images/budapest recap grid kanishk.webp",
        category: "Social Media",
        description: "Budapest trip recap grid design"
    },
    {
        title: "AW Europe Post 2025",
        image: "/images/AW Europe Post - 2025 kanishk.webp",
        category: "Social Media",
        description: "Europe awareness post for 2025"
    },
    {
        title: "Hiring Campaign",
        image: "/images/Hiring post kanishk carousel (1).webp",
        category: "Marketing Campaign",
        description: "Hiring recruitment carousel design"
    },
    {
        title: "Agora Poster",
        image: "/images/Copy of Agora2024__Poster.webp",
        category: "Event Design",
        description: "Alternative Agora 2024 poster"
    },
    {
        title: "Halloween Carousel - Slide 1",
        image: "/images/1.webp",
        category: "Social Media",
        description: "Halloween themed carousel post"
    },
    {
        title: "Halloween Carousel - Slide 2",
        image: "/images/2.webp",
        category: "Social Media",
        description: "Halloween themed carousel post"
    },
    {
        title: "Halloween Carousel - Slide 3",
        image: "/images/3.webp",
        category: "Social Media",
        description: "Halloween themed carousel post"
    },
    {
        title: "Halloween Carousel - Slide 4",
        image: "/images/4.webp",
        category: "Social Media",
        description: "Halloween themed carousel post"
    },
    {
        title: "Halloween Carousel - Slide 5",
        image: "/images/5.webp",
        category: "Social Media",
        description: "Halloween themed carousel post"
    },
    {
        title: "Halloween Carousel - Slide 6",
        image: "/images/6.webp",
        category: "Social Media",
        description: "Halloween themed carousel post"
    },
    {
        title: "Marketing Design",
        image: "/images/ADYA V MINAXI.webp",
        category: "Design Work",
        description: "Professional marketing design"
    },
];


// Marketing Campaigns & Projects
export const marketingCampaigns = [
    {
        title: "Diwali Celebration Video",
        category: "Social Media Video",
        video: "/videos/diwali-celebration.mp4",
        client: "Social Media Campaign",
        objective: "Engage audience with festive Diwali content",
        strategy: "Fun, relatable workplace humor during Diwali celebrations",
        description: "Viral Diwali social media video showcasing workplace culture and festive celebrations with trending audio.",
        metrics: {
            reach: "25,000+",
            engagement: "5,000+ interactions",
            shares: "800+ shares",
            views: "20,000+ views"
        },
        tools: ["CapCut", "Instagram Reels", "Canva"],
        duration: "November 2024",
        role: "Video Creator & Editor",
        learnings: "Short-form video content drives 5x more engagement than static posts"
    },
    {
        title: "Valentine's Day Campaign",
        category: "Social Media Video",
        video: "/videos/valentines-day.mp4",
        client: "Social Media Campaign",
        objective: "Create engaging Valentine's Day content",
        strategy: "Emotional storytelling with trending audio and visuals",
        description: "Valentine's Day video campaign focusing on modern relationships and thoughtful gestures.",
        metrics: {
            reach: "18,000+",
            engagement: "3,500+ interactions",
            saves: "600+ saves",
            views: "15,000+ views"
        },
        tools: ["CapCut", "Instagram Reels", "Adobe Premiere"],
        duration: "February 2024",
        role: "Content Creator",
        learnings: "Emotional content resonates strongly with target audience"
    },
    {
        title: "Workplace Culture Showcase",
        category: "Social Media Video",
        video: "/videos/workplace-culture.mp4",
        client: "Brand Content",
        objective: "Showcase authentic workplace culture",
        strategy: "Trending format with behind-the-scenes content",
        description: "Day-in-the-life video showcasing workplace culture using trending thin frame format.",
        metrics: {
            reach: "12,000+",
            engagement: "2,200+ interactions",
            followers: "+180 new followers",
            views: "10,000+ views"
        },
        tools: ["CapCut", "Instagram Reels"],
        duration: "December 2024",
        role: "Video Producer",
        learnings: "Trending formats boost discoverability and reach"
    },
    {
        title: "Event Highlight Reel",
        category: "Event Video",
        video: "/videos/event-highlight.mp4",
        client: "College Event",
        objective: "Create engaging event recap video",
        strategy: "Dynamic editing with music and highlights",
        description: "Professional event highlight reel showcasing key moments and atmosphere.",
        metrics: {
            reach: "8,000+",
            engagement: "1,500+ interactions",
            shares: "300+ shares",
            views: "7,000+ views"
        },
        tools: ["Final Cut Pro", "Adobe Premiere", "DaVinci Resolve"],
        duration: "October 2024",
        role: "Video Editor",
        learnings: "High-quality production increases perceived event value"
    },
    {
        title: "Agora 2024 Event Campaign",
        category: "Event Marketing",
        image: "/images/Agora_Final posts Grid.webp",
        client: "College Business Event",
        objective: "Increase student participation in flagship business event",
        strategy: "Multi-channel social media campaign with engaging visual content",
        description: "Comprehensive marketing campaign for Agora 2024, the college's premier business event, utilizing social media, email marketing, and on-campus promotions.",
        metrics: {
            reach: "15,000+",
            engagement: "2,500+ interactions",
            conversions: "500+ registrations",
            growth: "300% increase vs. previous year"
        },
        tools: ["Canva", "Instagram Business", "Adobe Photoshop", "Google Forms"],
        duration: "August - October 2024",
        role: "Marketing Lead",
        learnings: "Multi-channel approach significantly improved reach and engagement"
    },
    {
        title: "Raaye GD Event Promotion",
        category: "Event Marketing",
        image: "/images/Raaye GD Event _24 Poster.webp",
        client: "College Society Event",
        objective: "Promote group discussion event and drive registrations",
        strategy: "Eye-catching poster design with clear event details and benefits",
        description: "Created promotional materials for Raaye Group Discussion event, focusing on visual appeal and clear communication of event value.",
        metrics: {
            reach: "8,000+",
            engagement: "1,200+ interactions",
            conversions: "200+ registrations",
            growth: "150% increase in participation"
        },
        tools: ["Adobe Photoshop", "Canva", "Instagram"],
        duration: "September 2024",
        role: "Design & Marketing",
        learnings: "Strong visual design drives higher engagement rates"
    },
    {
        title: "Diwali Festival Campaign",
        category: "Social Media Marketing",
        image: "/images/Diwali Standee 3 (1).webp",
        client: "College Community",
        objective: "Create festive engagement and promote college events",
        strategy: "Festive-themed standee and social media content series",
        description: "Developed comprehensive Diwali campaign including standees, social posts, and digital greetings to engage college community.",
        metrics: {
            reach: "12,000+",
            engagement: "3,000+ interactions",
            shares: "500+ shares",
            sentiment: "95% positive feedback"
        },
        tools: ["Canva", "Adobe Illustrator", "Instagram", "WhatsApp Business"],
        duration: "October - November 2024",
        role: "Creative Director",
        learnings: "Cultural campaigns generate high emotional engagement"
    },
    {
        title: "Halloween Social Media Series",
        category: "Content Marketing",
        image: "/images/1.webp",
        client: "Social Media Campaign",
        objective: "Increase social media engagement with themed content",
        strategy: "6-part carousel series with creative Halloween-themed designs",
        description: "Created engaging Halloween carousel series for Instagram, combining creativity with strategic messaging to boost follower engagement.",
        metrics: {
            reach: "10,000+",
            engagement: "2,000+ interactions",
            followers: "+250 new followers",
            saveRate: "15% save rate"
        },
        tools: ["Canva", "Adobe Photoshop", "Instagram Insights"],
        duration: "October 2024",
        role: "Content Creator",
        learnings: "Carousel posts drive 3x more engagement than single images"
    },
    {
        title: "Budapest Recap Campaign",
        category: "Travel Content Marketing",
        image: "/images/budapest recap grid kanishk.webp",
        client: "Personal Brand",
        objective: "Showcase travel content and build personal brand",
        strategy: "Grid-style recap with highlights and storytelling",
        description: "Created visually appealing travel recap grid for Budapest trip, demonstrating content creation and storytelling skills.",
        metrics: {
            reach: "5,000+",
            engagement: "800+ interactions",
            followers: "+100 new followers",
            engagement_rate: "16%"
        },
        tools: ["Canva", "Lightroom", "Instagram"],
        duration: "December 2024",
        role: "Content Creator & Photographer",
        learnings: "Authentic storytelling resonates with audience"
    },
    {
        title: "Hiring Campaign Design",
        category: "Recruitment Marketing",
        image: "/images/Hiring post kanishk carousel (1).webp",
        client: "College Placement Cell",
        objective: "Attract quality candidates for placement opportunities",
        strategy: "Professional carousel design highlighting opportunities and benefits",
        description: "Designed recruitment marketing materials for college placement cell, focusing on clear communication and professional appeal.",
        metrics: {
            reach: "7,000+",
            applications: "150+ applications",
            quality: "80% qualified candidates",
            conversion: "20% application rate"
        },
        tools: ["Canva", "Adobe Photoshop", "LinkedIn"],
        duration: "November 2024",
        role: "Marketing Designer",
        learnings: "Clear value proposition increases application quality"
    },
    {
        title: "AW Europe Awareness Campaign",
        category: "Educational Marketing",
        image: "/images/AW Europe Post - 2025 kanishk.webp",
        client: "Educational Initiative",
        objective: "Raise awareness about European opportunities",
        strategy: "Informative post design with key highlights and CTAs",
        description: "Created awareness campaign for European educational opportunities, combining information design with persuasive marketing.",
        metrics: {
            reach: "6,000+",
            engagement: "900+ interactions",
            inquiries: "50+ inquiries",
            clickthrough: "12% CTR"
        },
        tools: ["Canva", "Adobe Photoshop"],
        duration: "December 2024",
        role: "Marketing Designer",
        learnings: "Educational content requires balance of information and visual appeal"
    },
    {
        title: "Professional Design Portfolio",
        category: "Brand Design",
        image: "/images/ADYA V MINAXI.webp",
        client: "Professional Project",
        objective: "Showcase design capabilities and brand identity work",
        strategy: "Clean, professional design demonstrating brand aesthetics",
        description: "Professional design work showcasing brand identity and visual design skills for client projects.",
        metrics: {
            client_satisfaction: "100%",
            revisions: "Minimal revisions needed",
            timeline: "Delivered ahead of schedule",
            referrals: "2 client referrals received"
        },
        tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma"],
        duration: "Ongoing",
        role: "Brand Designer",
        learnings: "Strong design fundamentals build client trust"
    }
];

// Skills & Tools
export const skills = {
    marketing: [
        { name: "Social Media Marketing", level: 90 },
        { name: "Content Strategy", level: 85 },
        { name: "Campaign Planning", level: 88 },
        { name: "Brand Management", level: 82 },
        { name: "Email Marketing", level: 75 },
        { name: "Event Marketing", level: 90 }
    ],
    design: [
        { name: "Adobe Photoshop", level: 85 },
        { name: "Canva", level: 95 },
        { name: "Adobe Illustrator", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Video Editing", level: 70 }
    ],
    analytics: [
        { name: "Google Analytics", level: 80 },
        { name: "Instagram Insights", level: 90 },
        { name: "Data Analysis", level: 85 },
        { name: "Excel/Sheets", level: 88 },
        { name: "Reporting", level: 85 }
    ],
    strategic: [
        { name: "Market Research", level: 82 },
        { name: "Strategic Planning", level: 85 },
        { name: "Team Leadership", level: 88 },
        { name: "Project Management", level: 86 },
        { name: "Communication", level: 92 }
    ]
};

// Key Metrics
export const keyMetrics = [
    {
        label: "Total Reach",
        value: "50K+",
        description: "Across all campaigns",
        icon: "📊"
    },
    {
        label: "Campaigns Led",
        value: "15+",
        description: "Successfully executed",
        icon: "🚀"
    },
    {
        label: "Avg. Engagement",
        value: "12%",
        description: "Above industry average",
        icon: "💬"
    },
    {
        label: "Team Members",
        value: "20+",
        description: "Led and collaborated",
        icon: "👥"
    }
];

// What I Offer
export const services = [
    {
        title: "Marketing Strategy & Planning",
        description: "Develop comprehensive marketing strategies aligned with business objectives",
        icon: "target"
    },
    {
        title: "Social Media Management",
        description: "Create and execute engaging social media campaigns across platforms",
        icon: "social"
    },
    {
        title: "Content Creation & Design",
        description: "Design eye-catching visuals and compelling content that resonates",
        icon: "design"
    },
    {
        title: "Data Analysis & Reporting",
        description: "Analyze campaign performance and provide actionable insights",
        icon: "analytics"
    },
    {
        title: "Event Marketing",
        description: "Plan and execute successful event marketing campaigns",
        icon: "event"
    },
    {
        title: "Team Leadership",
        description: "Lead and mentor teams to achieve marketing excellence",
        icon: "leadership"
    }
];


// Export marketing campaigns as the main projects
export const allProjects = marketingCampaigns;
export const featuredProjects = marketingCampaigns.slice(0, 4);
