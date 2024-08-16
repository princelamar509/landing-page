import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Designing Dreams</h1>
                <h2>We Build Iconic Structures</h2>
                <p>Transforming visionary concepts into architectural masterpieces that stand the test of time.</p>
                
                <div className="hero-buttons">
                    <button className="btn-primary" onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })}>
                        Get Started
                    </button>
                    <button className="btn-secondary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
                        Our Services
                    </button>
                </div>

                <div className="hero-quote">
                    <p>"Architecture is a visual art, and the buildings speak for themselves." - Julia Morgan</p>
                </div>
            </div>
            <div className="scroll-down-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    );
};

export default HeroSection;


