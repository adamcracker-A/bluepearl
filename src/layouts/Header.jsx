import { useState, useRef, useEffect } from 'react';

function Header() {
    const [lang, setLang] = useState({ value: 'FR (€)', flag: '/locales/assets/FR.png', label: 'FR (€)' });
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { value: 'FR (€)', flag: '/locales/assets/FR.png', label: 'FR (€)' },
        { value: 'EN ($)', flag: '/locales/assets/EN.png', label: 'EN ($)' },
        { value: 'AR (MAD)', flag: '/locales/assets/AR.png', label: 'AR (MAD)' },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="bg-transparent text-white">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">

                {/* Left — Hamburger Menu */}
                <div className="flex-1">
                    <button className="flex items-center gap-2 border border-[#4a90b8] px-3 py-2">
                        <div className="flex flex-col gap-[5px]">
                            <img src="/locales/assets/menu.png" alt="menu" className="w-5 h-5 object-contain" />
                        </div>
                        <span className="text-white text-xs tracking-widest font-medium">MENU</span>
                    </button>
                </div>
                {/* Center — Logo image */}
                <div className="flex-1 flex justify-center">
                    <img src="/locales/assets/Frame.png" alt="Blue Pearl Logo" className="h-12 sm:h-16 object-contain" />
                </div>

                {/* Right side */}
                <div className="flex-1 flex items-center justify-end gap-2 sm:gap-4">
                    {/* Custom language dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-2 bg-transparent text-white border border-white/40 rounded px-2 sm:px-3 py-1 text-sm cursor-pointer hover:border-white/70 transition-colors"
                        >
                            <img src={lang.flag} alt="" className="w-5 h-4 object-cover rounded-sm" />
                            <span className="hidden sm:inline">{lang.label}</span>
                            <span className="text-xs">▾</span>
                        </button>

                        {open && (
                            <ul className="absolute right-0 mt-1 bg-[#1a3c5e] border border-white/20 rounded shadow-lg min-w-[140px] z-50">
                                {languages.map((l) => (
                                    <li key={l.value}>
                                        <button
                                            onClick={() => { setLang(l); setOpen(false); }}
                                            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                                        >
                                            <img src={l.flag} alt="" className="w-5 h-4 object-cover rounded-sm" />
                                            {l.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <button className="bg-white hover:bg-[#a8883a] hover:text-white font-medium text-[#a8883a] px-3 sm:px-5 py-2 text-xs sm:text-sm transition-colors whitespace-nowrap">
                        Réserver →
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Header;