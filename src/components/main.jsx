import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "../pages/login";
import Home from '../pages/home';

export default function Main() {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={true ? <Home /> : <Navigate to="/" />} />
        </Routes>
    );
}