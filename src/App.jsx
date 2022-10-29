import './styles/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';

function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default App;
