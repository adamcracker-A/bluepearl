import { useState } from 'react';
import { FaUser, FaBath, FaWifi, FaTv, FaCoffee, FaSnowflake } from "react-icons/fa";

function Acceuil() {
    // Array of images for the slider
    const images = [
        "/locales/assets/Rectangle 4193.png",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2000"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // Room slider
    const rooms = [
        {
            name: "Ambassador Suite",
            description:
                "Chaque espace reflète mon désir de vous accueillir dans un univers où le luxe se fait personnel, apaisant et naturellement raffiné.",
            image: "/locales/assets/groupe 1.png", // your room image
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
            description:
                "Une autre suite élégante avec tout le confort dont vous rêvez.",
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

    return (
        <>
            <div
                className="w-full relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat pt-28 sm:pt-32 md:pt-36 px-4 sm:px-8 transition-all duration-500 ease-in-out"
                style={{
                    backgroundImage: `url('${images[currentIndex]}')`,
                }}
            >
                {/* Slider Navigation Buttons */}
                <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-[65%] sm:top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 rounded-full transition-colors z-20"
                    aria-label="Previous image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-8 sm:h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-[65%] sm:top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 rounded-full transition-colors z-20"
                    aria-label="Next image"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-8 sm:h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                {/* Content goes here on top of the background image */}
                <div className="relative z-10 text-center sm:text-left mx-auto sm:mx-0 max-w-4xl">
                    <p className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">Une Expérience Signée Excellence</p>
                    <p className="text-lg sm:text-xl text-white mt-2 drop-shadow-md">Un bien-être qui va au-delà</p>
                </div>

                {/* Indicator Dots */}
                <div className="absolute bottom-9 sm:bottom-12 left-0 right-0 flex justify-center gap-2 z-20">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                        />
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
                                <option>1 Chambre</option>
                                <option>2 Chambres</option>
                                <option>3 Chambres</option>
                            </select>
                        </div>
                        <div className="flex-1 w-full lg:w-auto">
                            <label className="block text-[10px] xl:text-xs font-bold uppercase text-[#1a3c5e] tracking-wider mb-1 whitespace-nowrap">Adultes</label>
                            <select className="w-full border border-gray-200 rounded px-2 py-2 text-xs xl:text-sm">
                                <option>1 Adulte</option>
                                <option>2 Adultes</option>
                                <option>3 Adultes</option>
                            </select>
                        </div>
                        <div className="flex-1 w-full lg:w-auto">
                            <label className="block text-[10px] xl:text-xs font-bold uppercase text-[#1a3c5e] tracking-wider mb-1 whitespace-nowrap">Enfants</label>
                            <select className="w-full border border-gray-200 rounded px-2 py-2 text-xs xl:text-sm">
                                <option>1 Enfant</option>
                                <option>2 Enfants</option>
                                <option>3 Enfants</option>
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
            <div className="flex flex-col items-center justify-center mt-12 mb-8 px-4 gap-6">
                <img src="/locales/assets/groupe 1.png" alt="description" className="max-w-full h-auto" />
                <p className="text-center text-sm md:text-base lg:text-lg max-w-4xl text-gray-700 italic font-medium leading-relaxed">“ Chaque espace reflète mon désir de satisfaire pleinement mes invités, en offrant un univers où confort, raffinement et bien-être se conjuguent, permettant à chacun de profiter pleinement de chaque instant ”</p>
            </div>
            <hr className="border-[#c9a84c] border-t-2" /> <br />

            {/* the video should be here*/}

            <hr className="border-[#c9a84c] border-t-2" />
            <div className="flex flex-col items-center justify-center mt-12 mb-8 px-4 gap-6">
                <img src="/locales/assets/groupe 1.png" alt="description" className="max-w-full h-auto" />
            </div>

            {/* Room Slider */}
            <section className="bg-[#0f2c5c] py-16 md:py-24 mt-12">
                <div className="container max-w-5xl mx-auto px-4 sm:px-12 relative">

                    {/* Top Filters */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <button className="border border-gray-400 text-white px-6 py-2 text-xs sm:text-sm tracking-widest hover:bg-white/10 transition-colors">
                            SUITES ▼
                        </button>
                        <button className="border border-gray-400 text-white px-6 py-2 text-xs sm:text-sm tracking-widest hover:bg-white/10 transition-colors">
                            SÉLECTIONNEZ VOTRE VUE ▼
                        </button>
                    </div>

                    {/* Slider Content Area */}
                    <div className="flex flex-col lg:flex-row items-center relative">

                        {/* INFO CARD (Stacks below image on mobile, overlaps on desktop) */}
                        <div className="w-full lg:w-[45%] bg-[#efefef] p-6 sm:p-10 shadow-2xl relative z-10 order-2 lg:order-1 mt-[-2rem] lg:mt-0 lg:-mr-12 rounded-sm">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-3 text-[#1a3c5e]">
                                <span className="text-[#c9a84c] text-xl">✦</span>
                                {currentRoom.name}
                            </h3>
                            <hr className="mb-5 border-gray-300" />
                            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                                {currentRoom.description}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 text-gray-700 text-sm mb-8 font-medium">
                                {currentRoom.icons.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <span className="text-[#c9a84c] text-lg">{item.icon}</span>
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="border border-[#c9a84c] text-[#0f2c5c] px-5 py-2.5 text-xs font-bold tracking-wider hover:bg-[#c9a84c] hover:text-white transition-colors text-center w-full sm:w-auto">
                                    PLUS DE DÉTAILS →
                                </button>
                                <button className="bg-[#c9a84c] text-white px-5 py-2.5 text-xs font-bold tracking-wider hover:bg-[#a8883a] transition-colors text-center w-full sm:w-auto">
                                    RÉSERVEZ →
                                </button>
                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className="w-full lg:w-[65%] relative order-1 lg:order-2">
                            <img
                                src={currentRoom.image}
                                alt={currentRoom.name}
                                className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover rounded-sm shadow-lg"
                            />

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevRoom}
                                className="absolute left-2 lg:-left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors z-20 backdrop-blur-sm"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button
                                onClick={nextRoom}
                                className="absolute right-2 lg:-right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors z-20 backdrop-blur-sm"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Indicator Dots */}
                    <div className="flex justify-center gap-3 mt-10">
                        {rooms.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setRoomIndex(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === roomIndex ? "bg-[#c9a84c] scale-125" : "bg-white/40 hover:bg-white/70"}`}
                                aria-label={`View room ${idx + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </section>
        </>

    );
}

export default Acceuil;
