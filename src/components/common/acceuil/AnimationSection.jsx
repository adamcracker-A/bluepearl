function AnimationSection({ activities, prevActivity, nextActivity }) {
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
                    ANIMATIONS
                </h2>

                {/* Subtitle */}
                <p className="text-xs md:text-lg text-[#1f3555] mt-2">
                    MOMENTS INOUBLIABLE
                </p>

                {/* Gold Line */}
                <div className="w-70 h-[2px] bg-[#c9a84c] mt-4 mb-8"></div>

            </section>

            <section className="py-16 bg-[white]">
                <div className="flex items-center justify-center gap-4 px-4">

                    {/* Left Arrow */}
                    <button
                        onClick={prevActivity}
                        className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow hover:bg-gray-100 transition text-gray-600 text-lg"
                    >
                        ←
                    </button>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
                        {activities.map((item, index) => (
                            <div
                                key={index}
                                className="relative h-[420px] rounded-2xl overflow-hidden group shadow-lg"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40"></div>
                                <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-6">
                                    <h3 className="text-xl font-bold tracking-widest uppercase">
                                        {item.title}
                                    </h3>
                                    <p className="italic text-sm mt-2">
                                        {item.subtitle}
                                    </p>
                                    <p className="text-xs mt-4 whitespace-pre-line opacity-90">
                                        {item.desc}
                                    </p>
                                    <button className="mt-6 border border-white px-6 py-2 rounded-full text-xs font-bold tracking-widest hover:bg-white hover:text-black transition">
                                        {item.button}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextActivity}
                        className="flex-shrink-0 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow hover:bg-gray-100 transition text-gray-600 text-lg"
                    >
                        →
                    </button>

                </div>
            </section>
        </>
    );
}

export default AnimationSection;