import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
    const [activeFaq, setActiveFaq] = useState(1); // Default the first FAQ to be active

    const toggleFaq = (faqNumber) => {
        setActiveFaq(activeFaq === faqNumber ? null : faqNumber);
    };

    return (
        <section className="faq" id="faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
                <h3 onClick={() => toggleFaq(1)} className={activeFaq === 1 ? 'active' : ''}>
                    What services do you offer?
                </h3>
                <div className={`faq-content ${activeFaq === 1 ? 'show' : ''}`}>
                    <p>We offer residential design, commercial design, interior design, and urban planning.</p>
                </div>
            </div>
            <div className="faq-item">
                <h3 onClick={() => toggleFaq(2)} className={activeFaq === 2 ? 'active' : ''}>
                    How long does a project take?
                </h3>
                <div className={`faq-content ${activeFaq === 2 ? 'show' : ''}`}>
                    <p>The duration of a project varies depending on its size and complexity, but we work efficiently to meet deadlines.</p>
                </div>
            </div>
            <div className="faq-item">
                <h3 onClick={() => toggleFaq(3)} className={activeFaq === 3 ? 'active' : ''}>
                    What is the cost of your services?
                </h3>
                <div className={`faq-content ${activeFaq === 3 ? 'show' : ''}`}>
                    <p>Our packages range from $5,000 to $30,000. We can also create custom packages based on your needs.</p>
                </div>
            </div>
            <div className="faq-item">
                <h3 onClick={() => toggleFaq(4)} className={activeFaq === 4 ? 'active' : ''}>
                    How can I get started?
                </h3>
                <div className={`faq-content ${activeFaq === 4 ? 'show' : ''}`}>
                    <p>You can get started by selecting one of our packages and contacting us to discuss your project in detail.</p>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;

