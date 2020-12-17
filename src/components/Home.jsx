import React, { useState } from 'react';
import Nav from './Nav'
import Header from './Header'
import AboutUs from './AboutUs'
import Services from './Services'
import OurWork from './OurWork'
import Quote from './Quote'
import Testimonials from './Testimonials'
import Footer from './Footer'
import '../CSS/Home.scss'


const Home = () => {

        return (
            <>
                <Nav />
                <Header />
                <Services />
                <AboutUs />
                <OurWork/>
                <Quote/>
                <Testimonials/>
                <Footer/>
            </>
        )
    
}

export default Home;

