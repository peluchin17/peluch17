import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';  
import plchi from "../../assets/peluchin.png"

function Home() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const launchDate = new Date();
        launchDate.setDate(launchDate.getDate() + 2); // Ajusta para el día del lanzamiento
        launchDate.setHours(24, 7, 0, 0); // Establece hora, minutos, segundos

        const interval = setInterval(() => {
            const now = new Date();
            const difference = launchDate - now;

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="page">
            <div className="grid-container">
                {/* Contenedor de la card principal */}
                <div className="card-main">
                    <div className="card-image">
                        <img src={plchi} alt="Peluchín Memecoin" />
                    </div>
                    <div className="card-content">
                        <h1>PELUCHIN (PL) Tokens</h1>
                        <p>La memecoin más leal y amorosa. ¡Porque todos merecen un Peluchín en sus vidas!</p>
                    </div>
                </div>
                {/* Contenedor para el countdown */}
                <div className="countdown">
                    <h2>This coin launches in:</h2>
                    <p>
                        Days: {timeLeft.days} | Hours: {timeLeft.hours} | Minutes: {timeLeft.minutes} | Seconds: {timeLeft.seconds}
                    </p>

                    <p>
                        Todavía quedan <strong>794.440.023,0 PL</strong> disponibles para la venta en la curva de bonos y hay <strong>0,008911 BNB</strong> en la curva de bonos.
                    </p>

                    {/* Contenedor para los enlaces */}
                    <div className="links">
                        <Link to="/about" className="link">Conoce más</Link>
                        <Link to="/airdrop" className="link">Participa en el Airdrop</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
