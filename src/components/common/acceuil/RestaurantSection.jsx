
function RestaurantSection({ currentRestaurant, prevRestaurant, nextRestaurant, restaurantData, currentRestaurantIndex }) {
    const nextIndex = (currentRestaurantIndex + 1) % restaurantData.length;
    const nextNextIndex = (currentRestaurantIndex + 2) % restaurantData.length;
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
                    RESTAURANTS & CAFÉS
                </h2>

                {/* Subtitle */}
                <p className="text-xs md:text-lg text-[#1f3555] mt-2">
                    UNE CUISINE EXCEPTIONNELLE POUR CHAQUE OCCASION
                </p>

                {/* Gold Line */}
                <div className="w-70 h-[2px] bg-[#c9a84c] mt-4 mb-8"></div>

            </section>

            {/* Restaurant Section - Dynamic Content */}
            <section className="py-16 md:py-24 bg-[white]">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="relative max-w-5xl mx-auto">

                        {/* Back card 2 */}
                        <div className="absolute top-10 right-0 w-1/2 h-full rounded-xl overflow-hidden opacity-40 translate-x-6 scale-95 z-0">
                            <img
                                src={restaurantData[nextNextIndex].image}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Back card 1 */}
                        <div className="absolute top-5 right-0 w-1/2 h-full rounded-xl overflow-hidden opacity-60 translate-x-3 scale-97 z-0">
                            <img
                                src={restaurantData[nextIndex].image}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Main Card */}
                        <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px] z-10">

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
        </>
    )
}
export default RestaurantSection;