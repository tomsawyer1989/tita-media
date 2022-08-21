import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home';

export default function Main() {
    return(
        <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/home" element={true ? <Home /> : <Navigate to="/" />} />
        </Routes>
    );
}