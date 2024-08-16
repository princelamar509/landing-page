import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServiceSection';
import WorksSection from './components/WorksSection';
import PackagesSection from './components/PackagesSection';
import FAQSection from './components/FAQSection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <About />
            <ServicesSection />
            <WorksSection />
            <PackagesSection />
            <FAQSection />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
