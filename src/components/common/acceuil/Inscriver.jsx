function Inscriver() {
    return (
        <>
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
                    className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center text-xl transition-colors"
                >
                    <img src="/locales/assets/arrow-up.png" alt="arrow-up" className="w-14 h-14 object-contain" />
                </button>

            </section>
        </>
    );
}

export default Inscriver;