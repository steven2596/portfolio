import React from 'react';
import About from '../../components/about/about.component';
import Footer from '../../components/footer/footer.component';
import Contact from '../../components/contact/contact.component';
import Header from '../../components/header/header.component';
import Navbar from '../../components/navbar/navbar.component';

import './home.styles.scss';
import ProjectSection from '../../components/project-section/project-section.component';

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <ProjectSection />
            <Contact />
            <Footer />
        </div>
    )
};

export default Homepage;