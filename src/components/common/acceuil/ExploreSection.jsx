import { useState, useEffect } from "react";

function ExploreSection({ current, prevExplore, nextExplore, exploreItems, exploreIndex, setExploreIndex }) {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <section className="flex flex-col items-center justify-center mt-16 mb-12 px-4 text-center">
                <img src="/locales/assets/images/logo/groupe.png" alt="logo" className="w-20 md:w-24 mb-6" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.1em] text-[#1f3555] font-normal">QUE FAIRE À SAÏDIA</h2>
                <p className="text-xs md:text-lg text-[#1f3555] mt-2">VUES, LUXE, SOUVENIRS</p>
                <div className="w-70 h-[2px] bg-[#c9a84c] mt-4 mb-8"></div>
            </section>

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
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">{current.desc}</p>
                            <div className="flex gap-4">
                                <button className="border border-[#1a3c5e] text-[#1a3c5e] px-5 py-2.5 text-xs font-bold tracking-wider hover:bg-[#1a3c5e] hover:text-white transition-colors">PLUS DE DÉTAILS →</button>
                                <button className="bg-[#c9a84c] text-white px-5 py-2.5 text-xs font-bold tracking-wider hover:bg-[#a8883a] transition-colors">RÉSERVEZ →</button>
                            </div>
                        </div>

                        {/* ── MOBILE only ── */}
                        <div className="lg:hidden w-full relative h-[350px] overflow-hidden rounded-xl">
                            <div
                                className="flex h-full transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${exploreIndex * 100}%)` }}
                            >
                                {exploreItems.map((item, idx) => (
                                    <div key={idx} className="min-w-full h-full relative flex-shrink-0">
                                        <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                                        {item.video && (
                                            <video src={item.video} className="absolute inset-0 w-full h-full object-cover z-[5]" autoPlay muted loop playsInline />
                                        )}
                                        <span className="absolute bottom-5 left-5 text-5xl font-black text-white/20 leading-none select-none z-10">{item.number}</span>
                                    </div>
                                ))}
                            </div>
                            <button onClick={prevExplore} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center z-30">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l6-6m-6 6l6 6" />
                                </svg>
                            </button>
                            <button onClick={nextExplore} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center z-30">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                                </svg>
                            </button>
                        </div>

                        {/* ── DESKTOP only ── */}
                        <div className="hidden lg:block lg:w-3/5 relative h-[480px] group">
                            {(() => {
                                const total = exploreItems.length;
                                const adjacentIdx = (exploreIndex + 1) % total;
                                const centerItem = exploreItems[exploreIndex];
                                const adjacentItem = exploreItems[adjacentIdx];

                                const renderCard = (item, position) => {
                                    const isCenter = position === "center";
                                    const isLeft = position === "left";

                                    const style = isCenter ? {
                                        left: "50%", transform: "translateX(-50%) scale(1)", zIndex: 10, width: "80%",
                                    } : isLeft ? {
                                        left: "0%", transform: "translateX(-32%) scale(1)", zIndex: 5, width: "80%",
                                    } : {
                                        left: "100%", transform: "translateX(-68%) scale(1)", zIndex: 5, width: "80%",
                                    };

                                    return (
                                        <div
                                            key={position}
                                            onClick={() => { if (!isCenter) prevExplore(); }}
                                            className="absolute top-0 h-full"
                                            style={{ transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)", cursor: isCenter ? "default" : "pointer", ...style }}
                                        >
                                            <div className="relative w-full h-full rounded-xl overflow-hidden">
                                                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                                                {item.video && isCenter && (
                                                    <video src={item.video} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline />
                                                )}
                                                <span className="absolute bottom-6 left-6 text-7xl font-black text-white/20 leading-none select-none z-10">
                                                    {item.number}
                                                </span>
                                                {item.video && isCenter && (
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/50 flex items-center justify-center hover:bg-white/40 transition-all duration-300">
                                                        <span className="text-white text-2xl ml-1">▶</span>
                                                    </div>
                                                )}
                                                <div className="absolute bottom-6 right-6 z-10">
                                                    <svg width="80" height="20" viewBox="0 0 80 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <line x1="0" y1="10" x2="66" y2="10" stroke="white" strokeWidth="2" strokeOpacity="0.85" />
                                                        <path d="M58 3L74 10L58 17" stroke="white" strokeWidth="2" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                };

                                return (
                                    <>
                                        <div className="absolute inset-0 z-0 scale-[1.05] transition-all duration-700 ease-in-out translate-y-6">
                                            <img src={adjacentItem.image} className="w-full h-full object-cover" alt="Peeking Background" />
                                        </div>
                                        {renderCard(centerItem, "center")}
                                    </>
                                );
                            })()}

                            <button onClick={prevExplore} className="absolute left-[10%] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-all duration-300 z-30 opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l6-6m-6 6l6 6" />
                                </svg>
                            </button>
                            <button onClick={nextExplore} className="absolute right-[10%] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-all duration-300 z-30 opacity-100">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Dots — centered under the images section on desktop, globally on mobile */}
                    <div className="flex justify-center lg:ml-[40%] gap-2 mt-10">
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