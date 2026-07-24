const Footer = () => {
    return (
        <footer
            className="w-full px-6 sm:px-10 md:px-12 lg:px-20 py-8 border-t border-white/10
            flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-center sm:text-start">
            <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} All rights reserved.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <p className="text-slate-300 text-sm">
                    Made with <span className="text-orange-400">♥</span> by{" "}
                    <a
                        href="https://github.com/hasantuffaha0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 font-bold hover:text-orange-400 transition-colors">
                        Eng: Hasan Tuffaha
                    </a>{" "}
                    <span className="text-slate-500">(Frontend Developer)</span>
                </p>

                <a
                    href="https://wa.me/201011308020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 text-sm hover:text-orange-400 transition-colors">
                    WhatsApp
                </a>
            </div>
        </footer>
    );
};

export default Footer;