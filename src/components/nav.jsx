const NavItems = () => {
    return (
        <nav className="flex items-center border-2 border-white/30 rounded-3xl fixed w-[96%] px-5 mx-auto
        top-4 inset-x-0 bg-white/20 backdrop-blur-xl justify-between h-15">
            <img src="/adnan-logo.svg" alt="Adnan Saker Logo" className="w-10 h-10" />
                <ul className="flex gap-6 text-white font-black text-lg">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Certifications</li>
                    <li>Contact me</li>
                </ul>
            <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Hire me</button>
        </nav>
    )
}

export default NavItems;