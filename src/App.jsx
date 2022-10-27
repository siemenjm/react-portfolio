import './styles/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';

function App() {
    const [currentPage, setCurrentPage] = useState('/');

    return (
        <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Main />
            <Footer />
        </>
    );
}

export default App;
