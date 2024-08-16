/*import React from 'react';

const ServicesSection = () => {
    return (
        <section className="services" id="services">
            <div className="service-item">
                <h3>Residential Design</h3>
                <p>Elegant and functional homes tailored to your needs, ideal for entertaining. also for educational purposes.

                </p>
            </div>
            <div className="service-item">
                <h3>Commercial Design</h3>
                <p>Innovative spaces for businesses to thrive.</p>
            </div>
            <div className="service-item">
                <h3>Interior Design</h3>
                <p>Transforming interiors with a unique aesthetic.</p>
            </div>
            <div className="service-item">
                <h3>Urban Planning</h3>
                <p>Comprehensive planning for sustainable cities.</p>
            </div>
        </section>
    );
};

export default ServicesSection;*/



import React from 'react';
import './ServiceSection.css';

const ServicesSection = () => {
    return (
        <section className="services" id="services">
            <div className="service-item">
                <i className="fas fa-home service-icon"></i>
                <h3>Residential Design</h3>
                <p>Elegant and functional homes tailored to your needs.</p>
            </div>
            <div className="service-item">
                <i className="fas fa-building service-icon"></i>
                <h3>Commercial Design</h3>
                <p>Innovative spaces for businesses to thrive.</p>
            </div>
            <div className="service-item">
                <i className="fas fa-couch service-icon"></i>
                <h3>Interior Design</h3>
                <p>Transforming interiors with a unique aesthetic.</p>
            </div>
            <div className="service-item">
                <i className="fas fa-city service-icon"></i>
                <h3>Urban Planning</h3>
                <p>Comprehensive planning for sustainable cities.</p>
            </div>
        </section>
    );
};

export default ServicesSection;

