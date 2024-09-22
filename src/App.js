import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GoogleAuthRedirect from './GoogleAuthRedirect';
import ProtectedPage from "./ProtectedPage";
import GoogleAuth from "./GoogleAuth";

const App = () => {

    return (
        <Router>
            <div style={{textAlign: 'center', marginTop: '50px'}}>
                <Routes>
                    <Route path="/" element={<GoogleAuth/>}/>
                    {/* Добавляем маршрут для обработки перенаправления от Google */}
                    <Route path="/auth/google/redirect" element={<GoogleAuthRedirect/>}/>
                    <Route path="/protected" element={<ProtectedPage/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
