import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from "../pages/login";
import Home from '../pages/home';

function Main({ login }) {

    const navigate = useNavigate();

    useEffect(() => {
        if (login) {
            console.log(login)
            navigate('/home');
        }
    }, [login]);

    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={login ? <Home /> : <Navigate to="/" />} />
        </Routes>
    );
}

const mapStateToProps = state => ({
    login: state.users.login
});

export default connect(mapStateToProps)(Main);