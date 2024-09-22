import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const GoogleAuthRedirect = () => {
    const navigate = useNavigate();

    const fetchJwtToken = async () => {

        let search = window.location.search;
        console.log(search)

        const response = await fetch('https://andersen-strapi.onrender.com/api/auth/google/callback' + search, {});

        const data = await response.json();
        console.log(data);
        return data.jwt
    };

    useEffect(() => {
        fetchJwtToken()
            .then(function (response) {
                console.log(response)
                // Сохраняем токен в localStorage
                localStorage.setItem('access_token', response);
                navigate('/protected');
            })
    }, [navigate]);

    return <div>Авторизация через Google...</div>;
};

export default GoogleAuthRedirect;