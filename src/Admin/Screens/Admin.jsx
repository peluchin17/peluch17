import React, { useState } from 'react';
import { database, storage } from '../../firebaseConfig';
import { ref as dbRef, set } from 'firebase/database';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

function Admin() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);

    const handleUpload = async () => {
        if (!title || !content) return alert('Todos los campos son obligatorios.');

        let imageUrl = '';
        if (image) {
            const imageRef = storageRef(storage, `images/${image.name}`);
            await uploadBytes(imageRef, image);
            imageUrl = await getDownloadURL(imageRef);
        }

        const newPostKey = Date.now(); // Usar timestamp como clave única.
        set(dbRef(database, `posts/${newPostKey}`), {
            title,
            content,
            imageUrl,
            createdAt: new Date().toISOString(),
        });

        alert('Contenido subido exitosamente.');
        setTitle('');
        setContent('');
        setImage(null);
    };

    return (
        <div>
            <h1>Panel de Administración</h1>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Contenido"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
            />
            <button onClick={handleUpload}>Subir Contenido</button>
        </div>
    );
}

export default Admin;