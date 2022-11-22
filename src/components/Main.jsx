import React from 'react';
import { Route, Routes } from 'react-router';
import AboutMePage from '../pages/AboutMePage';
import ClientWorkPage from '../pages/ClientWorkPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';

export default function Main() {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage />}/>
            <Route path='/about-me' element={<AboutMePage />}/>
            <Route path='/projects' element={<ProjectsPage />}/>
            <Route path='/client-work' element={<ClientWorkPage />}/>
            <Route path='/contact' element={<ContactPage />}/>
        </Routes>
    );
}
