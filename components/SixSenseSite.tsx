import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Booking from './Booking';
import MainContent from './MainContent';
import Footer from './Footer';
import Modals from './Modals';
import LegacyCarouselInit from './LegacyCarouselInit';

export default function SixSenseSite() {
  return (
    <div className="template-Video homepage w-full max-w-[100vw] overflow-x-hidden" id="inicio" style={{ backgroundColor: '#ffffff' }}>
      <link rel="stylesheet" href="/sixsense.css" />
      <Header />
      <Hero />
      <Booking />
      <MainContent />
      <LegacyCarouselInit />
      <Footer />
      <Modals />
    </div>
  );
}
