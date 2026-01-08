"use client";

import { useState } from "react";
import { EducationCard } from "@/components/education-card";
import { educationData } from "@/lib/constants";

// Import the separate experience arrays from experience.ts
// We'll need to create a helper to get them organized
const getOrganizedExperience = () => {
  // This will be populated from the data structure
  const fullTime = [
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
      skills: ["Marketing Strategy", "Analytical Skills", "Product Marketing", "Market Research"],
      certificate: "/certificates/bajaj.webp"
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
      skills: ["Analytical Skills", "Marketing", "Microsoft Excel", "Research", "Policy Analysis"],
      certificate: "/certificates/backberry.webp"
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
      skills: ["Project Management", "Data Analysis", "Microsoft Excel", "SQL"],
      certificate: "/certificates/btgf.webp"
    }
  ];

  const collegeRoles = [
    {
      company: "PATHWAY - The Career Counseling & Placement Cell",
      role: "Head of Media & Marketing",
      duration: "Jun 2024 - Jul 2025",
      type: "Leadership Role",
      location: "Ram Lal Anand College",
      description: "Led marketing initiatives and team management for college placement activities.",
      responsibilities: [
        "Led team of 14+ members in online and offline marketing initiatives, directing campaigns for 150+ registrations per event and spearheading Milestone 5.0- Annual Placement Fair with 700+ student registrations",
        "Managed creation and timely dissemination of placement opportunity posts across channels, ensuring maximum reach and campus engagement"
      ],
      skills: ["Team Leadership", "Marketing Strategy", "Social Media Marketing", "Event Management"]
    },
    {
      company: "AWAAZ - The English Debating Society",
      role: "Departmental Head",
      duration: "May 2024 - Jul 2025",
      type: "Leadership Role",
      location: "Ram Lal Anand College",
      description: "Led creative team and organized major debate events.",
      responsibilities: [
        "Led a team in creating various media and promotional materials, including posters, flyers, Instagram posts, and stories, to enhance event visibility and engagement",
        "Played a key role in organizing major debate events such as JCC (Joint Crisis Committee), Agora, RLAC MUN etc, contributing to their smooth execution and success"
      ],
      skills: ["Team Leadership", "Graphic Design", "Event Management", "Canva"]
    },
    {
      company: "Agora 2024, RLAC",
      role: "Moderator, Oxford Parliamentary Debate",
      duration: "2024",
      type: "Event Role",
      location: "Ram Lal Anand College",
      description: "Moderated Oxford Parliamentary Debate at Inter-college Debate Competition.",
      responsibilities: [
        "Acted as Moderator for the Oxford Parliamentary Debate held as part of the Inter-college Debate Competition Agora 2024, RLAC"
      ],
      skills: ["Moderation", "Public Speaking", "Debate", "Event Management"]
    },
    {
      company: "RLAC MUN 2025",
      role: "Head of Conference Affairs",
      duration: "2025",
      type: "Event Role",
      location: "Ram Lal Anand College",
      description: "Led conference coordination for Model United Nations simulation.",
      responsibilities: [
        "Acted as the Head of Conference Affairs for the RLAC MUN 2025- A simulation of the United Nations, and facilitated the smooth coordination of the conferences taking place"
      ],
      skills: ["Event Coordination", "Leadership", "Diplomacy", "Conference Management"]
    },
    {
      company: "PATHWAY - The Career Counseling & Placement Cell",
      role: "Placement Coordinator",
      duration: "Sep 2023 - Jul 2024",
      type: "Leadership Role",
      location: "Ram Lal Anand College",
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

  return { fullTime, internships, collegeRoles };
};

const ExperienceCard = ({ exp, isLast }: { exp: any; isLast: boolean }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="group">
      <div className={`${exp.certificate ? 'grid grid-cols-1 lg:grid-cols-3 gap-6' : ''}`}>
        {/* Main Content */}
        <div className={`space-y-3 ${exp.certificate ? 'lg:col-span-2' : ''}`}>
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white">
                {exp.role}
              </h3>
              <p className="text-base font-medium text-gray-700 dark:text-gray-300 mt-1">
                {exp.company}
              </p>
            </div>
            <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700">
              {exp.type}
            </span>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>{exp.duration}</span>
            <span>•</span>
            <span>{exp.location}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            {exp.description}
          </p>

          {/* Responsibilities */}
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            {exp.responsibilities.map((responsibility: string, i: number) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 flex-shrink-0"></span>
                <span>{responsibility}</span>
              </li>
            ))}
          </ul>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {exp.skills.map((skill: string, i: number) => (
              <span
                key={i}
                className="text-xs px-2.5 py-1 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certificate Image */}
        {exp.certificate && (
          <>
            <div className="lg:col-span-1 flex items-start justify-center lg:justify-end">
              <div className="w-full max-w-[200px] sm:max-w-xs lg:max-w-none">
                <img
                  src={exp.certificate}
                  alt={`${exp.company} Certificate`}
                  className="w-full h-auto rounded-lg border-2 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => setIsModalOpen(true)}
                />
              </div>
            </div>

            {/* Full Screen Modal */}
            {isModalOpen && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                onClick={() => setIsModalOpen(false)}
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 z-60 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl font-bold transition-all duration-200"
                  aria-label="Close"
                >
                  ×
                </button>

                {/* Certificate Image */}
                <div className="relative max-w-7xl max-h-full">
                  <img
                    src={exp.certificate}
                    alt={`${exp.company} Certificate - Full View`}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Divider */}
      {!isLast && (
        <div className="mt-8 border-b border-gray-200 dark:border-gray-800"></div>
      )}
    </div>
  );
};

export function EducationExperienceSection() {
  const { fullTime, internships, collegeRoles } = getOrganizedExperience();

  return (
    <section className="transition-all duration-300 space-y-12">
      {/* Experience Section */}
      <div>
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 mb-6 lg:mb-8 transition-colors duration-300 tracking-wide uppercase">
          Experience
        </h2>

        {/* Full-time Roles */}
        <div className="space-y-8 mb-12">
          {fullTime.map((exp, index) => (
            <ExperienceCard key={`fulltime-${index}`} exp={exp} isLast={index === fullTime.length - 1} />
          ))}
        </div>

        {/* Internships Section */}
        <div className="space-y-8 mb-12">
          <h3 className="text-xl lg:text-2xl font-bold dark:text-white text-gray-900 mb-6 transition-colors duration-300 tracking-wide">
            INTERNSHIPS
          </h3>
          {internships.map((exp, index) => (
            <ExperienceCard key={`internship-${index}`} exp={exp} isLast={index === internships.length - 1} />
          ))}
        </div>

        {/* College Roles Section */}
        <div className="space-y-8">
          <h3 className="text-xl lg:text-2xl font-bold dark:text-white text-gray-900 mb-6 transition-colors duration-300 tracking-wide">
            COLLEGE LEADERSHIP & SOCIETY ROLES
          </h3>
          {collegeRoles.map((exp, index) => (
            <ExperienceCard key={`college-${index}`} exp={exp} isLast={index === collegeRoles.length - 1} />
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 mb-6 lg:mb-8 transition-colors duration-300 tracking-wide uppercase">
          Education
        </h2>
        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <EducationCard
              key={`edu-${index}`}
              degree={edu.degree}
              institution={edu.institution}
              location={edu.location}
              duration={edu.duration}
              isLast={index === educationData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
