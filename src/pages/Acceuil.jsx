import { useState } from 'react';
import { FaUser, FaBath, FaWifi, FaTv, FaCoffee, FaSnowflake, FaArrowRight } from "react-icons/fa";

function Acceuil() {
    //head slider

    const images = [
        "/locales/assets/Rectangle 4193.png",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2000"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextImage = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    //chambres slider

    const rooms = [
        {
            name: "Ambassador Suite",
            description: "Chaque espace reflète mon désir de vous accueillir dans un univers où le luxe se fait personnel, apaisant et naturellement raffiné.",
            image: "/locales/assets/pic 1 offre.png",
            icons: [
                { icon: <FaUser />, label: "1-3 Personnes" },
                { icon: <FaBath />, label: "Baignoire" },
                { icon: <FaCoffee />, label: "Petit-déjeuner" },
                { icon: <FaTv />, label: "Smart TV" },
                { icon: <FaWifi />, label: "Free Wifi" },
                { icon: <FaSnowflake />, label: "Air Conditioner" },
            ],
        },
        {
            name: "Deluxe Suite",
            description: "Une autre suite élégante avec tout le confort dont vous rêvez.",
            image: "/locales/assets/groupe 1.png",
            icons: [
                { icon: <FaUser />, label: "1-2 Personnes" },
                { icon: <FaBath />, label: "Douche" },
                { icon: <FaCoffee />, label: "Petit-déjeuner" },
                { icon: <FaTv />, label: "Smart TV" },
                { icon: <FaWifi />, label: "Free Wifi" },
                { icon: <FaSnowflake />, label: "Air Conditioner" },
            ],
        },
    ];

    const [roomIndex, setRoomIndex] = useState(0);
    const prevRoom = () => setRoomIndex((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
    const nextRoom = () => setRoomIndex((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));
    const currentRoom = rooms[roomIndex];

    // Offers slider
    const offers = [
        {
            month: "Mois de Février",
            discount: "5%",
            desc: "Lorem ipsum dolor",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop",
        },
        {
            month: "Mois de Novembre",
            discount: "10%",
            desc: "Lorem ipsum dolor",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop",
        },
        {
            month: "Mois de Décembre",
            discount: "15%",
            desc: "Lorem ipsum dolor",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop",
        },
        {
            month: "Mois de Janvier",
            discount: "20%",
            desc: "Lorem ipsum dolor",
            image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&auto=format&fit=crop",
        },
    ];

    const [offerIndex, setOfferIndex] = useState(0);
    const visibleOffers = 3;
    const prevOffer = () => setOfferIndex((prev) => (prev === 0 ? offers.length - visibleOffers : prev - 1));
    const nextOffer = () => setOfferIndex((prev) => (prev >= offers.length - visibleOffers ? 0 : prev + 1));
    const currentOffers = offers.slice(offerIndex, offerIndex + visibleOffers);

    //restaurant slider

    const restaurantImages = [
        "/locales/assets/a3.png",
        "/locales/assets/a4.png",
        "/locales/assets/a5.png"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextSlide = () => {
        setCurrentImageIndex((prev) => (prev === restaurantImages.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? restaurantImages.length - 1 : prev - 1));
    };

    return (
        <>
            {/* Hero Slider */}
            <div
                className="w-full relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat pt-28 sm:pt-32 md:pt-36 px-4 sm:px-8 transition-all duration-500 ease-in-out"
                style={{ backgroundImage: `url('${images[currentIndex]}')` }}
            >
                <button onClick={prevImage} className="absolute left-2 sm:left-4 top-[65%] sm:top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 rounded-full transition-colors z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-8 sm:h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button onClick={nextImage} className="absolute right-2 sm:right-4 top-[65%] sm:top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 rounded-full transition-colors z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-8 sm:h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
                <div className="relative z-10 text-center sm:text-left mx-auto sm:mx-0 max-w-4xl">
                    <p className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">Une Expérience Signée Excellence</p>
                    <p className="text-lg sm:text-xl text-white mt-2 drop-shadow-md">Un bien-être qui va au-delà</p>
                </div>
                <div className="absolute bottom-9 sm:bottom-12 left-0 right-0 flex justify-center gap-2 z-20">
                    {images.map((_, idx) => (
                        <button key={idx} onClick={() => setCurrentIndex(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`} />
                    ))}
                </div>
            </div>

            {/* Search Bar */}
            <div className="container mx-auto px-4">
                <div className="bg-white shadow-lg border-t-4 border-[#c9a84c] rounded -mt-10 relative z-10 p-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-end justify-between w-full">
                        <div className="flex-1 w-full lg:w-auto">
                            <label className="block text-[10px] xl:text-xs font-bold uppercase text-[#1a3c5e] tracking-wider mb-1 whitespace-nowrap">Localisation</label>
                            <input type="text" className="w-full border border-gray-200 rounded px-2 py-2 text-xs xl:text-sm" value="Saïdia, Morocco" readOnly />
                        </div>
                        <div className="flex-[1.5] w-full lg:w-auto">
                            <label className="block text-[10px] xl:text-xs font-bold uppercase text-[#1a3c5e] tracking-wider mb-1 whitespace-nowrap">Arrivée / Départ</label>
                            <input type="date" className="w-full border border-gray-200 rounded px-2 py-2 text-xs xl:text-sm" />
                        </div>
                        <div className="flex-1 w-full lg:w-auto">
                            <label className="block text-[10px] xl:text-xs font-bold uppercase text-[#1a3c5e] tracking-wider mb-1 whitespace-nowrap">Chambres</label>
                            <select className="w-full border border-gray-200 rounded px-2 py-2 text-xs xl:text-sm">
                                <option>1 Chambre</option><option>2 Chambres</option><option>3 Chambres</option>
                            </select>
                        </div>
                        <div className="flex-1 w-full lg:w-auto">
                            <label className="block text-[10px] xl:text-xs font-bold uppercase text-[#1a3c5e] tracking-wider mb-1 whitespace-nowrap">Adultes</label>
                            <select className="w-full border border-gray-200 rounded px-2 py-2 text-xs xl:text-sm">
                                <option>1 Adulte</option><option>2 Adultes</option><option>3 Adultes</option>
                            </select>
                        </div>
                        <div className="flex-1 w-full lg:w-auto">
                            <label className="block text-[10px] xl:text-xs font-bold uppercase text-[#1a3c5e] tracking-wider mb-1 whitespace-nowrap">Enfants</label>
                            <select className="w-full border border-gray-200 rounded px-2 py-2 text-xs xl:text-sm">
                                <option>1 Enfant</option><option>2 Enfants</option><option>3 Enfants</option>
                            </select>
                        </div>
                        <div className="flex-1 w-full lg:w-auto">
                            <label className="block text-[10px] xl:text-xs font-bold uppercase text-[#1a3c5e] tracking-wider mb-1 whitespace-nowrap">CODE PROMO</label>
                            <input type="text" className="w-full border border-gray-200 rounded px-2 py-2 text-xs xl:text-sm" />
                        </div>
                        <div className="w-full lg:w-auto shrink-0">
                            <button className="w-full bg-[#c9a84c] hover:bg-[#a8883a] text-white py-[9px] px-4 rounded transition-colors font-semibold text-xs xl:text-sm whitespace-nowrap">
                                Voir les disponibilités →
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote / Image */}
            <div className="flex flex-col items-center justify-center mt-12 mb-8 px-4 gap-6">
                <img src="/locales/assets/groupe 1.png" alt="description" className="max-w-full h-auto" />
                <p className="text-center text-sm md:text-base lg:text-lg max-w-4xl text-gray-700 italic font-medium leading-relaxed">
                    " Chaque espace reflète mon désir de satisfaire pleinement mes invités, en offrant un univers où confort, raffinement et bien-être se conjuguent "
                </p>
            </div>

            <hr className="border-[#c9a84c] border-t-2" />
            {/* Video placeholder */}
            <hr className="border-[#c9a84c] border-t-2" />

            <div className="flex flex-col items-center justify-center mt-12 mb-8 px-4 gap-6">
                <img src="/locales/assets/groupe 1.png" alt="description" className="max-w-full h-auto" />
            </div>

            {/* Room Slider */}
            <section className="bg-[#0f2c5c] py-16 md:py-24 mt-12">
                <div className="container max-w-5xl mx-auto px-4 sm:px-12 relative">
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <button className="border border-gray-400 text-white px-6 py-2 text-xs sm:text-sm tracking-widest hover:bg-white/10 transition-colors">SUITES ▼</button>
                        <button className="border border-gray-400 text-white px-6 py-2 text-xs sm:text-sm tracking-widest hover:bg-white/10 transition-colors">SÉLECTIONNEZ VOTRE VUE ▼</button>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center relative">
                        <div className="w-full lg:w-[45%] bg-[#efefef] p-6 sm:p-10 shadow-2xl relative z-10 order-2 lg:order-1 mt-[-2rem] lg:mt-0 lg:-mr-12 rounded-sm">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-3 text-[#1a3c5e]">
                                <span className="text-[#c9a84c] text-xl">✦</span>
                                {currentRoom.name}
                            </h3>
                            <hr className="mb-5 border-gray-300" />
                            <p className="text-sm text-gray-600 mb-8 leading-relaxed">{currentRoom.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 text-gray-700 text-sm mb-8 font-medium">
                                {currentRoom.icons.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <span className="text-[#c9a84c] text-lg">{item.icon}</span>
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="border border-[#c9a84c] text-[#0f2c5c] px-5 py-2.5 text-xs font-bold tracking-wider hover:bg-[#c9a84c] hover:text-white transition-colors w-full sm:w-auto">PLUS DE DÉTAILS →</button>
                                <button className="bg-[#c9a84c] text-white px-5 py-2.5 text-xs font-bold tracking-wider hover:bg-[#a8883a] transition-colors w-full sm:w-auto">RÉSERVEZ →</button>
                            </div>
                        </div>
                        <div className="w-full lg:w-[65%] relative order-1 lg:order-2">
                            <img src={currentRoom.image} alt={currentRoom.name} className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover rounded-sm shadow-lg" />
                            <button onClick={prevRoom} className="absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors z-20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button onClick={nextRoom} className="absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors z-20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center gap-3 mt-10">
                        {rooms.map((_, idx) => (
                            <button key={idx} onClick={() => setRoomIndex(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === roomIndex ? "bg-[#c9a84c] scale-125" : "bg-white/40 hover:bg-white/70"}`} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ✦ Offres Exclusives Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-10 items-center">

                        {/* Left text + arrows */}
                        <div className="lg:w-1/4 shrink-0">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1a3c5e] leading-snug mb-4">
                                Offres Exclusives<br />pour Vous
                            </h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Profitez de nos offres exclusives et vivez un séjour unique, alliant confort, luxe et moments inoubliables.
                            </p>
                            <div className="flex gap-3">
                                <button onClick={prevOffer}
                                    className="w-9 h-9 bg-[#c9a84c] border border-[#1a3c5e] text-[#1a3c5e] flex items-center justify-center hover:bg-[#a8883a] hover:text-white transition-colors rounded-sm">
                                    ‹
                                </button>
                                <button onClick={nextOffer}
                                    className="w-9 h-9 bg-[#c9a84c] border border-[#1a3c5e] text-[#1a3c5e] flex items-center justify-center hover:bg-[#a8883a] hover:text-white transition-colors rounded-sm">
                                    ›
                                </button>
                            </div>
                        </div>

                        {/* Offer Cards */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full overflow-hidden">
                            {currentOffers.map((offer, i) => (
                                <div key={i} className="relative flex-1 min-w-0 rounded overflow-hidden shadow-md group">
                                    {/* Background image */}
                                    <img
                                        src={offer.image}
                                        alt={offer.month}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Dark overlay (left 40%) */}
                                    <div className="absolute top-0 left-0 bottom-0 w-[40%] bg-[#1a3c5e]/80 backdrop-blur-sm z-10"></div>

                                    {/* Content (constrained to 40% width) */}
                                    <div className="absolute inset-0 p-5 flex flex-col justify-between text-white z-20">
                                        <div className="w-[40%] pr-2">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300 line-clamp-2 leading-tight">{offer.month}</p>
                                            <p className="text-xs mt-2 text-gray-200">Discount</p>
                                            <p className="text-3xl md:text-4xl font-bold text-white mt-0.5">{offer.discount}</p>
                                            <p className="text-[10px] text-gray-300 mt-2 line-clamp-3">{offer.desc}</p>
                                        </div>
                                        <div className="w-[40%]">
                                            <button className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-white border-b border-[#c9a84c] pb-1 w-fit hover:text-[#c9a84c] transition-colors whitespace-nowrap">
                                                RÉSERVEZ →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
            <div className="flex flex-col items-center justify-center mt-12 mb-8 px-4 gap-6">
                <img src="/locales/assets/groupe 2.png" alt="description" className="max-w-full h-auto" />
            </div>
            <section className="py-16 md:py-24 bg-[#faf8f5]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

                        {/* Left Content */}
                        <div className="lg:w-[45%] flex flex-col justify-center">
                            {/* Logo/Icon */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[#c9a84c] text-2xl">✦</span>
                                <h2 className="text-2xl md:text-3xl font-light text-[#1a3c5e]">
                                    Le Patio Restaurant
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                                Le Patio Restaurant vous accueille tout au long de la journée, sur sa terrasse,
                                avec une offre raffinée de petit-déjeuner, déjeuner et dîner, pour une expérience
                                culinaire élégante et conviviale du matin au soir.
                            </p>

                            {/* Opening Hours */}
                            <div className="mb-8">
                                <h3 className="text-[#1a3c5e] font-semibold text-sm mb-3">Open Daily :</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-gray-600 text-sm">
                                        <span className="text-[#c9a84c]">→</span>
                                        <span>Petit-déjeuner : 07h30 – 10h30</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-600 text-sm">
                                        <span className="text-[#c9a84c]">→</span>
                                        <span>Déjeuner : 13h00 – 15h00</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-gray-600 text-sm">
                                        <span className="text-[#c9a84c]">→</span>
                                        <span>Dîner : 19h30 – 22h00</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4">
                                <button className="flex items-center gap-2 px-6 py-3 border border-[#c9a84c] text-[#1a3c5e] text-xs font-bold tracking-wider hover:bg-[#c9a84c] hover:text-white transition-all duration-300 rounded-sm">
                                    PLUS DE DÉTAILS
                                    <FaArrowRight className="text-sm" />
                                </button>
                                <button className="flex items-center gap-2 px-6 py-3 bg-[#c9a84c] text-white text-xs font-bold tracking-wider hover:bg-[#a8883a] transition-all duration-300 rounded-sm">
                                    RÉSERVEZ
                                    <FaArrowRight className="text-sm" />
                                </button>
                            </div>
                        </div>

                        {/* Right Image Carousel */}
                        <div className="lg:w-[55%] relative">
                            {/* Main Image */}
                            <div className="relative overflow-hidden rounded-lg shadow-2xl">
                                <img
                                    src={restaurantImages[currentImageIndex]}
                                    alt="Le Patio Restaurant"
                                    className="w-full h-[400px] md:h-[450px] object-cover transition-transform duration-500"
                                />

                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Stacked Images Effect (Bottom) */}
                            <div className="absolute -bottom-4 left-4 right-4 flex gap-2">
                                {restaurantImages.map((img, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-2 flex-1 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-[#1a3c5e]' : 'bg-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center gap-4 mt-12">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#1a3c5e] hover:text-[#1a3c5e] transition-colors"
                        >
                            <svg xmlns="/locales/assets/a4.png" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <div className="w-10 h-10 rounded-full bg-[#1a3c5e] text-white flex items-center justify-center text-xs font-semibold">
                            {currentImageIndex + 1}/{restaurantImages.length}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#1a3c5e] hover:text-[#1a3c5e] transition-colors"
                        >
                            <svg xmlns="/locales/assets/a5.png" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Acceuil;