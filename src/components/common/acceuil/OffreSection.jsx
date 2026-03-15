function OffreSection({ currentOffers, prevOffer, nextOffer }) {
    return (
        <>
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
                                    className="w-9 h-9 bg-[#c9a84c] text-[white] flex items-center justify-center hover:bg-[#a8883a] hover:text-white transition-colors rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                                <button onClick={nextOffer}
                                    className="w-9 h-9 bg-[#c9a84c] text-[white] flex items-center justify-center hover:bg-[#a8883a] hover:text-white transition-colors rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Offer Cards */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full overflow-hidden">
                            {currentOffers.map((offer, i) => (
                                <div key={i} className="flex flex-col flex-1 min-w-0 shadow-md group">
                                    {/* Top Part: Image + Content */}
                                    <div className="relative rounded-t overflow-hidden">
                                        <img
                                            src={offer.image}
                                            alt={offer.month}
                                            className="w-full h-45 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Dark overlay */}
                                        <div className="absolute top-0 left-0 bottom-0 w-[62%] sm:w-[50%] lg:w-[45%] bg-[#1a3c5e]/80 backdrop-blur-sm z-10"></div>

                                        {/* Content overlay */}
                                        <div className="absolute inset-0 p-4 sm:p-5 flex flex-col text-white z-20">
                                            <div className="w-[62%] sm:w-[50%] lg:w-[45%] pr-2">
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300 line-clamp-2 leading-tight">{offer.month}</p>
                                                <p className="text-xs mt-2 text-gray-200">Discount</p>
                                                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-0.5">{offer.discount}</p>
                                                <p className="text-[10px] text-gray-300 mt-2 line-clamp-3 md:line-clamp-none">{offer.desc}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Part: Ticket Stub Button */}
                                    <button className="bg-[#c9a84c] text-[#1a3c5e] py-4 text-xs font-bold tracking-[0.2em] hover:bg-[#a8883a] transition-all duration-300 uppercase w-29.5 h-10 flex items-center justify-center gap-2">
                                        RÉSERVEZ <span className="text-lg text-white">→</span>
                                    </button>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
export default OffreSection;