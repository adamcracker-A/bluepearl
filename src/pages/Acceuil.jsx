function Acceuil() {
    return (
        <div
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] bg-cover bg-center bg-no-repeat pt-28 sm:pt-32 md:pt-36 px-4 sm:px-8"
            style={{
                backgroundImage: "url('/locales/assets/Rectangle 4193.png')",
            }}
        >
            {/* Content goes here on top of the background image */}
            <p className="text-2xl font-bold text-white">Une Expérience Signée Excellence</p>
            <p className="text-xl text-white">Un bien-être qui va au-delà</p>
        </div>
    );
}

export default Acceuil;
