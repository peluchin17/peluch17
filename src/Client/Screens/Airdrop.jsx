import React, { useState } from 'react';
import '../styles/Airdrop.css'; // Importar los estilos CSS

function Airdrop() {
    const [email, setEmail] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    // Validación de email
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar si el correo es válido
        if (!validateEmail(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        // Aquí podrías integrar un backend para almacenar los registros o hacer la validación
        // Ejemplo de acción posterior: almacenar en Firebase, enviar un correo de confirmación, etc.

        // Mostrar confirmación de registro
        alert(`Gracias por registrarte en el Airdrop con el correo: ${email}`);
        setIsRegistered(true);  // Cambiar el estado de registro

        // Limpiar el campo de email
        setEmail('');
    };

    return (
        <div className='cont_airdrop'>
            <div className='airdrop-container'>
                <h1>Airdrop de PELUCHIN (PL)</h1>
                <p>¡Recibe tokens gratis participando en nuestro airdrop! Completa el formulario para unirte.</p>
                {isRegistered ? (
                    <p className="message">¡Gracias por registrarte! Pronto recibirás tus tokens.</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Tu correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button className='button' type="submit">Registrarme</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Airdrop;
