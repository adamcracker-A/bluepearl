function RoomSlider({ roomIndex, setRoomIndex, prevRoom, nextRoom, rooms }) {
    const currentRoom = rooms[roomIndex];
    return (
        <>
            {/* Chambres titres*/}
            <section className="flex flex-col items-center justify-center mt-16 mb-12 px-4 text-center">

                {/* Logo / Icon */}
                <img
                    src="/locales/assets/images/logo/groupe.png"
                    alt="logo"
                    className="w-20 md:w-24 mb-6"
                />

                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.1em] text-[#1f3555] font-normal">
                    CHAMBRES & SUITES
                </h2>

                {/* Subtitle */}
                <p className="text-xs md:text-lg text-[#1f3555] mt-2">
                    VUES, LUXE, SOUVENIRS
                </p>

                {/* Gold Line */}
                <div className="w-70 h-[2px] bg-[#c9a84c] mt-4 mb-8"></div>

            </section>

            <section className="bg-[#0f2c5c] py-16 md:py-24 mt-12">
                <div className="container max-w-5xl mx-auto px-4 sm:px-12 relative">
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <button className="border border-[#c9a84c] text-white px-6 py-2 text-xs sm:text-sm tracking-widest hover:bg-white/10 transition-colors">SUITES <span className="text-[#c9a84c]">▼</span></button>
                        <button className="border border-[#c9a84c] text-white px-6 py-2 text-xs sm:text-sm tracking-widest hover:bg-white/10 transition-colors">SÉLECTIONNEZ VOTRE VUE <span className="text-[#c9a84c]">▼</span></button>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center relative">
                        <button onClick={prevRoom} className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors z-20">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <div className="w-full lg:w-[45%] bg-[#efefef] p-6 sm:p-10 shadow-2xl relative z-10 order-2 lg:order-1 mt-[-2rem] lg:mt-0 lg:-mr-12 rounded-sm">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center gap-3 text-[#1a3c5e]">
                                <img src="/locales/assets/star.png" alt="icon" className="w-4 h-4 object-contain" />
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
                        </div>
                        <button onClick={nextRoom} className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 text-white w-10 h-10 flex items-center justify-center rounded-full transition-colors z-20">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex justify-center gap-3 mt-10">
                        {rooms.map((_, idx) => (
                            <button key={idx} onClick={() => setRoomIndex(idx)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === roomIndex ? "bg-[#c9a84c] scale-125" : "bg-white/40 hover:bg-white/70"}`} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
export default RoomSlider;