
function Searchsection() {
    return (
        <>
            {/* Search Bar */}
            <div className="container mx-auto px-4">
                <div className="bg-white shadow-lg border-t-4 border-[#c9a84c] rounded -mt-10 relative z-10 p-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-end justify-between w-full">
                        <div className="flex-1 w-full lg:w-auto">
                            <label className="block text-[10px] xl:text-xs font-bold uppercase text-[#1a3c5e] tracking-wider mb-1 whitespace-nowrap">Localisation</label>
                            <input type="text" className="w-full border border-gray-200 rounded px-2 py-2 text-xs xl:text-sm" value="Saïdia, Morocco" readOnly />
                        </div>
                        <div className="flex-[1.5] w-full lg:w-auto">
                            <label className="block text-[10px] xl:text-xs font-bold uppercase text-[#1a3c5e] tracking-wider mb-1 whitespace-nowrap">Arrivée / Départ</label>
                            <input type="date" className="w-full border border-gray-200 rounded px-2 py-2 text-xs xl:text-sm" />
                        </div>
                        <div className="flex-1 w-full lg:w-auto">
                            <label className="block text-[10px] xl:text-xs font-bold uppercase text-[#1a3c5e] tracking-wider mb-1 whitespace-nowrap">Chambres</label>
                            <select className="w-full border border-gray-200 rounded px-2 py-2 text-xs xl:text-sm">
                                <option>1 Chambre</option><option>2 Chambres</option><option>3 Chambres</option>
                            </select>
                        </div>
                        <div className="flex-1 w-full lg:w-auto">
                            <label className="block text-[10px] xl:text-xs font-bold uppercase text-[#1a3c5e] tracking-wider mb-1 whitespace-nowrap">Adultes</label>
                            <select className="w-full border border-gray-200 rounded px-2 py-2 text-xs xl:text-sm">
                                <option>1 Adulte</option><option>2 Adultes</option><option>3 Adultes</option>
                            </select>
                        </div>
                        <div className="flex-1 w-full lg:w-auto">
                            <label className="block text-[10px] xl:text-xs font-bold uppercase text-[#1a3c5e] tracking-wider mb-1 whitespace-nowrap">Enfants</label>
                            <select className="w-full border border-gray-200 rounded px-2 py-2 text-xs xl:text-sm">
                                <option>1 Enfant</option><option>2 Enfants</option><option>3 Enfants</option>
                            </select>
                        </div>
                        <div className="flex-1 w-full lg:w-auto">
                            <label className="block text-[10px] xl:text-xs font-bold uppercase text-[#1a3c5e] tracking-wider mb-1 whitespace-nowrap">CODE PROMO</label>
                            <input type="text" className="w-full border border-gray-200 rounded px-2 py-2 text-xs xl:text-sm" />
                        </div>
                        <div className="w-full lg:w-auto shrink-0">
                            <button className="w-full bg-[#c9a84c] hover:bg-[#a8883a] text-white py-[9px] px-4 rounded transition-colors font-semibold text-xs xl:text-sm whitespace-nowrap">
                                Voir les disponibilités →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Searchsection;