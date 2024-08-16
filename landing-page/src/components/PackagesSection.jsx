import React from 'react';
import './PackagesSection.css';

const PackagesSection = () => {
    return (
        <section className="packages" id="packages">
            <h2>Packages</h2>
            <div className="package-item">
                <h3>Basic Package</h3>
                <p>Perfect for small projects</p>
                <div className="price">$5,000</div>
                <button className="pricing-button" onClick={() => window.location.href='#contact'}>
                    Choose
                </button>
            </div>
            <div className="package-item">
                <h3>Standard Package</h3>
                <p>Great for medium-sized projects</p>
                <div className="price">$15,000</div>
                <button className="pricing-button" onClick={() => window.location.href='#contact'}>
                    Choose
                </button>
            </div>
            <div className="package-item">
                <h3>Premium Package</h3>
                <p>Ideal for large projects</p>
                <div className="price">$30,000</div>
                <button className="pricing-button" onClick={() => window.location.href='#contact'}>
                    Choose
                </button>
            </div>
        </section>
    );
};

export default PackagesSection;

