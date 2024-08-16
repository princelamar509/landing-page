import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isPackagesDropdownOpen, setIsPackagesDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleAboutDropdown = () => {
        setIsAboutDropdownOpen(!isAboutDropdownOpen);
    };

    const toggleServicesDropdown = () => {
        setIsServicesDropdownOpen(!isServicesDropdownOpen);
    };

    const togglePackagesDropdown = () => {
        setIsPackagesDropdownOpen(!isPackagesDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <h2 className='fas fa-building'>Madeus Arch</h2>
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                <li 
                    className="dropdown" 
                    onMouseEnter={toggleAboutDropdown} 
                    onMouseLeave={toggleAboutDropdown}
                >
                    <a href="#about"><i className="fas fa-user"></i> About</a>
                    {isAboutDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#team">Team</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#faq">FAQ</a></li>
                        </ul>
                    )}
                </li>
                <li 
                    className="dropdown" 
                    onMouseEnter={toggleServicesDropdown} 
                    onMouseLeave={toggleServicesDropdown}
                >
                    <a href="#services"><i className="fas fa-cogs"></i> Services</a>
                    {isServicesDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#service-1">Residential Design</a></li>
                            <li><a href="#service-2">Commercial Design</a></li>
                            <li><a href="#service-2">Interior Design</a></li>
                            <li><a href="#service-2">Urban Planning</a></li>
                           
                        </ul>
                    )}
                </li>
                <li 
                    className="dropdown" 
                    onMouseEnter={togglePackagesDropdown} 
                    onMouseLeave={togglePackagesDropdown}
                >
                    <a href="#packages"><i className="fas fa-box"></i> Packages</a>
                    {isPackagesDropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#package-1">Floor Plan</a></li>
                            <li><a href="#package-2">3D Renders</a></li>
                            <li><a href="#package-3">3D Models</a></li>
                        </ul>
                    )}
                </li>
                <li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
};

export default Navbar;
