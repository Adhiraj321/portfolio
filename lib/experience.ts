// Full-time Roles
const fullTimeExperience = [
    {
        company: "Adsparkx",
        role: "Social Media Executive",
        duration: "Jun 2025 - Present",
        type: "Full-time",
        location: "On-site",
        description: "Cross-functional coordination between business and creative teams, content strategy, and operations management.",
        responsibilities: [
            "Fully handled and executed the organization's end-to-end social media strategy, including copywriting, graphic design, and video editing",
            "Developed monthly content across multiple platforms while maintaining consistent brand identity, increasing total impressions from 40K to 65K+",
            "Designed branding collateral and marketing materials for internal initiatives and company events, supporting internal communications and brand alignment"
        ],
        skills: ["Team Coordination", "Social Media Strategy", "Content Creation", "Project Management"]
    }
];

// Internships
const internships = [
    {
        company: "Bajaj Capital Ltd.",
        role: "Product Marketing Intern",
        duration: "Jun 2024 - Aug 2024",
        type: "Internship",
        location: "Hybrid",
        description: "Digital marketing campaigns and market research for financial services.",
        responsibilities: [
            "Worked on Ideation, Promotion, Scheduling & Execution of Digital Marketing Campaigns during the two month period",
            "Designed and Analyzed a Market Research Survey to examine Brand Awareness & understand Customer Buying Behavior"
        ],
        skills: ["Marketing Strategy", "Analytical Skills", "Product Marketing", "Market Research"]
    },
    {
        company: "Blackberrys Menswear",
        role: "Ecommerce & Marketing Intern",
        duration: "Jul 2024 - Aug 2024",
        type: "Internship",
        location: "On-site",
        description: "E-commerce operations and marketing analysis under VP of E-commerce.",
        responsibilities: [
            "Worked directly under the Vice President of E-commerce, attending daily meetings to gain firsthand experience in e-commerce and marketing operations, as well as supporting the team with various Excel-based tasks",
            "Designed and analyzed a market research and competitive analysis survey, providing insights for strategic improvements",
            "Analyzed and compared company policies, including drafting the return policy to enhance customer satisfaction"
        ],
        skills: ["Analytical Skills", "Marketing", "Microsoft Excel", "Research", "Policy Analysis"]
    },
    {
        company: "BTGF Foundation, Malviya Nagar",
        role: "Research and Data Management Intern",
        duration: "Jul 2024 - Sep 2024",
        type: "Internship",
        location: "Delhi, India - Hybrid",
        description: "Large-scale data analysis and management for constituency research.",
        responsibilities: [
            "Worked directly under MLA Somnath Bharti, conducting demographic analysis on 50,000+ datasets across wards and segmenting data for 145 booths using Excel and SQL to generate strategic insights",
            "Resolved 2,000+ public issues escalated to Delhi Jal Board, improving response times and community satisfaction through data-driven problem-solving",
            "Developed core competencies in demographic analysis, data validation, and community engagement while addressing grassroots challenges"
        ],
        skills: ["Project Management", "Data Analysis", "Microsoft Excel", "SQL"]
    }
];

