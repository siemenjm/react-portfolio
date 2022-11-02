import { useState } from 'react';
import './styles/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
    const [currentPage, setCurrentPage] = useState('/');

    return (
        <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Main currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Footer />
        </>
    );
}

export default App;
