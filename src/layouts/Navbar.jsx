import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `relative text-white text-sm font-semibold uppercase tracking-wide py-3 px-2 transition-all flex flex-col items-center
        
        after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
        after:h-[2.5px] after:bg-white after:rounded-[100%] after:transition-all after:duration-300
        
        ${isActive
                                        ? 'after:w-16'
                                        : 'after:w-0 hover:after:w-16'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile menu */}
            {open && (
                <ul className="lg:hidden flex flex-col bg-black/70 border-t border-gray-100 px-4 pb-3">
                    {links.map(link => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `block text-white font-semibold py-3 border-b transition-colors ${isActive ? 'border-[#c9a84c] text-[#c9a84c]' : 'border-gray-100'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default Navbar;