// College Leadership & Society Roles
const collegeRoles = [
    {
        company: "The Placement Cell, Ram Lal Anand College",
        role: "Head of Media & Marketing",
        duration: "Jun 2024 - Jul 2025",
        type: "Leadership Role",
        location: "Delhi, India",
        description: "Led marketing initiatives and team management for college placement activities.",
        responsibilities: [
            "Lead a team of 14+ members in managing online and offline marketing initiatives",
            "Directed marketing initiatives for events and workshops, garnering 150+ registrations each",
            "Spearheaded Marketing campaign for Milestone 5.0 - Annual Placement Fair, driving 700+ student registrations",
            "Oversee creation and circulation of placement opportunity posts, ensuring timely dissemination"
        ],
        skills: ["Team Leadership", "Marketing Strategy", "Social Media Marketing", "Event Management"]
    },
    {
        company: "AWAAZ - The English Debating Society",
        role: "Head of Graphic Designing",
        duration: "May 2024 - Jul 2025",
        type: "Leadership Role",
        location: "Ram Lal Anand College",
        description: "Led creative team and organized major debate events.",
        responsibilities: [
            "Led team in creating promotional materials including posters, flyers, Instagram posts and stories",
            "Organized major debate events: JCC, Agora, RLAC MUN, enhancing event visibility and engagement",
            "Acted as Moderator for Oxford Parliamentary Debate at Agora 2024",
            "Served as Head of Conference Affairs for RLAC MUN 2025"
        ],
        skills: ["Team Leadership", "Graphic Design", "Event Management", "Canva"]
    },
    {
        company: "The Placement Cell, Ram Lal Anand College",
        role: "Placement Coordinator",
        duration: "Sep 2023 - Jul 2024",
        type: "Leadership Role",
        location: "Delhi, India",
        description: "Coordinated placement activities and student engagement.",
        responsibilities: [
            "Coordinated placement drives and company interactions",
            "Created web content and marketing materials for placement opportunities",
            "Designed graphics for placement-related communications"
        ],
        skills: ["Marketing", "Web Content Writing", "Graphic Design"]
    },
    {
        company: "AWAAZ - The English Debating Society",
        role: "Executive Member",
        duration: "Feb 2023 - May 2024",
        type: "Society Member",
        location: "Ram Lal Anand College",
        description: "Active participation in debate events and society activities.",
        responsibilities: [
            "Participated in organizing and executing debate competitions",
            "Contributed to society's growth and event management"
        ],
        skills: ["Event Management", "Communication", "Teamwork"]
    }
];

// Combined Experience (Full-time → Internships → College Roles)
export const detailedExperience = [
    ...fullTimeExperience,
    ...internships,
    ...collegeRoles
];

// Export internships separately for potential separate display
export const detailedInternships = internships;

// Detailed Achievements & Awards
export const detailedAchievements = [
    {
        title: "CBSE Merit Certificate - Top 0.1% Scorer",
        organization: "Central Board of Secondary Education",
        date: "Jul 2020",
        description: "Awarded CBSE Merit Certificate for being in top 0.1% scorer in Mathematics-Standard",
        icon: "🏆",
        category: "Academic Excellence"
    },
    {
        title: "Blue Badge for Academic Excellence",
        organization: "Delhi Public School",
        date: "May 2022",
        description: "Awarded Blue Badge for repeated academic excellence for 3 consecutive years",
        icon: "🎖️",
        category: "Academic Excellence"
    },
    {
        title: "Head of Media & Marketing - Placement Cell",
        organization: "Ram Lal Anand College",
        date: "Jun 2024 - Jul 2025",
        description: "Led team of 14+ members, drove 700+ registrations for Milestone 5.0 Annual Placement Fair",
        icon: "👨‍💼",
        category: "Leadership"
    },
    {
        title: "Head of Graphic Designing - AWAAZ Society",
        organization: "Ram Lal Anand College",
        date: "May 2024 - Jul 2025",
        description: "Led creative team, organized major debate events including Agora 2024 and RLAC MUN 2025",
        icon: "🎨",
        category: "Leadership"
    },
    {
        title: "Proficiency in Mathematics - School Topper",
        organization: "Delhi Public School",
        date: "May 2021",
        description: "Awarded for being school topper in Mathematics with perfect score of 100/100",
        icon: "📊",
        category: "Academic Excellence"
    },
    {
        title: "First Place - ADMAD Competition",
        organization: "Delhi Public School",
        date: "2021",
        description: "Won first place in ADMAD (Advertising Mad) competition showcasing marketing creativity",
        icon: "🥇",
        category: "Competition"
    },
    {
        title: "Certificate of Appreciation - Action for Equality",
        organization: "Delhi Public School & UNESCO",
        date: "Sep 2021",
        description: "Participated in Action for Equality program with ECF (Equal Community Foundation) - UNESCO",
        icon: "🌍",
        category: "Social Impact"
    },
    {
        title: "B.Com (Hons) with Minor in Economics",
        organization: "Ram Lal Anand College, University of Delhi",
        date: "2022 - 2025",
        description: "Pursuing Bachelor of Commerce (Honors) with Minor in Economics - First Division",
        icon: "🎓",
        category: "Academic"
    }
];
