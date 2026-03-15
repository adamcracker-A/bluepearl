function VideoSection() {
    return (
        <>
            <hr className="border-[#c9a84c] border-t-2" /> <br />

            <div className="relative w-full h-[500px] bg-black overflow-hidden">

                {/* Video */}
                <video
                    className="w-full h-full object-cover opacity-80"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/locales/assets/1stvideoph.png"
                >
                    <source src="/locales/assets/video.mp4" type="video/mp4" />
                </video>

                {/* Text Block (Top Left) */}
                <div className="absolute top-16 left-16 flex gap-6 text-white max-w-md">

                    {/* Vertical Gold Line */}
                    <div className="w-[3px] bg-[#c9a84c]"></div>

                    {/* Text Content */}
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-light leading-snug">
                            Laissez-Vous Envelopper <br />
                            Par Le Confort
                        </h2>

                        <p className="text-sm md:text-base text-gray-200">
                            Du classique et élégant au moderne et minimaliste,
                            vous le trouverez ici
                        </p>
                    </div>

                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center hover:bg-white/40 transition-colors">
                        <span className="text-white text-3xl ml-1">▶</span>
                    </button>
                </div>

            </div> <br />

            <hr className="border-[#c9a84c] border-t-2" />
        </>
    );
}

export default VideoSection;