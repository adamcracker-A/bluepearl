function VideoSection() {
    return (
        <>
            <hr className="border-[#c9a84c] border-t-2" /> <br />

            {/* Video Section */}
            <div className="relative w-full h-[400px] bg-black overflow-hidden">
                {/* Replace src with your real video path later */}
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

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center hover:bg-white/40 transition-colors">
                        <span className="text-white text-3xl ml-2">▶</span>
                    </button>
                </div>
            </div> <br />

            <hr className="border-[#c9a84c] border-t-2" />
        </>
    );
}
export default VideoSection;