import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GoogleAuthRedirect from './GoogleAuthRedirect';
import ProtectedPage from "./ProtectedPage";

const App = () => {
    const loginWithGoogle = () => {
        // Переходим на Google OAuth URL, который предоставляет Strapi
        window.location.href = 'https://andersen-strapi.onrender.com/api/connect/google';
    };

    return (
        <Router>
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>Google Auth with Strapi</h1>
                <button onClick={loginWithGoogle}>Login with Google</button>

                <Routes>
                    {/* Добавляем маршрут для обработки перенаправления от Google */}
                    <Route path="/auth/google/redirect" element={<GoogleAuthRedirect />} />
                    <Route path="/protected" element={<ProtectedPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
