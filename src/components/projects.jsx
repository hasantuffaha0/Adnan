import { Link } from "react-router-dom";

// بيجيب كل صور "cover" من كل فولدر مشروع تلقائياً
const covers = import.meta.glob("../assets/projects/*/cover.*", {
    eager: true,
    import: "default",
});

// دالة بتجيب مسار الـ cover بتاع مشروع معين حسب الـ slug
const getCover = (slug) => {
    const entry = Object.entries(covers).find(([path]) =>
        path.includes(`/projects/${slug}/`)
    );
    return entry ? entry[1] : null;
};

const projectsList = [
    {
        slug: "drift-users",
        title: "drift users",
        desc: "Description of the second project goes here.",
        tech: ["Flutter", "Dart"],
    },
    {
        slug: "drift-drivers",
        title: "drift drivers",
        desc: "Description of the third project goes here.",
        tech: ["Flutter", "Dart"],
    },
    {
        slug: "sakr-chat",
        title: "Sakr Chat",
        desc: "A real-time chat application built with Flutter, featuring clean UI, smooth animations, and a focus on user experience.",
        tech: ["Flutter", "Dart", "Firebase"],
    },
];

const ProjectCard = ({ project, index }) => {
    const cover = getCover(project.slug);

    return (
        <Link
            to={`/photos/${project.slug}`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden
            hover:border-orange-400/50 transition-all hover:scale-[1.01] duration-500 cursor-pointer group
            grid grid-cols-1 md:grid-cols-2">

            <div className="overflow-hidden h-64 md:h-full">
                {cover && (
                    <img
                        src={cover}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                )}
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-center gap-4">
                <p className="text-blue-400 font-bold text-2xl sm:text-3xl">
                    {project.title}
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="text-orange-400 text-xs sm:text-sm font-semibold bg-orange-400/10
                            border border-orange-400/30 rounded-full px-3 py-1">
                            {t}
                        </span>
                    ))}
                </div>

                <p className="text-slate-400 text-sm mt-3 flex items-center gap-2 group-hover:text-orange-400 transition-colors">
                    View gallery
                    <span>→</span>
                </p>
            </div>
        </Link>
    );
};

const Projects = () => {
    return (
        <div
            id="projects"
            data-aos="fade-down"
            className="w-full px-6 sm:px-10 md:px-12 lg:px-20 py-16 sm:py-20 border-b-4 border-slate-700 border-dashed">
            <p className="text-3xl sm:text-4xl font-bold text-blue-400 mb-3">
                Projects
            </p>
            <p className="text-slate-300 max-w-2xl mb-10">
                A closer look at the products I've built and the craft behind them.
            </p>

            <div className="flex flex-col gap-6">
                {projectsList.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;