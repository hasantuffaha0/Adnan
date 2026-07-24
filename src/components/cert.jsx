import { useState, useEffect } from "react";
import cert1 from "../assets/certificates/cert1.jpg";
import cert2 from "../assets/certificates/cert2.jpg";
import cert3 from "../assets/certificates/cert3.jpg";
import cert4 from "../assets/certificates/cert4.jpg";

const Certificates = [
    {
        title: "Certificate 1",
        image: cert1,
    },
    {
        title: "Certificate 2",
        image: cert2,
    },
    {
        title: "Certificate 3",
        image: cert3,
    },
    {
        title: "Certificate 4",
        image: cert4,
    },
];

const CertCard = ({ title, image, index, onClick }) => {
    return (
        <div
            data-aos="fade-up"
            onClick={onClick}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 flex flex-col gap-3
            hover:border-orange-400/50 transition-all hover:scale-[1.01] duration-800 cursor-pointer group">
            <div className="overflow-hidden rounded-xl border border-white/10">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="flex items-center gap-2">
                <span className="text-orange-400 font-bold text-sm">
                    {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-blue-400 font-bold text-base sm:text-lg">
                    {title}
                </p>
            </div>
        </div>
    );
};

const Cert = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const isOpen = selectedIndex !== null;
    const selected = isOpen ? Certificates[selectedIndex] : null;

    const showPrev = () => {
        setSelectedIndex((prev) =>
            prev === 0 ? Certificates.length - 1 : prev - 1
        );
    };

    const showNext = () => {
        setSelectedIndex((prev) =>
            prev === Certificates.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() => {
    window.dispatchEvent(
        new CustomEvent("lightboxToggle", { detail: { open: isOpen } })
    );
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "ArrowRight") showNext();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "Escape") setSelectedIndex(null);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    return (
        <div
            data-aos="fade-down"
            className="w-full min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-12 lg:px-20 py-16 sm:py-20 border-b-4 border-slate-700 border-dashed">
            <p className="text-3xl sm:text-4xl font-bold text-blue-400 mb-3">
                Certificates
            </p>
            <p className="text-slate-300 max-w-2xl mb-10">
                A selection of certifications that reflect my continuous learning
                journey and commitment to growth.
            </p>

            <div
                id="certificates"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                {Certificates.map((cert, index) => (
                    <CertCard
                        key={cert.title}
                        {...cert}
                        index={index}
                        onClick={() => setSelectedIndex(index)}
                    />
                ))}
            </div>

            {isOpen && (
                <div
                    onClick={() => setSelectedIndex(null)}
                    className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 cursor-zoom-out">

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            showPrev();
                        }}
                        className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-10
                        w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
                        bg-white/10 border border-white/20 text-white text-2xl
                        hover:bg-orange-400/30 hover:border-orange-400/50 transition-all cursor-pointer">
                        ‹
                    </button>

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-5xl w-full flex flex-col items-center">
                        <img
                            src={selected.image}
                            alt={selected.title}
                            className="w-full max-h-[85vh] object-contain rounded-xl border border-white/20"
                        />
                        <p className="text-center text-slate-200 mt-4 font-semibold text-lg">
                            {selected.title}
                        </p>
                        <p className="text-center text-slate-400 text-sm mt-1">
                            {selectedIndex + 1} / {Certificates.length}
                        </p>
                    </div>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            showNext();
                        }}
                        className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-10
                        w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
                        bg-white/10 border border-white/20 text-white text-2xl
                        hover:bg-orange-400/30 hover:border-orange-400/50 transition-all cursor-pointer">
                        ›
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cert;