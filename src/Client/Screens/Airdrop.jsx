import React, { useState } from 'react';

function Airdrop() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Gracias por registrarte en el Airdrop con el correo: ${email}`);
        setEmail('');
    };

    return (
        <div>
            <h1>Airdrop de PELUCHIN (PL)</h1>
            <p>¡Recibe tokens gratis participando en nuestro airdrop! Completa el formulario para unirte.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Registrarme</button>
            </form>
        </div>
    );
}

export default Airdrop;
