import React from 'react';
import { Route, Routes } from 'react-router';
import AboutMePage from '../pages/AboutMePage';
import HomePage from '../pages/HomePage';

export default function Main() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage />}/>
            <Route path='/about-me' element={<AboutMePage />}/>
        </Routes>
    );
}
