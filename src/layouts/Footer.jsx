import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white">

            {/* Top — Logo + Payment methods */}
            <div className="border-b border-white/10 py-10 text-center">
                {/* Logo */}
                <div className="flex flex-col items-center mb-8">
                    <div className="flex items-center gap-4 w-full max-w-2xl justify-center px-4">
                        <div className="h-[1px] w-32 md:w-64 bg-[#c9a84c] shrink-0"></div>
                        <img src="/locales/assets/groupe 0.png" alt="initial" className="shrink-0" />
                        <div className="h-[1px] w-32 md:w-64 bg-[#c9a84c] shrink-0"></div>
                    </div>
                </div>

                {/* Payment methods — replace src with your real images */}
                <div className="flex flex-wrap justify-center gap-3">
                    {[
                        { name: 'Visa', src: '/locales/assets/images/payment/visa.png' },
                        { name: 'Diners', src: '/locales/assets/images/payment/diners.png' },
                        { name: 'Mastercard', src: '/locales/assets/images/payment/mastercard.png' },
                        { name: 'Stripe', src: '/locales/assets/images/payment/stripe.png' },
                        { name: 'PayPal', src: '/locales/assets/images/payment/paypal.png' },
                        { name: 'Google Pay', src: '/locales/assets/images/payment/google pay.png' },
                        { name: 'Apple Pay', src: '/locales/assets/images/payment/apple pay.png' },
                    ].map((p) => (
                        <div key={p.name} className="rounded px-3 py-2 flex items-center justify-center h-10 w-16">
                            {/* Replace with <img src={p.src} alt={p.name} className="h-5 object-contain" /> once you have the images */}
                            <img src={p.src} alt={p.name} className="h-7 object-contain cursor-pointer" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Middle — Links */}
            <div className="container mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

                {/* Brand */}
                <div className="lg:col-span-1">
                    <h3 className="text-sm font-bold tracking-widest text-[#c9a84c] mb-1">BLUE PEARL</h3>
                    <p className="text-xs tracking-widest text-gray-400 mb-4">BEACH</p>
                    <p className="text-gray-400 text-xs leading-relaxed">
                        Séjourner au Blue Pearl Beach Hotel offre un luxe inégalé avec ses chambres et suites élégantes. Situé le long des plages immaculées de Saïdia, l'hôtel allie des intérieurs raffinés à des vues à couper le souffle sur la mer Méditerranée, des jardins luxuriants et le parcours de golf.
                    </p>
                </div>

                {/* Explore */}
                <div>
                    <h4 className="text-sm font-bold text-white mb-5">Explore</h4>
                    <ul className="space-y-3 text-gray-400 text-xs">
                        {['Trending Destinations', 'Summer Hotspots', 'Winter Getaways', 'Weekend Deals', 'Family-Friendly Stays'].map(item => (
                            <li key={item}><Link to="/" className="hover:text-[#c9a84c] transition-colors">{item}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Terms */}
                <div>
                    <h4 className="text-sm font-bold text-[#c9a84c] mb-5">Terms & Conditions</h4>
                    <ul className="space-y-3 text-gray-400 text-xs">
                        {['Hotels', 'Apartments', 'Villas', 'Cabins', 'Glamping'].map(item => (
                            <li key={item}><Link to="/" className="hover:text-[#c9a84c] transition-colors">{item}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="text-sm font-bold text-white mb-5">Support</h4>
                    <ul className="space-y-3 text-gray-400 text-xs">
                        {['Help Centre', 'Live Chat Support', 'FAQs', 'Contact Us'].map(item => (
                            <li key={item}><Link to="/" className="hover:text-[#c9a84c] transition-colors">{item}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Get In Touch */}
                <div>
                    <h4 className="text-sm font-bold text-white mb-5">Get In Touch</h4>
                    <p className="text-gray-400 text-xs mb-2">+1 (800) 123-456</p>
                    <p className="text-gray-400 text-xs mb-6">support@bluepearl.com</p>

                    {/* Social media — replace with your images */}
                    <div className="flex gap-3">
                        {[
                            { name: 'fb', src: '/locales/assets/images/media/facebook.png' },
                            { name: 'tk', src: '/locales/assets/images/media/tiktok.png' },
                            { name: 'ig', src: '/locales/assets/images/media/insta.png' },
                            { name: 'yt', src: '/locales/assets/images/media/youtube.png' },
                        ].map((s) => (
                            <a key={s.name} href="#"
                                className="w-9 h-9 rounded-full hover:bg-[#c9a84c] flex items-center justify-center transition-colors">
                                {/* Replace with <img src={s.src} alt={s.name} className="w-4 h-4 object-contain" /> */}
                                <img src={s.src} alt={s.name} className="w-8 h-8 object-contain" />
                            </a>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10 py-5 px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                <div className="flex items-center gap-2">
                    {/* logo image */}
                    <img src="/locales/assets/soft cactus.png" alt="SOFT CACTUS" />
                </div>
                <p className="text-gray-500 text-xs">© 2026 Tous les droits sont réservés pour SOFT CACTUS</p>
            </div>

        </footer>
    );
}

export default Footer;