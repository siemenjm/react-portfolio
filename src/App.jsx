import { useState } from 'react';
import './styles/App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { useLocation } from 'react-router';

import ReactGA from 'react-ga';
const TRACKING_ID = 'UA-217570358-1';
ReactGA.initialize(TRACKING_ID);

function App() {
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(location.pathname);

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Main currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </>
  );
}

export default App;
