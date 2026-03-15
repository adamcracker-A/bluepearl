import { images } from "../../../constants/accueilData"

function HeroSlider({ currentIndex, setCurrentIndex, prevImage, nextImage }) {
    return (
        <>
            {/* Hero Slider */}
            <div
                className="w-full relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat pt-28 sm:pt-32 md:pt-36 px-4 sm:px-8 transition-all duration-500 ease-in-out"
                style={{ backgroundImage: `url('${images[currentIndex]}')` }}
            >

                {/* Text + Buttons grouped together on the left */}
                <div className="left-20 relative z-10 text-left mx-0 max-w-4xl sm:pl-24">

                    <div className="sm:border-l-4 sm:border-[#c9a84c] sm:pl-4 mb-4">
                        <p className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">Une Expérience Signée Excellence</p>
                        <p className="text-lg sm:text-xl text-white mt-2 drop-shadow-md">Un bien-être qui va au-delà</p>
                    </div>

                    {/* Buttons right under the text, aligned with it */}
                    <div className="sm:pl-4 flex gap-2">
                        <button onClick={prevImage} className="bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button onClick={nextImage} className="bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                </div>

                {/* Dots */}
                <div className="absolute bottom-9 sm:bottom-12 left-0 right-0 flex justify-center gap-2 z-20">
                    {images.map((_, idx) => (
                        <button key={idx} onClick={() => setCurrentIndex(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default HeroSlider;