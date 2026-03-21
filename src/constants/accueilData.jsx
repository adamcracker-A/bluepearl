// src/constants/accueilData.jsx
import { FaUser, FaBath, FaWifi, FaTv, FaCoffee, FaSnowflake } from "react-icons/fa";

export const images = [
    "/locales/assets/Rectangle 4193.png",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2000"
];

export const rooms = [
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
        image: "/locales/assets/images/logo/groupe.png",
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

export const offers = [
    { month: "Mois de Février", discount: "5%", desc: "Lorem ipsum dolor", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop" },
    { month: "Mois de Novembre", discount: "10%", desc: "Lorem ipsum dolor", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop" },
    { month: "Mois de Décembre", discount: "15%", desc: "Lorem ipsum dolor", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&auto=format&fit=crop" },
    { month: "Mois de Janvier", discount: "20%", desc: "Lorem ipsum dolor", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&auto=format&fit=crop" },
];

export const restaurantData = [
    {
        id: 1,
        title: "Le Patio Restaurant",
        description: "Le Patio Restaurant vous accueille tout au long de la journée...",
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
        description: "Détendez-vous dans notre espace lounge en plein air...",
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
        description: "Une expérience gastronomique exceptionnelle...",
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

export const activities = [
    { title: "CHANTER ENSEMBLE", subtitle: "Chanter ensemble", desc: "Musique live · Concert · Karaoké\nSpectacle de talents", button: "SING!", image: "/locales/assets/chanter.png" },
    { title: "ACCRO A LA FÊTE", subtitle: "Danse toute la nuit", desc: "Club de nuit · Soirée · Vie nocturne\nTournée des bars", button: "DANCE!", image: "/locales/assets/acro.png" },
    { title: "GAME ZONE", subtitle: "Prêt à gagner ?", desc: "Soirée Quiz · Team Building\nJeux de société", button: "PLAY!", image: "/locales/assets/games.png" },
];

export const exploreItems = [
    { number: "01", title: "Évasion en Yacht", desc: "Découvrez Saïdia, la perle de la Méditerranée. Plages dorées, eaux cristallines et activités pour tous les goûts vous y attendent. Flânez le long du littoral et savourez la cuisine locale.", image: "/locales/assets/yacht.png", video: "/locales/assets/yacht.mp4" },
    { number: "02", title: "Plages Dorées", desc: "...", image: "/locales/assets/explore 2.png" },
    { number: "03", title: "Plages Dorées", desc: "...", image: "/locales/assets/1stvideoph.png" },
];