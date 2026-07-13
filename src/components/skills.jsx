const SoftSkills = [
    {
        title: "Leadership & Team Management",
        desc: "Leadership and team management experience through university projects.",
    },
    {
        title: "Problem-Solving & Analytical Thinking",
        desc: "Strong problem-solving and analytical thinking abilities.",
    },
    {
        title: "Working Under Pressure",
        desc: "Ability to work effectively under pressure and meet deadlines.",
    },
    {
        title: "Communication & Presentation",
        desc: "Strong communication skills and confidence in presenting ideas to audiences.",
    },
    {
        title: "Content Creation & Knowledge Sharing",
        desc: "Experience creating technical content and sharing knowledge through social media platforms.",
    },
    {
        title: "Self-Learning & Adaptability",
        desc: "Self-learning mindset and ability to quickly adapt to new technologies.",
    },
    {
        title: "Ownership Mentality",
        desc: "Ownership mentality and responsibility for delivering complete solutions.",
    },
    {
        title: "Collaboration & Teamwork",
        desc: "Collaboration and effective teamwork in different project environments.",
    },
    {
        title: "Attention to Detail",
        desc: "Attention to detail and focus on building reliable user experiences.",
    },
    {
        title: "Structured Problem Breakdown",
        desc: "Ability to break down complex problems into clear, practical solutions.",
    },
    {
        title: "Curiosity & Continuous Improvement",
        desc: "Curiosity and continuous improvement mindset.",
    },
];

const SkillCard = ({ title, desc, index }) => {
    return (
        <div
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 flex flex-col gap-2 hover:border-orange-400/50 transition-colors duration-300">
            <span
                className="text-orange-400 font-bold text-sm">
                {String(index + 1).padStart(2, "0")}
            </span>
            <p
                className="text-blue-400 font-bold text-base sm:text-lg">
                    {title}
            </p>
            <p
                className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {desc}
            </p>
        </div>
    );
};

const MainSoftSkills = () => {
    return (
        <div
            className="px-6 sm:px-10 md:px-12 lg:px-20 py-16 sm:py-20 border-b-4 border-slate-700 border-dashed">
            <p
                className="text-3xl sm:text-4xl font-bold text-blue-400 mb-3">
                    Soft Skills
            </p>
            <p
                className="text-slate-300 max-w-2xl mb-10">
                Beyond technical ability, these are the qualities that shape how I work,
                collaborate, and deliver results.
            </p>

            <div
                id="skills"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {SoftSkills.map((skill, index) => (
                    <SkillCard key={skill.title} {...skill} index={index} />
                ))}
            </div>
        </div>
    );
};

export default MainSoftSkills;