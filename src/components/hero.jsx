import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import photo from "../assets/AdnanChar.png";
import flutterLogo from "../assets/FlutterLogo.png";

const Info = [
    {number: 3, title : 'Certificates'},
    {number: 10, title : 'Projects'},
    {number: 5, title : 'Clients'}
]

const NameAdnan = () => {
    return (
        <div
            className="flex flex-col items-start mb-7 mt-5 sm:mt-0">
            <p
                className="text-2xl sm:text-3xl text-blue-400">
                    Hi I am
            </p>

            <p
                className="main-name text-4xl md:text-5xl lg:text-6xl font-bold mt-2 text-orange-400">
                    Adnan Sakr
            </p>
        </div>
    )
}

const Logo = () => {
    return (
        <div
            className="flex justify-center items-center">
            <img
                src={flutterLogo}
                alt="Flutter Logo"
                className="sm:w-30 sm:h-30 mx-auto inline-block w-25 h-25"/>

            <div
                className="sm:w-80 w-55">
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
                className="track-name text-3xl inline-block text-blue-500"
            />
            </div>

        </div>
    )
}

const Button = () => {
    return (
        <div
            className="flex flex-row gap-3 justify-center mt-0 sm:mt-5 py-4">
            <button
                className="bg-green-500 hover:bg-green-700 active:bg-green-700 text-white font-bold py-2 px-4 w-1/3 rounded-2xl shadow-lg shadow-black/50
                hover:scale-103 transition-all duration-300 ease-in-out cursor-pointer">
                Hire Me
            </button>

            <a
                href="https://drive.usercontent.google.com/u/0/uc?id=1lmlPu5F-DZoxkoQyEvZ2omTcneNQm-PH&export=download"
                className="bg-blue-500 hover:bg-blue-700 active:bg-blue-700 text-white font-bold py-2 px-4 w-1/2 rounded-2xl shadow-lg shadow-black/50
                hover:scale-103 transition-all duration-300 ease-in-out cursor-pointer">
                Download CV
            </a>
        </div>
    )
}

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
            })
        }, 80);
        return () => clearInterval(interval);
    }, [end]);
    return <>{count}</>
}

const ShowInfo = () => {
    return (
        <div
            className="client-info font-bold text-base md:text-l md:p-1 divide-black divide-x bg-white/10 backdrop-blur-xl text-black flex justify-evenly
            p-2 mt-5 sm:mt-10 rounded-xl border-orange-400/50 border">
            {Info.map((link) => (
                <div
                    key={link.title}
                    className="p-4 flex flex-col gap-2 flex-1">

                    <p
                        className="text-orange-400">
                            +
                        <Counter end={link.number} />
                    </p>

                    <p
                        className="text-blue-400">
                            {link.title}
                    </p>

                </div>
            ))}
        </div>
    )
}

const AdnanPhoto = () => {
    return (
        <div
            className="relative z-0 mt-6 sm:mt-20 md:mt-0">
            <div
                className="background-photo w-70 h-70 lg:w-120 lg:h-120 md:w-100 md:h-100 relative inset-0 rounded-full md:top-15 sm:top-0 lg:top-7 top-7
                border border-slate-600"
            ></div>

            <img
                src={photo}
                alt="Adnan Sakr Image"
                className="w-70 sm:w-100 lg:w-130 rounded-full object-cover absolute inset-0 md:-top-19 lg:-top-33 sm:left-1 sm:-top-25 left-1 -top-17"/>
        </div>
    )
}

const Hero = () => {
  return (
    <div
        id="home"
        className="flex flex-col md:flex-row items-center justify-around gap-5 text-center max-sm:px-20 md:p-4
        border-b-4 border-dashed border-slate-700 min-h-[calc(100vh-95px)]">

        <div
            className="order-2 md:order-1">
            <NameAdnan />
            <Logo />
            <Button />
            <ShowInfo />
        </div>

        <div
            className="order-1 md:order-2">
            <AdnanPhoto />
        </div>

    </div>
  )
}

export default Hero;