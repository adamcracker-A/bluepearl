function Quotesection() {
    return (
        <section className="flex flex-col items-center justify-center mt-16 mb-12 px-4 text-center">

            {/* Logo / Icon */}
            <img
                src="/locales/assets/images/logo/groupe.png"
                alt="logo"
                className="w-20 md:w-24 mb-6"
            />

            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.1em] text-[#1f3555] font-normal">
                L’UNIVERS DES EXPÉRIENCES
            </h2>

            {/* Subtitle */}
            <p className="text-xs md:text-lg text-[#1f3555] mt-2">
                VUES, LUXE, SOUVENIRS
            </p>

            {/* Gold Line */}
            <div className="w-70 h-[2px] bg-[#c9a84c] mt-4 mb-8"></div>

            {/* Quote */}
            <p className="text-center text-sm md:text-base lg:text-lg max-w-4xl text-gray-700 font-medium leading-relaxed">
                “ Chaque espace reflète mon désir de satisfaire pleinement mes invités, en offrant
                un univers où confort, raffinement et bien-être se conjuguent, permettant à chacun
                de profiter pleinement de chaque instant.”
            </p>

        </section>
    );
}

export default Quotesection;