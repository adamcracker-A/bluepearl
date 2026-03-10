import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { to: '/', label: 'Accueil' },
        { to: '/chambres-suites', label: 'Chambres & Suites' },
        { to: '/restaurant', label: 'Restaurant' },
        { to: '/animation', label: 'Animation' },
        { to: '/que-faire', label: 'Que faire à Saïdia' },
    ];

    return (
        <nav className="w-full bg-transparent">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center lg:justify-center">

                {/* Hamburger — mobile only */}
                <button
                    className="lg:hidden text-white text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? '✕' : '☰'}
                </button>

                {/* Links — desktop */}
                <ul className="hidden lg:flex gap-8">
                    {links.map(link => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className="text-white text-sm font-semibold uppercase tracking-wide py-3 border-b-2 border-transparent hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile menu */}
            {open && (
                <ul className="lg:hidden flex flex-col bg-black/70 border-t border-gray-100 px-4 pb-3">
                    {links.map(link => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                onClick={() => setOpen(false)}
                                className="block text-white font-semibold py-3 border-b border-gray-100 hover:text-[#c9a84c] transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default Navbar;