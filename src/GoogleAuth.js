import React from 'react';

const GoogleAuth = () => {

    const loginWithGoogle = () => {
        // Переходим на Google OAuth URL, который предоставляет Strapi
        window.location.href = 'https://andersen-strapi.onrender.com/api/connect/google';
    };

    return (
        <div>
            <h1>Google Auth with Strapi</h1>
            <button onClick={loginWithGoogle}>Login with Google</button>
        </div>
    );
};

export default GoogleAuth;