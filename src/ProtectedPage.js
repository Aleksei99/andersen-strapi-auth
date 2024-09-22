import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

const ProtectedPage = () => {
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        articleId: '',
        articleTitle: ''
    })

    const articleIdChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                articleId: event.target.value
            }
        })
    }
    const articleTitleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                articleTitle: event.target.value
            }
        })
    }

    useEffect(() => {
        const token = localStorage.getItem('access_token');

        if (!token) {
            // Если токен отсутствует, перенаправляем пользователя на главную страницу
            navigate('/');
        }
    }, [navigate]);

    const createArticle = async () => {
        const token = localStorage.getItem('access_token');
        const response = await fetch('https://andersen-strapi.onrender.com/api/articles', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            method: 'POST',
            body: JSON.stringify({
                data: {
                    "title": userInput.articleTitle
                }
            })
        });

        const data = await response.json();
        console.log(data);
    };

    const deleteArticle = async () => {
        const token = localStorage.getItem('access_token');
        const response = await fetch('https://andersen-strapi.onrender.com/api/articles/'+userInput.articleId, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            method: 'DELETE',
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Добро пожаловать в защищённую зону!</h1>
            <p>Вы успешно вошли в систему с помощью Google OAuth2.</p>
            <input type="text"
                   value={userInput.articleTitle}
                   onChange={articleTitleChangeHandler}/>
            <button onClick={createArticle}>Create Article</button>
            <br/>
            <input type="number"
                   value={userInput.articleId}
                   onChange={articleIdChangeHandler}/>
            <button onClick={deleteArticle}>Delete Article</button>
        </div>
    );
};

export default ProtectedPage;