import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2 className="footer-title">Síguenos en nuestras redes</h2>
                <div className="social-links">
                    <a href="https://x.com/DogPeluchi84500?t=vOSdaIJOcWquI7M2Z2GXGg&s=09" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                        Twitter
                    </a>
                    <a href="https://www.tiktok.com/@peluchin.dog?_t=8sDwypxl28s&_r=1" target="_blank" rel="noopener noreferrer" className="social-link tiktok">
                        TikTok
                    </a>
                    <a href="https://www.youtube.com/@PeluchinDog" target="_blank" rel="noopener noreferrer" className="social-link youtube">
                        YouTube
                    </a>
                </div>
                <div className="buy-token">
                    <a href="https://four.meme/token/0x8ebf0d7e90606a629cda0ace99bf3edd8ab943e0?code=C3UE2M5HF2C7" target="_blank" rel="noopener noreferrer" className="buy-link">
                        ¡Compra PELUCHIN en Four.meme!
                    </a>
                </div>
                <p className="footer-copy">© 2024 PPELUCHIN</p>
            </div>
        </footer>
    );
};

export default Footer;
