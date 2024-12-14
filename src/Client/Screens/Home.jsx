import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Archivo CSS para agregar estilos
import plchi from "../../assets/plchi.jpg"

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
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
            <h1 style={{ color: '#4CAF50' }}>Bienvenido a PELUCHIN (PL)</h1>
            <p style={{ fontSize: '18px', color: '#555' }}>
                La memecoin más leal y amorosa. ¡Porque todos merecen un Peluchín en sus vidas!
            </p>

            <div
                style={{
                    display: 'inline-block',
                    margin: '20px 0',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    maxWidth: '400px'

                }}
            >
                <img
                    src={plchi}
                    alt="Peluchín Memecoin"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            <div style={{ margin: '20px 0', fontSize: '18px', color: '#333' }}>
                <h2>This coin launches in:</h2>
                <p>
                    Days: {timeLeft.days} | Hours: {timeLeft.hours} | Minutes: {timeLeft.minutes} | Seconds: {timeLeft.seconds}
                </p>
            </div>

            <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
                Todavía quedan <strong>794.440.023,0 PL</strong> disponibles para la venta en la curva de bonos y hay <strong>0,008911 BNB</strong> en la curva de bonos.
            </p>

            <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6', maxWidth: '600px', margin: '20px auto' }}>
                PELUCHIN (PL) no solo es una memecoin, sino también un tributo al amor, la lealtad y la alegría que nos brindan nuestras mascotas. Con esta moneda, buscamos fomentar una comunidad de personas que compartan estos valores y participen en actividades emocionantes como nuestro <strong>airdrop exclusivo</strong> y futuras sorpresas.
            </p>

            <div style={{ marginTop: '20px' }}>
                <Link
                    to="/about"
                    style={{
                        margin: '10px',
                        padding: '10px 20px',
                        textDecoration: 'none',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        borderRadius: '5px'
                    }}
                >
                    Conoce más
                </Link>
                <Link
                    to="/airdrop"
                    style={{
                        margin: '10px',
                        padding: '10px 20px',
                        textDecoration: 'none',
                        backgroundColor: '#FFC107',
                        color: 'white',
                        borderRadius: '5px'
                    }}
                >
                    Participa en el Airdrop
                </Link>
            </div>
        </div>
    );
}

export default Home;
