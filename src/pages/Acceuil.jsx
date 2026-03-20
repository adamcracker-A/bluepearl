import { useState } from 'react';
import { images, rooms, offers, restaurantData, activities, exploreItems } from '../constants/accueilData';
import HeroSlider from '../components/common/acceuil/Hero';
import SearchSection from '../components/common/acceuil/Searchsection';
import Quotesection from '../components/common/acceuil/Quotesection';
import VideoSection from '../components/common/acceuil/VideoSection';
import RoomSlider from '../components/common/acceuil/RoomSlider';
import OffreSection from '../components/common/acceuil/OffreSection';
import RestaurantSection from '../components/common/acceuil/RestaurantSection';
import AnimationSection from '../components/common/acceuil/AnimationSection';
import ExploreSection from '../components/common/acceuil/ExploreSection';
import BannerSection from '../components/common/acceuil/BannerSection';
import Inscriver from '../components/common/acceuil/Inscriver';

function Acceuil() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [roomIndex, setRoomIndex] = useState(0);
    const [offerIndex, setOfferIndex] = useState(0);
    const [currentRestaurantIndex, setCurrentRestaurantIndex] = useState(0);
    const [exploreIndex, setExploreIndex] = useState(0);
    const [activityIndex, setActivityIndex] = useState(0);

    // just logic, 
    const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextImage = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    const prevRoom = () => setRoomIndex((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
    const nextRoom = () => setRoomIndex((prev) => (prev === rooms.length - 1 ? 0 : prev + 1));

    const visibleOffers = 3;
    const currentOffers = offers.slice(offerIndex, offerIndex + visibleOffers);
    const prevOffer = () => setOfferIndex((prev) => (prev === 0 ? offers.length - visibleOffers : prev - 1));
    const nextOffer = () => setOfferIndex((prev) => (prev >= offers.length - visibleOffers ? 0 : prev + 1));

    const visibleActivities = 3;
    const currentActivities = Array.from({ length: visibleActivities }, (_, i) => 
        activities[(activityIndex + i) % activities.length]
    );
    const prevActivity = () => setActivityIndex((prev) => (prev === 0 ? activities.length - 1 : prev - 1));
    const nextActivity = () => setActivityIndex((prev) => (prev === activities.length - 1 ? 0 : prev + 1));

    const currentRestaurant = restaurantData[currentRestaurantIndex];
    const prevRestaurant = () => setCurrentRestaurantIndex((prev) => (prev === 0 ? restaurantData.length - 1 : prev - 1));
    const nextRestaurant = () => setCurrentRestaurantIndex((prev) => (prev === restaurantData.length - 1 ? 0 : prev + 1));

    const current = exploreItems[exploreIndex];
    const prevExplore = () => setExploreIndex((prev) => (prev === 0 ? exploreItems.length - 1 : prev - 1));
    const nextExplore = () => setExploreIndex((prev) => (prev === exploreItems.length - 1 ? 0 : prev + 1));

    return (
        <>
            <HeroSlider
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                prevImage={prevImage}
                nextImage={nextImage}
            />
            <SearchSection />

            <Quotesection />

            <VideoSection />


            {/* Room Slider */}
            <RoomSlider
                roomIndex={roomIndex}
                setRoomIndex={setRoomIndex}
                prevRoom={prevRoom}
                nextRoom={nextRoom}
                rooms={rooms}
            />

            <OffreSection
                currentOffers={currentOffers}
                prevOffer={prevOffer}
                nextOffer={nextOffer}
            />

            <RestaurantSection
                currentRestaurant={currentRestaurant}
                prevRestaurant={prevRestaurant}
                nextRestaurant={nextRestaurant}
                restaurantData={restaurantData}
                currentRestaurantIndex={currentRestaurantIndex}
            />
            <AnimationSection
                activities={currentActivities}
                prevActivity={prevActivity}
                nextActivity={nextActivity}
            />
            <ExploreSection
                current={current}
                prevExplore={prevExplore}
                nextExplore={nextExplore}
                exploreItems={exploreItems}
                exploreIndex={exploreIndex}
                setExploreIndex={setExploreIndex}
            />


            <BannerSection />
            {/* ✦ Newsletter Section */}
            <Inscriver />
        </>
    );
}

export default Acceuil;