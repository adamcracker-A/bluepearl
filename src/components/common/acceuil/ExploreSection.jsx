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

                        {/* Right — Peek Slider */}
                        <div className="lg:w-3/5 relative h-[420px] group">

                            {(() => {
                                const total = exploreItems.length;
                                const adjacentIdx = (exploreIndex + 1) % total;
                                const centerItem = exploreItems[exploreIndex];
                                const adjacentItem = exploreItems[adjacentIdx];

                                const renderCard = (item, position) => {
                                    const isCenter = position === "center";
                                    const isLeft = position === "left";

                                    const style = isCenter ? {
                                        left: "50%",
                                        transform: "translateX(-50%) scale(1)",
                                        zIndex: 10,
                                        width: "70%",
                                    } : isLeft ? {
                                        left: "0%",
                                        transform: "translateX(-32%) scale(0.82)",
                                        zIndex: 5,
                                        width: "70%",
                                    } : {
                                        left: "100%",
                                        transform: "translateX(-68%) scale(0.82)",
                                        zIndex: 5,
                                        width: "70%",
                                    };

                                    return (
                                        <div
                                            key={position}
                                            onClick={() => { if (!isCenter) prevExplore(); }}
                                            className="absolute top-0 h-full"
                                            style={{
                                                transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                                                cursor: isCenter ? "default" : "pointer",
                                                ...style,
                                            }}
                                        >
                                            <div className="relative w-full h-full rounded-xl overflow-hidden">

                                                {/* Image — always shown as base */}
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />

                                                {/* Video — fills card naturally, only for center */}
                                                {item.video && isCenter && (
                                                    <video
                                                        src={item.video}
                                                        className="absolute inset-0 w-full h-full object-cover"
                                                        autoPlay muted loop playsInline
                                                    />
                                                )}

                                                {/* Slide number */}
                                                <span className="absolute bottom-6 left-6 text-7xl font-black text-white/20 leading-none select-none z-10">
                                                    {item.number}
                                                </span>

                                                {/* Play button - only for center video */}
                                                {item.video && isCenter && (
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/50 flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                                                        <span className="text-white text-2xl ml-1">▶</span>
                                                    </div>
                                                )}

                                                {/* Arrow on the left peeking card */}
                                                {isLeft && (
                                                    <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-5 h-5">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                };

                                return (
                                    <>
                                        {/* Background — One image stretched across the whole group, peeking on both sides */}
                                        <div className="absolute inset-0 z-0 scale-[0.98] transition-all duration-700 ease-in-out">
                                            <div className="relative w-full h-full overflow-hidden">
                                                <img
                                                    src={adjacentItem.image}
                                                    className="w-full h-full object-cover"
                                                    alt="Peeking Background"
                                                />
                                            </div>
                                        </div>

                                        {/* Center active image (rendered last so it's on top) */}
                                        {renderCard(centerItem, "center")}
                                    </>
                                );
                            })()}

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevExplore}
                                className="absolute left-[15%] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-30 opacity-0 group-hover:opacity-100"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button
                                onClick={nextExplore}
                                className="absolute right-[15%] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-30 opacity-0 group-hover:opacity-100"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
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