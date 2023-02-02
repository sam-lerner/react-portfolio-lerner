import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from '../pages/Home';
import Portfolio from './Portfolio';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import Footer from '../components/Footer'

const styles= {
    body: {
    height: '150vh',
    color: "blue",
    fontFamily: "Century Gothic"
  },
    footer: {
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '0'
    }
}

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');


    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div style={styles.body}>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <div style={styles.footer}>
            <Footer/>;
            </div>
        </div>
    );
}