import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const allImages = import.meta.glob("../assets/projects/*/*.*", {
    eager: true,
    import: "default",
});

const projectTitles = {
    "drift-users": "drift users",
    "drift-drivers": "drift drivers",
    "sakr-chat": "Sakr Chat",
};

const getGallery = (slug) => {
    return Object.entries(allImages)
        .filter(([path]) => path.includes(`/projects/${slug}/`) && !path.includes("cover."))
        .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
        .map(([, src]) => src);
};

const BackButton = () => {
    return (
        <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20
            hover:border-orange-400/50 text-white font-bold py-2.5 px-5 rounded-full
            transition-all duration-300 hover:scale-105 cursor-pointer text-sm sm:text-base w-fit">
            <span>←</span>
            Back to Portfolio
        </Link>
    );
};

const Photos = () => {
    const { slug } = useParams();
    const gallery = getGallery(slug);
    const projectTitle = projectTitles[slug] || "Project";

    const [selectedIndex, setSelectedIndex] = useState(null);
    const isPreviewOpen = selectedIndex !== null;

    const showPrev = () => {
        setSelectedIndex((prev) =>
            prev === 0 ? gallery.length - 1 : prev - 1
        );
    };

    const showNext = () => {
        setSelectedIndex((prev) =>
            prev === gallery.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        if (!isPreviewOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "Escape") setSelectedIndex(null);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isPreviewOpen]);

    return (
        <div className="min-h-screen bg-slate-950 px-6 sm:px-10 md:px-12 lg:px-20 py-10 sm:py-14">

            <div className="flex flex-col gap-6 mb-10">
                <BackButton />

                <div>
                    <p className="text-blue-400 font-bold text-3xl sm:text-4xl">
                        {projectTitle}
                    </p>
                    <p className="text-slate-400 text-sm sm:text-base mt-2">
                        {gallery.length} screenshots
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {gallery.map((src, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className="overflow-hidden rounded-xl border border-white/10 hover:border-orange-400/50
                        transition-all cursor-pointer group aspect-[9/16]">
                        <img
                            src={src}
                            alt={`${projectTitle} screenshot ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <BackButton />
            </div>

            {isPreviewOpen && (
                <div
                    onClick={() => setSelectedIndex(null)}
                    className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out">

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedIndex(null);
                        }}
                        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20
                        w-10 h-10 flex items-center justify-center rounded-full
                        bg-white/10 border border-white/20 text-white text-xl
                        hover:bg-red-500/30 hover:border-red-400/50 transition-all cursor-pointer">
                        ✕
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            showPrev();
                        }}
                        className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-10
                        w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
                        bg-white/10 border border-white/20 text-white text-xl sm:text-2xl
                        hover:bg-orange-400/30 hover:border-orange-400/50 transition-all cursor-pointer">
                        ‹
                    </button>

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-xs sm:max-w-md w-full flex flex-col items-center">
                        <img
                            src={gallery[selectedIndex]}
                            alt={`${projectTitle} screenshot ${selectedIndex + 1}`}
                            className="w-full max-h-[60vh] sm:max-h-[85vh] object-contain rounded-xl border border-white/20"
                        />
                        <p className="text-slate-400 text-sm mt-4">
                            {selectedIndex + 1} / {gallery.length}
                        </p>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            showNext();
                        }}
                        className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-10
                        w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
                        bg-white/10 border border-white/20 text-white text-xl sm:text-2xl
                        hover:bg-orange-400/30 hover:border-orange-400/50 transition-all cursor-pointer">
                        ›
                    </button>
                </div>
        )}
        </div>
    );
};

export default Photos;