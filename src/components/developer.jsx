const Footer = () => {
    return (
        <footer className="w-full px-6 sm:px-10 md:px-12 lg:px-20 py-10 border-t border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-start">
                    <p className="text-slate-300 text-sm sm:text-base">
                        Made with <span className="text-orange-400">♥</span> by{" "}
                        <span className="text-blue-400 font-bold">Eng: Hasan Tuffaha</span>
                    </p>
                    <p className="text-slate-500 text-xs sm:text-sm">
                        Frontend Developer
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/hasantuffaha0"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20
                        text-slate-300 hover:text-white hover:border-slate-300/50 hover:bg-slate-300/10
                        hover:scale-110 transition-all duration-300">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                    </a>

                    <a
                        href="https://wa.me/201011308020"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20
                        text-slate-300 hover:text-green-400 hover:border-green-500/50 hover:bg-green-500/10
                        hover:scale-110 transition-all duration-300">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.52 3.449C18.24 1.245 15.24.023 12.045.023 5.463.023.1 5.386.098 11.968c0 2.11.552 4.169 1.6 5.985L0 24l6.185-1.62a11.95 11.95 0 005.845 1.489h.005c6.581 0 11.946-5.365 11.949-11.947a11.87 11.87 0 00-3.464-8.473"/>
                        </svg>
                    </a>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-slate-500 text-xs sm:text-sm">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
                <p className="text-slate-600 text-xs">
                    Built with React & Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;