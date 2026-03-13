import { images } from "../../../constants/accueilData"

function HeroSlider({ currentIndex, setCurrentIndex, prevImage, nextImage }) {
    return (
        <>
            {/* Hero Slider */}
            <div
                className="w-full relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat pt-28 sm:pt-32 md:pt-36 px-4 sm:px-8 transition-all duration-500 ease-in-out"
                style={{ backgroundImage: `url('${images[currentIndex]}')` }}
            >
                <button onClick={prevImage} className="absolute left-2 sm:left-4 top-[65%] sm:top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 rounded-full transition-colors z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-8 sm:h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button onClick={nextImage} className="absolute right-2 sm:right-4 top-[65%] sm:top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 rounded-full transition-colors z-20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-8 sm:h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
                <div className="relative z-10 text-center sm:text-left mx-auto sm:mx-0 max-w-4xl">
                    <p className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">Une Expérience Signée Excellence</p>
                    <p className="text-lg sm:text-xl text-white mt-2 drop-shadow-md">Un bien-être qui va au-delà</p>
                </div>
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

export default HeroSlider