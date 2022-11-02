import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import AboutMePage from '../pages/AboutMePage';
import ClientWorkPage from '../pages/ClientWorkPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import ResumePage from '../pages/ResumePage';

export default function Main({ currentPage, setCurrentPage }) {
    return (
        <Routes>
            <Route exact path='/' element={<HomePage currentPage={currentPage} setCurrentPage={setCurrentPage} />}/>
            <Route path='/about-me' element={<AboutMePage />}/>
            <Route path='/projects' element={<ProjectsPage />}/>
            <Route path='/client-work' element={<ClientWorkPage />}/>
            <Route path='/contact' element={<ContactPage />}/>
            <Route path='/resume' element={<ResumePage />}/>
        </Routes>
    );
}
