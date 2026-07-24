import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import photo from "../assets/AdnanChar.png";
import flutterLogo from "../assets/FlutterLogo.png";

const Info = [
    { number: 3, title: "Certificates" },
    { number: 10, title: "Projects" },
    { number: 5, title: "Clients" },
];

const StatusBadge = () => {
    return (
        <div
            data-aos="fade-right"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20
            rounded-full px-4 py-1.5 mb-6">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <p className="text-slate-300 text-xs sm:text-sm font-semibold">
                Available for freelance work
            </p>
        </div>
    );
};

const NameAdnan = () => {
    return (
        <div
            data-aos="fade-right"
            className="flex flex-col items-center md:items-start gap-2">
            <p className="text-xl sm:text-2xl text-slate-300">
                Hi, I'm
            </p>

            <h1 className="main-name text-5xl md:text-6xl lg:text-7xl font-black text-orange-400 leading-none">
                Adnan Sakr
            </h1>

            <div className="flex items-center gap-3 mt-3">
                <img
                    src={flutterLogo}
                    alt="Flutter Logo"
                    className="w-9 h-9 sm:w-11 sm:h-11 shrink-0"
                />
                <TypeAnimation
                    sequence={[
                        "Flutter Developer",
                        2000,
                        "",
                        500,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="track-name text-2xl sm:text-3xl font-bold text-blue-400"
                />
            </div>
        </div>
    );
};

const Description = () => {
    return (
        <p
            data-aos="fade-right"
            className="text-slate-400 text-sm sm:text-base max-w-md mt-5 leading-relaxed">
            I build fast, reliable mobile apps with clean architecture and
            attention to detail — turning ideas into products people actually enjoy using.
        </p>
    );
};

const Button = () => {
    return (
        <div
            data-aos="zoom-in"
            className="flex flex-row flex-wrap gap-3 justify-center md:justify-start mt-8">
            <a
                href="#contact"
                className="bg-blue-700 hover:bg-blue-900 transition-all duration-200 hover:scale-105 ease-in-out text-white
                font-bold py-3 px-7 rounded-full shadow shadow-white/20 cursor-pointer text-sm sm:text-base">
                Hire Me
            </a>

            <a
                href="https://drive.usercontent.google.com/u/0/uc?id=1lmlPu5F-DZoxkoQyEvZ2omTcneNQm-PH&export=download"
                className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-orange-400/50 text-white
                font-bold py-3 px-7 rounded-full transition-all duration-300 hover:scale-105 ease-in-out text-center cursor-pointer text-sm sm:text-base
                flex items-center gap-2">
                Download CV
                <span className="text-orange-400">↓</span>
            </a>
        </div>
    );
};

const Counter = ({ end }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= end) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        }, 80);
        return () => clearInterval(interval);
    }, [end]);
    return <>{count}</>;
};

const ShowInfo = () => {
    return (
        <div
            data-aos="fade-up"
            className="flex gap-3 sm:gap-4 mt-10 justify-center md:justify-start">
            {Info.map((link) => (
                <div
                    key={link.title}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-orange-400/50
                    transition-all duration-300 rounded-2xl px-5 py-4 sm:px-6 flex flex-col items-center gap-1 min-w-[90px] sm:min-w-[110px]">
                    <p className="text-orange-400 font-bold text-xl sm:text-2xl">
                        +<Counter end={link.number} />
                    </p>

                    <p className="text-blue-400 text-xs sm:text-sm font-semibold">
                        {link.title}
                    </p>
                </div>
            ))}
        </div>
    );
};

const AdnanPhoto = () => {
    return (
        <div
            data-aos="fade-left"
            className="relative z-0">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl"></div>

            <div
                className="background-photo w-70 h-70 lg:w-120 lg:h-120 md:w-100 md:h-100 relative inset-0 rounded-full
                md:top-15 sm:top-0 lg:top-7 top-7 border border-white/20"
            ></div>

            <img
                src={photo}
                alt="Adnan Sakr Image"
                className="w-70 sm:w-100 lg:w-130 rounded-full object-cover absolute inset-0
                md:-top-19 lg:-top-33 sm:left-1 sm:-top-25 left-1 -top-17"
            />

            <div
                className="absolute bottom-8 sm:bottom-14 lg:bottom-20 right-0 sm:right-4
                bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-2 flex items-center gap-2">
                <img src={flutterLogo} alt="Flutter" className="w-6 h-6" />
                <span className="text-white text-xs sm:text-sm font-bold">Flutter</span>
            </div>
        </div>
    );
};

const ScrollHint = () => {
    return (
        <a
            href="#about"
            className="hidden md:flex flex-col items-center gap-2 absolute bottom-6 left-1/2 -translate-x-1/2
            text-slate-400 hover:text-orange-400 transition-colors">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <span className="w-5 h-8 rounded-full border border-current flex items-start justify-center p-1">
                <span className="w-1 h-1.5 rounded-full bg-current animate-bounce"></span>
            </span>
        </a>
    );
};

const Hero = () => {
    return (
        <div
            id="home"
            className="relative flex flex-col md:flex-row items-center justify-between gap-14 md:gap-8
            text-center md:text-left px-6 sm:px-10 md:px-12 lg:px-20 py-16 sm:py-20
            border-b-4 border-dashed border-slate-700 min-h-[calc(100vh-95px)] overflow-hidden">

            <div className="order-2 md:order-1 flex flex-col items-center md:items-start relative z-10">
                <StatusBadge />
                <NameAdnan />
                <Description />
                <Button />
                <ShowInfo />
            </div>

            <div className="order-1 md:order-2 shrink-0 relative z-10">
                <AdnanPhoto />
            </div>

            <ScrollHint />
        </div>
    );
};

export default Hero;