
function ExploreSection({ current, prevExplore, nextExplore, exploreItems, exploreIndex, setExploreIndex }) {
    return (
        <>
            <section className="flex flex-col items-center justify-center mt-16 mb-12 px-4 text-center">

                {/* Logo / Icon */}
                <img
                    src="/locales/assets/images/logo/groupe.png"
                    alt="logo"
                    className="w-20 md:w-24 mb-6"
                />

                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.1em] text-[#1f3555] font-normal">
                    QUE FAIRE À SAÏDIA
                </h2>

                {/* Subtitle */}
                <p className="text-xs md:text-lg text-[#1f3555] mt-2">
                    VUES, LUXE, SOUVENIRS
                </p>

                {/* Gold Line */}
                <div className="w-70 h-[2px] bg-[#c9a84c] mt-4 mb-8"></div>

            </section>
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
        </>
    )
}
export default ExploreSection;