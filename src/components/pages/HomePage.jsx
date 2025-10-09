// src/pages/HomePage.jsx
import React from 'react';
import ITHeroBanner from './home/Banner';
import AboutUs from './home/AboutUs';
import NewsBanner from './home/NewsBanner';
import NewsSlider from './home/NewsSlider';
import PhotoGallery from './home/PhotoGallery';
import ApplicantBanner from './home/ApplicantBanner';

const HomePage = () => {
  return (
    <div className="bg-white">
        <ITHeroBanner />
        <AboutUs />
        <NewsBanner />
        <ApplicantBanner />
        <NewsSlider />
        <PhotoGallery   />
    </div>
  );
};

export default HomePage;