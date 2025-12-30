"use client";

export function AboutSection() {
    return (
        <section className="transition-all duration-300">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white text-gray-900 mb-6 lg:mb-8 transition-colors duration-300 tracking-wide uppercase">
                About Me
            </h2>
            <div className="space-y-4 lg:space-y-5 dark:text-gray-300 text-gray-700 leading-relaxed transition-colors duration-300 text-sm sm:text-base lg:text-base xl:text-lg">
                <p>
                    I'm an undergraduate at the University of Delhi, Ram Lal Anand College, having recently
                    completed my final semester in B.Com (Hons) with a Minor in Economics. Over the course of
                    my student life, I've developed a strong interest in Marketing, Commerce, and Strategic
                    Communication, areas where I've actively applied myself both academically and through internships.
                </p>
                <p>
                    My internships, including roles in Marketing and Data Management, have helped me strengthen
                    my analytical thinking, data handling, and content creation abilities. These experiences gave
                    me actual exposure to working in team-driven environments, solving problems, and adapting
                    quickly, which are skills that go far beyond the classroom.
                </p>
                <p>
                    Holding leadership positions across student societies, including the Placement Cell and the
                    English Debating Society, has shaped me into a more organized, communicative, and thoughtful
                    individual. Whether it was heading marketing initiatives, managing teams, or designing campaigns,
                    these roles taught me how to balance creativity with execution.
                </p>
                <p>
                    Outside academics, I enjoy sketching, reading, gardening, and watching movies. I also have a
                    deep interest in history and politics.
                </p>
            </div>
        </section>
    );
}
