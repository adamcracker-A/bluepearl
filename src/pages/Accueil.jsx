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

    // Restaurant data - makes left content dynamic
    const restaurantData = [
        {
            id: 1,
            title: "Le Patio Restaurant",
            description: "Le Patio Restaurant vous accueille tout au long de la journée, sur sa terrasse, avec une offre raffinée de petit-déjeuner, déjeuner et dîner, pour une expérience culinaire élégante et conviviale du matin au soir.",
            image: "/locales/assets/a3.png",
            hours: [
                { label: "Petit-déjeuner", time: "07h30 – 10h30" },
                { label: "Déjeuner", time: "13h00 – 15h00" },
                { label: "Dîner", time: "19h30 – 22h00" }
            ],
            primaryButton: { text: "RÉSERVEZ", link: "#" },
            secondaryButton: { text: "PLUS DE DÉTAILS", link: "#" }
        },
        {
            id: 2,
            title: "La Terrasse Lounge",
            description: "Détendez-vous dans notre espace lounge en plein air avec une sélection de cocktails signature et tapas méditerranéens dans une ambiance feutrée.",
            image: "/locales/assets/a4.png",
            hours: [
                { label: "Ouverture", time: "10h00 – 00h00" },
                { label: "Happy Hour", time: "18h00 – 20h00" },
                { label: "Live Music", time: "21h00 – 23h30" }
            ],
            primaryButton: { text: "RÉSERVEZ", link: "#" },
            secondaryButton: { text: "PLUS DE DÉTAILS", link: "#" }
        },
        {
            id: 3,
            title: "Le Gourmet Étoilé",
            description: "Une expérience gastronomique exceptionnelle avec notre chef étoilé qui sublime les saveurs locales dans un cadre raffiné et intime.",
            image: "/locales/assets/a5.png",
            hours: [
                { label: "Dîner Service", time: "19h30 – 22h30" },
                { label: "Menu Dégustation", time: "Sur réservation" },
                { label: "Wine Pairing", time: "Disponible" }
            ],
            primaryButton: { text: "RÉSERVEZ", link: "#" },
            secondaryButton: { text: "PLUS DE DÉTAILS", link: "#" }
        }
    ];

    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);
    const currentRestaurant = restaurantData[currentRestaurantIndex];

    const nextRestaurant = () => {
        setCurrentRestaurantIndex((prev) => (prev === restaurantData.length - 1 ? 0 : prev + 1));
    };

    const prevRestaurant = () => {
        setCurrentRestaurantIndex((prev) => (prev === 0 ? restaurantData.length - 1 : prev - 1));
    };
    //activities  

    const activities = [
        {
            title: "CHANTER ENSEMBLE",
            subtitle: "Chanter ensemble",
            desc: "Musique live · Concert · Karaoké\nSpectacle de talents",
            button: "SING!",
            image: "/locales/assets/chanter.png"
        },
        {
            title: "ACCRO A LA FÊTE",
            subtitle: "Danse toute la nuit",
            desc: "Club de nuit · Soirée · Vie nocturne\nTournée des bars",
            button: "DANCE!",
            image: "/locales/assets/acro.png"
        },
        {
            title: "GAME ZONE",
            subtitle: "Prêt à gagner ?",
            desc: "Soirée Quiz · Team Building\nJeux de société",
            button: "PLAY!",
            image: "/locales/assets/games.png"
        }
    ];
    //explore slider
    const exploreItems = [
        {
            number: "01",
            title: "Évasion en Yacht",
            desc: "...",
            image: "/locales/assets/yacht.png",
            video: "/locales/assets/yacht.mp4"
        },
        {
            number: "02",
            title: "Plages Dorées",
            desc: "...",
            image: "/locales/assets/1stvideoph.png",
            video: "/locales/assets/beach.mp4"
        },
        {
            number: "03",
            title: "Nature & Forêts",
            desc: "...",
            image: "/locales/assets/forest.png",
            video: "/locales/assets/forest.mp4"
        },
        {
            number: "04",
            title: "Marina & Loisirs",
            desc: "...",
            image: "/locales/assets/marina.png",
            video: "/locales/assets/marina.mp4"
        }
    ];

    const [exploreIndex, setExploreIndex] = useState(0);
    const prevExplore = () => setExploreIndex((prev) => (prev === 0 ? exploreItems.length - 1 : prev - 1));
    const nextExplore = () => setExploreIndex((prev) => (prev === exploreItems.length - 1 ? 0 : prev + 1));
    const current = exploreItems[exploreIndex];
    const next = exploreItems[(exploreIndex + 1) % exploreItems.length];


    console.log("index:", exploreIndex)
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

            <hr className="border-[#c9a84c] border-t-2" /> <br />

            {/* Video Section */}
            <div className="relative w-full h-[400px] bg-black overflow-hidden">
                {/* Replace src with your real video path later */}
                <video
                    className="w-full h-full object-cover opacity-80"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/locales/assets/1stvideoph.png"
                >
                    <source src="/locales/assets/video.mp4" type="video/mp4" />
                </video>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center hover:bg-white/40 transition-colors">
                        <span className="text-white text-3xl ml-2">▶</span>
                    </button>
                </div>
            </div> <br />

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
                                    {/* Dark overlay (adjusted width for mobile/desktop) */}
                                    <div className="absolute top-0 left-0 bottom-0 w-[60%] sm:w-[45%] lg:w-[40%] bg-[#1a3c5e]/80 backdrop-blur-sm z-10"></div>

                                    {/* Content (constrained to overlay width) */}
                                    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between text-white z-20">
                                        <div className="w-[60%] sm:w-[45%] lg:w-[40%] pr-2">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300 line-clamp-2 leading-tight">{offer.month}</p>
                                            <p className="text-xs mt-2 text-gray-200">Discount</p>
                                            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-0.5">{offer.discount}</p>
                                            <p className="text-[10px] text-gray-300 mt-2 line-clamp-3 md:line-clamp-none">{offer.desc}</p>
                                        </div>
                                        <div className="w-[60%] sm:w-[45%] lg:w-[40%]">
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

            {/* Restaurant Section - Stacked Cards with Left Content */}
            {/* Restaurant Section - Dynamic Left Content, Stacked Right Images */}
            <section className="py-16 md:py-24 bg-[#faf8f5]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                        {/* LEFT CONTENT - DYNAMIC FROM DATA */}
                        <div className="lg:w-[45%] flex flex-col justify-center transition-all duration-500">
                            {/* Logo/Icon + Title */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[#c9a84c] text-xl">✦</span>
                                <h2 className="text-2xl md:text-3xl font-light text-[#1a3c5e]">
                                    {currentRestaurant.title}
                                </h2>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                                {currentRestaurant.description}
                            </p>

                            {/* Opening Hours - Dynamic */}
                            <div className="mb-8">
                                <h3 className="text-[#1a3c5e] font-semibold text-sm mb-3">Open Daily :</h3>
                                <ul className="space-y-2">
                                    {currentRestaurant.hours.map((hour, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                                            <span className="text-[#c9a84c]">→</span>
                                            <span>{hour.label} : {hour.time}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Buttons - Dynamic */}
                            <div className="flex flex-wrap gap-4">
                                <button className="flex items-center gap-2 px-6 py-3 border border-[#c9a84c] text-[#1a3c5e] text-xs font-bold tracking-wider hover:bg-[#c9a84c] hover:text-white transition-all duration-300 rounded-sm">
                                    {currentRestaurant.secondaryButton.text}
                                    <FaArrowRight className="text-sm" />
                                </button>
                                <button className="flex items-center gap-2 px-6 py-3 bg-[#c9a84c] text-white text-xs font-bold tracking-wider hover:bg-[#a8883a] transition-all duration-300 rounded-sm">
                                    {currentRestaurant.primaryButton.text}
                                    <FaArrowRight className="text-sm" />
                                </button>
                            </div>
                        </div>

                        {/* RIGHT SIDE - STACKED IMAGES - Responsive */}
                        <div className="w-full lg:w-[55%] relative h-[280px] sm:h-[350px] md:h-[420px] lg:h-[450px] order-1 lg:order-2 mb-8 lg:mb-0">
                            {restaurantData.map((restaurant, index) => {
                                const offset = index - currentRestaurantIndex;
                                const isVisible = offset >= 0 && offset < 3;

                                if (!isVisible) return null;

                                return (
                                    <div
                                        key={restaurant.id}
                                        onClick={() => setCurrentRestaurantIndex(index)}
                                        className={`
                                absolute left-0 right-0 transition-all duration-500 ease-out cursor-pointer
                                ${index === currentRestaurantIndex
                                                ? "top-0 scale-100 z-30 opacity-100"
                                                : index === currentRestaurantIndex + 1
                                                    ? "top-4 sm:top-6 scale-[0.97] sm:scale-95 z-20 opacity-80"
                                                    : "top-8 sm:top-12 scale-[0.94] sm:scale-90 z-10 opacity-60"
                                            }
                            `}
                                    >
                                        <div className="rounded-lg sm:rounded-xl overflow-hidden border border-gray-100 mx-auto w-[95%] sm:w-full max-w-[400px] sm:max-w-none">
                                            <img
                                                src={restaurant.image}
                                                alt={restaurant.title}
                                                className="w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] object-cover"
                                            />
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Navigation - Responsive */}
                            <div className="absolute -bottom-10 sm:-bottom-12 left-0 right-0 flex justify-center items-center gap-3 sm:gap-4">
                                <button
                                    onClick={prevRestaurant}
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#1a3c5e] hover:text-[#1a3c5e] transition-colors bg-white"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>

                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1a3c5e] text-white flex items-center justify-center text-[10px] sm:text-xs font-semibold">
                                    {currentRestaurantIndex + 1}/{restaurantData.length}
                                </div>

                                <button
                                    onClick={nextRestaurant}
                                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#1a3c5e] hover:text-[#1a3c5e] transition-colors bg-white"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex flex-col items-center justify-center mt-12 mb-8 px-4 gap-6">
                <img src="/locales/assets/groupe 3.png" alt="description" className="max-w-full h-auto" />
            </div>
            <section className="py-16 bg-[#f5f5f5]">
                <div className="container mx-auto px-4 relative">

                    {/* arrows */}
                    <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center">
                        ←
                    </button>

                    <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center">
                        →
                    </button>

                    {/* cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

                        {activities.map((item, index) => (
                            <div
                                key={index}
                                className="relative h-[420px] rounded-xl overflow-hidden group shadow-lg"
                            >

                                <img
                                    src={item.image}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                />

                                <div className="absolute inset-0 bg-black/40"></div>

                                <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-6">

                                    <h3 className="text-xl font-semibold tracking-widest">
                                        {item.title}
                                    </h3>

                                    <p className="italic text-sm mt-2">
                                        {item.subtitle}
                                    </p>

                                    <p className="text-xs mt-4 whitespace-pre-line opacity-90">
                                        {item.desc}
                                    </p>

                                    <button className="mt-6 border border-white px-5 py-2 rounded-full text-xs tracking-widest hover:bg-white hover:text-black transition">
                                        {item.button}
                                    </button>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <div className="flex flex-col items-center justify-center mt-12 mb-8 px-4 gap-6">
                <img src="/locales/assets/groupe 4.png" alt="description" className="max-w-full h-auto" />
            </div>
            {/* ✦ Explore Saidia Section */}
            <section className="py-16 px-4 bg-white overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-10">

                        {/* Left — Text */}
                        <div className="lg:w-2/5 shrink-0">
                            <div className="border-l-4 border-[#c9a84c] pl-4 mb-6">
                                <h2 className="text-5xl md:text-6xl font-black text-[#1a3c5e] leading-none tracking-tight">
                                    EXPLORE<br />SAIDIA
                                </h2>
                            </div>
                            <h4 className="text-lg font-semibold text-[#c9a84c] flex items-center gap-2 mb-3">
                                <span>✦</span> {current.title}
                            </h4>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
                                {current.desc}
                            </p>
                            <div className="flex gap-4">
                                <button className="border border-[#1a3c5e] text-[#1a3c5e] px-5 py-2.5 text-xs font-bold tracking-wider hover:bg-[#1a3c5e] hover:text-white transition-colors">
                                    PLUS DE DÉTAILS →
                                </button>
                                <button className="bg-[#c9a84c] text-white px-5 py-2.5 text-xs font-bold tracking-wider hover:bg-[#a8883a] transition-colors">
                                    RÉSERVEZ →
                                </button>
                            </div>
                        </div>

                        {/* Right — Image Slider */}
                        <div className="lg:w-3/5 relative h-[420px] overflow-hidden group">
                            
                            {/* Sliding Track */}
                            <div 
                                className="flex transition-transform duration-700 ease-in-out h-full"
                                style={{ transform: `translateX(-${exploreIndex * 100}%)` }}
                            >
                                {exploreItems.map((item, idx) => (
                                    <div key={idx} className="min-w-full h-full px-2 relative">
                                        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                                            {idx === 0 ? (
                                                <video
                                                    src={item.video}
                                                    className="w-full h-full object-cover"
                                                    autoPlay muted loop playsInline
                                                    poster={item.image}
                                                />
                                            ) : (
                                                <img 
                                                    src={item.image} 
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}
                                            {/* Gradient Overlay for better text visibility */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                            
                                            <span className="absolute bottom-6 left-6 text-7xl font-black text-white/20 leading-none select-none">
                                                {item.number}
                                            </span>

                                            {/* Play button indicator - only show for video */}
                                            {idx === 0 && (
                                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/50 flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                                                    <span className="text-white text-2xl ml-1">▶</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <button 
                                onClick={prevExplore}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-30 opacity-0 group-hover:opacity-100"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button 
                                onClick={nextExplore}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-30 opacity-0 group-hover:opacity-100"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>

                            {/* Info bar / progress */}
                            <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-30">
                                <div className="text-white font-bold tracking-widest text-xs bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                                    {exploreItems[exploreIndex].number} / 0{exploreItems.length}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-10">
                        {exploreItems.map((_, idx) => (
                            <button key={idx} onClick={() => setExploreIndex(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === exploreIndex ? 'bg-[#1a3c5e] scale-125' : 'bg-gray-300 hover:bg-gray-400'}`} />
                        ))}
                    </div>

                </div>
            </section>

            <hr className="border-[#c9a84c]" /> <br />
            {/* ✦ Banner CTA Section */}
            <section className="relative py-20 px-8 overflow-hidden"
                style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600) center/cover no-repeat' }}>

                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
                        Vivez un luxe inégalé, où chaque instant est pensé pour des souvenirs inoubliables.
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed mb-8">
                        Profitez du #LuxeInstantané !<br />
                        Sans attente, sans souci — des services exclusifs et des expériences inoubliables conçus pour chaque invité dès votre arrivée.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-white text-[#1a3c5e] px-6 py-3 text-sm font-bold tracking-wider hover:bg-gray-100 transition-colors">
                            RÉSERVEZ MAINTENANT
                        </button>
                        <button className="border border-white text-white px-6 py-3 text-sm font-bold tracking-wider hover:bg-white/10 transition-colors">
                            Explorez nos chambres
                        </button>
                    </div>
                </div>
            </section> <br />
            <hr className="border-[#c9a84c]" />
            {/* ✦ Newsletter Section */}
            <section className="py-16 px-4 bg-white relative">

                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-light text-[#1a3c5e]">
                        Inscrivez-vous à notre newsletter
                    </h2>
                </div>

                {/* Email input */}
                <div className="flex justify-center">
                    <div className="flex border border-gray-200 shadow-sm overflow-hidden w-full max-w-md">
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            className="flex-1 px-5 py-3 text-sm text-gray-500 outline-none"
                        />
                        <button className="bg-[#c9a84c] hover:bg-[#a8883a] text-white px-6 py-3 text-sm font-bold tracking-wider transition-colors whitespace-nowrap">
                            S'INSCRIRE
                        </button>
                    </div>
                </div>

                {/* Scroll to top button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#1a3c5e] text-[#c9a84c] flex items-center justify-center text-xl hover:bg-[#0f2c5c] transition-colors"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                    ↑
                </button>

            </section>
        </>
    );
}

export default Acceuil;