import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import { MdMenu, MdClose } from "react-icons/md";

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Alterna el estado del menú
    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <nav className="navbar">
            <div className="container">
                {/* Left Side: Title */}
                <Link to="/" className="logo_title">
                    <div className="title">
                        <h1>PELUCHIN</h1>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className={`desktop-menu ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className="menu-item">Home</Link>
                    <Link to="/about" className="menu-item">About</Link>
                    <Link to="/tokenomics" className="menu-item">Tokenomics</Link>
                    <Link to="/airdrop" className="menu-item">Airdrop</Link>
                    {/**<Link to="/admin" className="menu-item">Admin</Link> */}
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <MdClose size={30} />
                        ) : (
                            <MdMenu size={30} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="mobile-menu-btn">
                    <button onClick={toggleMenu}>
                        {isOpen ? (
                            <MdClose size={30} />
                        ) : (
                            <MdMenu size={30} />
                        )}
                    </button>
                </div>
                <Link to="/" className="mobile-item" onClick={toggleMenu}>Home</Link>
                <Link to="/about" className="mobile-item" onClick={toggleMenu}>About</Link>
                <Link to="/tokenomics" className="mobile-item" onClick={toggleMenu}>Tokenomics</Link>
                <Link to="/airdrop" className="mobile-item" onClick={toggleMenu}>Airdrop</Link>
                {/*<Link to="/admin" className="mobile-item" onClick={toggleMenu}>Admin</Link>*/}
            </div>
        </nav>
    );
};

export default NavigationBar;
