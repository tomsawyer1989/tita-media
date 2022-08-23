import React from "react";
import { connect } from "react-redux";
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from "../pages/login";
import Home from '../pages/home';

function RequireAuth({ children, login }) {
    let location = useLocation();

    if (!login) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

function Main({ login }) {
    return(
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/home"
                element={
                    <RequireAuth login={ login }>
                        <Home />
                    </RequireAuth>
                }
            />
        </Routes>
    );
}

const mapStateToProps = state => ({
    login: state.users.login
});

export default connect(mapStateToProps)(Main);