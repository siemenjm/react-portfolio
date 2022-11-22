import { useState } from 'react';
import './styles/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { useLocation } from 'react-router';

function App() {
    const location = useLocation();
    console.log(location)

    const [currentPage, setCurrentPage] = useState(location.pathname);

    return (
        <>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <Main />
            <Footer />
        </>
    );
}

export default App;
