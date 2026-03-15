function BannerSection() {
    return (
        <>
            <hr className="border-[#c9a84c]" /> <br />
            {/* ✦ Banner CTA Section */}
            <section className="relative py-20 px-8 overflow-hidden"
                style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600) center/cover no-repeat' }}>

                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
                        Vivez un luxe inégalé, où chaque instant est pensé pour des souvenirs inoubliables.
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed mb-8">
                        Profitez du #LuxeInstantané !<br />
                        Sans attente, sans souci — des services exclusifs et des expériences inoubliables conçus pour chaque invité dès votre arrivée.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-white text-[#1a3c5e] px-6 py-3 text-sm font-bold tracking-wider hover:bg-gray-100 transition-colors">
                            RÉSERVEZ MAINTENANT
                        </button>
                        <button className="border border-white text-white px-6 py-3 text-sm font-bold tracking-wider hover:bg-white/10 transition-colors">
                            Explorez nos chambres
                        </button>
                    </div>
                </div>
            </section> <br />
            <hr className="border-[#c9a84c]" />
        </>
    );
}

export default BannerSection;