import { useState } from 'react';
import { images, rooms, offers, restaurantData, activities, exploreItems } from '../constants/accueilData';
import HeroSlider from '../components/common/acceuil/Hero';
import SearchSection from '../components/common/acceuil/Searchsection';
import Quotesection from '../components/common/acceuil/Quotesection';
import VideoSection from '../components/common/acceuil/VideoSection';
import RoomSlider from '../components/common/acceuil/RoomSlider';

function Acceuil() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [roomIndex, setRoomIndex] = useState(0);
    const [offerIndex, setOfferIndex] = useState(0);
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);
    const [exploreIndex, setExploreIndex] = useState(0);

    // just logic, 
    const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextImage = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    const prevRoom = () => setRoomIndex((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
    const nextRoom = () => setRoomIndex((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));

    const visibleOffers = 3;
    const currentOffers = offers.slice(offerIndex, offerIndex + visibleOffers);
    const prevOffer = () => setOfferIndex((prev) => (prev === 0 ? offers.length - visibleOffers : prev - 1));
    const nextOffer = () => setOfferIndex((prev) => (prev >= offers.length - visibleOffers ? 0 : prev + 1));

    const currentRestaurant = restaurantData[currentRestaurantIndex];
    const prevRestaurant = () => setCurrentRestaurantIndex((prev) => (prev === 0 ? restaurantData.length - 1 : prev - 1));
    const nextRestaurant = () => setCurrentRestaurantIndex((prev) => (prev === restaurantData.length - 1 ? 0 : prev + 1));

    const current = exploreItems[exploreIndex];
    const prevExplore = () => setExploreIndex((prev) => (prev === 0 ? exploreItems.length - 1 : prev - 1));
    const nextExplore = () => setExploreIndex((prev) => (prev === exploreItems.length - 1 ? 0 : prev + 1));

    return (
        <>
            <HeroSlider
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                prevImage={prevImage}
                nextImage={nextImage}
            />
            <SearchSection />

            <Quotesection />

            <VideoSection />
            {/* Chambres titres*/}
            <div className="flex flex-col items-center justify-center mt-12 mb-8 px-4 gap-6">
                <img src="/locales/assets/groupe 1.png" alt="description" className="max-w-full h-auto" />
            </div>

            {/* Room Slider */}
            <RoomSlider
                roomIndex={roomIndex}
                setRoomIndex={setRoomIndex}
                prevRoom={prevRoom}
                nextRoom={nextRoom}
                rooms={rooms}
            />

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

            {/* Restaurant Section - Dynamic Content */}
            <section className="py-16 md:py-24 bg-[#faf8f5]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="relative max-w-5xl mx-auto">

                        {/* Back card 1 */}
                        <div className="absolute top-10 left-0 w-full h-full bg-gray-200 rounded-xl"></div>

                        {/* Back card 2 */}
                        <div className="absolute top-5 left-0 w-full h-full bg-gray-100 rounded-xl"></div>

                        {/* Main Card */}
                        <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">

                            {/* Left Side - Content */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                                <h4 className="text-[#c9a84c] font-bold tracking-widest text-[10px] mb-3 uppercase flex items-center gap-2">
                                    <img src="/locales/assets/star.png" alt="icon" className="w-4 h-4 object-contain" /> EXPÉRIENCE CULINAIRE
                                </h4>
                                <h2 className="text-3xl md:text-4xl font-bold text-[#1a3c5e] mb-6 leading-tight">
                                    {currentRestaurant.title}
                                </h2>

                                <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                                    {currentRestaurant.description}
                                </p>

                                <div className="space-y-4 mb-10">
                                    {currentRestaurant.hours.map((hour, idx) => (
                                        <div key={idx} className="flex justify-between items-center border-b border-gray-100 pb-2">
                                            <span className="font-bold text-[#1a3c5e] text-[11px] uppercase tracking-wider">{hour.label}</span>
                                            <span className="text-gray-500 text-xs font-medium">{hour.time}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-[#c9a84c] text-white px-7 py-3.5 text-[10px] font-bold tracking-widest hover:bg-[#a8883a] transition-all duration-300 rounded-sm shadow-lg uppercase">
                                        {currentRestaurant.primaryButton.text} →
                                    </button>
                                    <button className="border border-[#1a3c5e] text-[#1a3c5e] px-7 py-3.5 text-[10px] font-bold tracking-widest hover:bg-[#1a3c5e] hover:text-white transition-all duration-300 rounded-sm uppercase">
                                        {currentRestaurant.secondaryButton.text}
                                    </button>
                                </div>
                            </div>

                            {/* Right Side - Image */}
                            <div className="w-full md:w-1/2 relative min-h-[350px] md:min-h-full overflow-hidden">
                                <img
                                    key={currentRestaurantIndex}
                                    src={currentRestaurant.image}
                                    alt={currentRestaurant.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out hover:scale-110 animate-fadeIn"
                                />

                            </div>

                        </div>

                    </div>

                    {/* Navigation */}
                    <div className="flex justify-center items-center gap-3 sm:gap-4 mt-12 sm:mt-16">
                        <button
                            onClick={prevRestaurant}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#1a3c5e] hover:text-[#1a3c5e] transition-colors bg-white shadow-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1a3c5e] text-white flex items-center justify-center text-[10px] sm:text-xs font-semibold shadow-md">
                            {currentRestaurantIndex + 1}/{restaurantData.length}
                        </div>

                        <button
                            onClick={nextRestaurant}
                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#1a3c5e] hover:text-[#1a3c5e] transition-colors bg-white shadow-sm"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
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
                                <img src="/locales/assets/star.png" alt="icon" className="w-4 h-4 object-contain" /> {current.title}
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