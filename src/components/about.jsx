const Skills = [
    "Flutter & Dart",
    "BLoC / Cubit",
    "Clean Architecture",
    "SOLID Principles",
    "Firebase Services",
    "Real-time Data Sync",
    "API Integration",
    "Local Storage",
    "Dependency Injection",
    "Performance Optimization",
];

const DriftFeatures = [
    "Real-time location tracking",
    "Trip management",
    "Driver-user communication flows",
    "Push notifications",
    "Ratings & trip history",
    "Saved locations",
    "Authentication",
    "Real-time data handling",
];

const SectionHeading = ({ children }) => (
    <p
        data-aos="fade-down"
        className="text-3xl sm:text-4xl font-bold text-blue-400 mb-4">
            {children}
    </p>
);

const Intro = () => {
    return (
        <div
            data-aos="fade-down"
            className="max-w-3xl">

            <p
                className="text-slate-300 leading-relaxed">
                I'm a
                    <span 
                        className="text-orange-400 font-bold text-2xl lg:text-3xl p-2">
                        Flutter Developer
                    </span> 
                passionate about building scalable, production-ready mobile applications with clean architecture
                and modern software engineering practices.
            </p>

            <p
                className="text-slate-300 leading-relaxed mt-4">
                I specialize in developing cross-platform mobile applications using Flutter and Dart,
                with a strong focus on writing maintainable code, creating smooth user experiences,
                and solving real-world engineering challenges.
            </p>

            <p
                className="text-slate-300 leading-relaxed mt-4">
                I have experience building complete applications from idea to implementation, including
                designing scalable architectures, managing complex application flows, handling
                asynchronous operations, and considering real-world challenges such as race conditions,
                system permissions, reliability, and user experience.
            </p>

        </div>
    );
};

const SkillsGrid = () => {
    return (
        <div
            className="mt-10">
            <p
                data-aos="fade-down"
                className="text-xl sm:text-2xl font-bold text-orange-400 mb-4">
                    Technical Skills
            </p>
            <div
                
                data-aos="fade-right"
                className="flex flex-wrap gap-2 sm:gap-3">
                {Skills.map((skill) => (
                    <span
                        key={skill}
                        className="bg-white/10 backdrop-blur-md border border-white/20 text-slate-200 text-xs sm:text-sm
                        font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:border-orange-400/50 transition-all duration-300 hover:scale-105
                        hover:px-5"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

const FeaturedProject = () => {
    return (
        <div
            data-aos="fade-down"
            className="mt-10 bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border-orange-400/50 border">
            <p
                className="text-xl sm:text-2xl font-bold text-orange-400 mb-1">
                    Featured Project
            </p>
            <p
                className="text-2xl sm:text-3xl font-bold text-blue-400 mb-3">
                    Drift
            </p>
            <p
                className="text-slate-300 leading-relaxed">
                A full-featured ride-hailing application designed with a real-world production
                mindset. While building Drift, I focused not only on implementing features but also
                on creating a reliable and scalable system that can handle real application scenarios.
            </p>

            <div
                className="flex flex-wrap gap-2 sm:gap-3 mt-5">
                {DriftFeatures.map((feature) => (
                    <span
                        key={feature}
                        className="bg-blue-500/10 border hover:border-orange-400/50 transition-all duration-300 hover:scale-105
                        hover:px-5 border-blue-400/30 text-blue-300 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full"
                    >
                        {feature}
                    </span>
                ))}
            </div>
        </div>
    );
};

const BeyondCode = () => {
    return (
        <div
            data-aos="fade-right"
            className="mt-10 max-w-3xl">
            <p
                className="text-xl sm:text-2xl font-bold text-orange-400 mb-4">Beyond Code</p>
            <p
                className="text-slate-300 leading-relaxed">
                Beyond technical skills, I have strong leadership and communication abilities.
                Throughout my university projects, I frequently took the role of{" "}
                <span
                    className="text-orange-400 font-bold text-2xl lg:text-3xl p-2">
                    Team Leader
                </span>
                , helping teams organize tasks, solve challenges, and deliver projects successfully under deadlines
                and pressure.
            </p>
            <p
                className="text-slate-300 leading-relaxed mt-4">
                I enjoy communicating technical ideas, presenting in front of audiences, and sharing
                my development journey through social media content. Creating educational and
                storytelling-based videos has helped me improve my communication skills, simplify
                complex concepts, and connect with a wider developer community.
            </p>
            <p
                className="text-slate-300 leading-relaxed mt-4">
                I am a self-driven learner who enjoys exploring new technologies, understanding how
                systems work internally, and continuously improving my problem-solving and engineering
                skills. I believe great software is built not only with code, but also with teamwork,
                clear communication, ownership, and the ability to solve meaningful problems.
            </p>
        </div>
    );
};

const MainAbout = () => {
    return (
        <div
            className="px-6 sm:px-10 md:px-12 lg:px-20 py-16 sm:py-20 border-b-4 border-slate-700 border-dashed" id="about">
            <SectionHeading>
                About Me
            </SectionHeading>
            <Intro />
            <SkillsGrid />
            <FeaturedProject />
            <BeyondCode />
        </div>
    );
};

export default MainAbout;