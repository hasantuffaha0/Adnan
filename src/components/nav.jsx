import { useState, Fragment, useEffect, useRef } from "react";
import Logo from "../assets/adnan-logo.svg";
const navLinks = [
    { title : 'Hero' },
    { title : 'About', className : 'hidden sm:block' },
    { title : 'Projects', className : 'hidden sm:block' },
    { title : 'Achievements', className : 'sm:hidden' },
    { title : 'Certifications', className : 'hidden sm:block' },
    { title : 'Contact' }
]

const Burger = () => {
    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={menuRef} className="hidden max-[425px]:flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="relative w-10 h-10">
                <span 
                    className={`absolute inset-0 flex items-center justify-center top-1 text-3xl transition-all duration-300
                    ${isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`}>
                        ☰
                </span>
                <span 
                    className={`absolute inset-0 flex items-center justify-center top-1 text-3xl transition-all duration-300
                    ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`}>
                        ✕
                </span>
            </button>
            <ul
                className={`flex flex-col gap-1 text-black font-bold p-3 bg-slate-300 rounded-3xl absolute top-17
                right-0 w-50 shadow-lg shadow-black/50 transition-all duration-300 border-slate-700 border-2 text-base
            ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}`}>
                {navLinks.filter(link => link.title !== 'Achievements').map((link, index) => (
                    <Fragment key={index}>
                        <button className="burgerbutton py-2 bg-slate-300 active:bg-slate-500">{link.title}</button>
                        {index !== navLinks.length - 2 ? <hr /> : null}
                    </Fragment>
                ))}
            </ul>
        </div>
    )
}

const NavItems = () => {
    return (
        <ul
            className="gap-2 text-white font-black text-[15px] lg:text-lg lg:gap-5 md:text-base
            md:gap-4 sm:text-[16px] sm:gap-3 flex max-[425px]:hidden">
            {navLinks.map((link, index) => (
                <li key = {index} className={`${link.className || ''} cursor-pointer`}>{link.title}</li>
            ))}
        </ul>
    )
}

const MainNav = () => {
    return (
        <nav
            className="flex items-center border-2 border-white/30 rounded-3xl fixed w-[97%] px-5 mx-auto
            top-4 inset-x-0 bg-white/20 backdrop-blur-[10px] justify-between h-15 max-md:text-base z-1">

            <img
                src={Logo}
                alt="Adnan Saker Logo"
                className="w-10 h-10" />

            <p
                className="adnan-title text-3xl font-black min-[425px]:hidden">
                Adnan Sakr
            </p>

            <NavItems />

            <button
                className="hire-me bg-blue-700 hover:bg-blue-900 transition-all duration-200 hover:scale-101 ease-in-out text-white
                font-bold py-2 w-20 rounded-3xl text-[15px] min-[440px]:w-23 sm:w-30 md:w-40 shadow shadow-white/20 max-[425px]:hidden cursor-pointer">
                Hire me
            </button>

            <Burger />

        </nav>
    )
}

export default MainNav;