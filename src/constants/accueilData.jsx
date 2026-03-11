import { FaUser, FaBath, FaWifi, FaTv, FaCoffee, FaSnowflake } from "react-icons/fa";

export const HERO_IMAGES = [
    "/locales/assets/Rectangle 4193.png",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2000"
];

export const ROOMS_DATA = [
    {
        name: "Ambassador Suite",
        description: "Chaque espace reflète mon désir de vous accueillir dans un univers où le luxe se fait personnel, apaisant et naturellement raffiné.",
        image: "/locales/assets/pic 1 offre.png",
        icons: [
            { icon: <FaUser />, label: "1-3 Personnes" },
            { icon: <FaBath />, label: "Baignoire" },
            { icon: <FaCoffee />, label: "Petit-déjeuner" },
            { icon: <FaTv />, label: "Smart TV" },
            { icon: <FaWifi />, label: "Free Wifi" },
            { icon: <FaSnowflake />, label: "Air Conditioner" },
        ],
    },
    {
        name: "Deluxe Suite",
        description: "Une autre suite élégante avec tout le confort dont vous rêvez.",
        image: "/locales/assets/groupe 1.png",
        icons: [
            { icon: <FaUser />, label: "1-2 Personnes" },
            { icon: <FaBath />, label: "Douche" },
            { icon: <FaCoffee />, label: "Petit-déjeuner" },
            { icon: <FaTv />, label: "Smart TV" },
            { icon: <FaWifi />, label: "Free Wifi" },
            { icon: <FaSnowflake />, label: "Air Conditioner" },
        ],
    },
];

export const OFFERS_DATA = [
    {
        month: "Mois de Février",
        discount: "5%",
        desc: "Lorem ipsum dolor",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop",
    },
    {
        month: "Mois de Novembre",
        discount: "10%",
        desc: "Lorem ipsum dolor",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop",
    },
    {
        month: "Mois de Décembre",
        discount: "15%",
        desc: "Lorem ipsum dolor",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop",
    },
    {
        month: "Mois de Janvier",
        discount: "20%",
        desc: "Lorem ipsum dolor",
        image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&auto=format&fit=crop",
    },
];

export const RESTAURANT_DATA = [
    {
        id: 1,
        title: "Le Patio Restaurant",
        description: "Le Patio Restaurant vous accueille tout au long de la journée, sur sa terrasse, avec une offre raffinée de petit-déjeuner, déjeuner et dîner, pour une expérience culinaire élégante et conviviale du matin au soir.",
        image: "/locales/assets/a3.png",
        hours: [
            { label: "Petit-déjeuner", time: "07h30 – 10h30" },
            { label: "Déjeuner", time: "13h00 – 15h00" },
            { label: "Dîner", time: "19h30 – 22h00" }
        ],
        primaryButton: { text: "RÉSERVEZ", link: "#" },
        secondaryButton: { text: "PLUS DE DÉTAILS", link: "#" }
    },
    {
        id: 2,
        title: "La Terrasse Lounge",
        description: "Détendez-vous dans notre espace lounge en plein air avec une sélection de cocktails signature et tapas méditerranéens dans une ambiance feutrée.",
        image: "/locales/assets/a4.png",
        hours: [
            { label: "Ouverture", time: "10h00 – 00h00" },
            { label: "Happy Hour", time: "18h00 – 20h00" },
            { label: "Live Music", time: "21h00 – 23h30" }
        ],
        primaryButton: { text: "RÉSERVEZ", link: "#" },
        secondaryButton: { text: "PLUS DE DÉTAILS", link: "#" }
    },
    {
        id: 3,
        title: "Le Gourmet Étoilé",
        description: "Une expérience gastronomique exceptionnelle avec notre chef étoilé qui sublime les saveurs locales dans un cadre raffiné et intime.",
        image: "/locales/assets/a5.png",
        hours: [
            { label: "Dîner Service", time: "19h30 – 22h30" },
            { label: "Menu Dégustation", time: "Sur réservation" },
            { label: "Wine Pairing", time: "Disponible" }
        ],
        primaryButton: { text: "RÉSERVEZ", link: "#" },
        secondaryButton: { text: "PLUS DE DÉTAILS", link: "#" }
    }
];

export const ACTIVITIES_DATA = [
    {
        title: "CHANTER ENSEMBLE",
        subtitle: "Chanter ensemble",
        desc: "Musique live · Concert · Karaoké\nSpectacle de talents",
        button: "SING!",
        image: "/locales/assets/chanter.png"
    },
    {
        title: "ACCRO A LA FÊTE",
        subtitle: "Danse toute la nuit",
        desc: "Club de nuit · Soirée · Vie nocturne\nTournée des bars",
        button: "DANCE!",
        image: "/locales/assets/acro.png"
    },
    {
        title: "GAME ZONE",
        subtitle: "Prêt à gagner ?",
        desc: "Soirée Quiz · Team Building\nJeux de société",
        button: "PLAY!",
        image: "/locales/assets/games.png"
    }
];

export const EXPLORE_DATA = [
    { number: "01", title: "Évasion en Yacht", desc: "...", video: "/locales/assets/yacht.mp4", image: "/locales/assets/yacht.png" },
    { number: "02", title: "Plages Dorées", desc: "...", video: "/locales/assets/beach.mp4", image: "/locales/assets/beach.png" },
    { number: "03", title: "Nature & Forêts", desc: "...", video: "/locales/assets/forest.mp4", image: "/locales/assets/forest.png" },
    { number: "04", title: "Marina & Loisirs", desc: "...", video: "/locales/assets/marina.mp4", image: "/locales/assets/marina.png" },
];
