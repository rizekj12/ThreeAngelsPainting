import React, { useState } from 'react';
import Nav from './Nav'
import Header from './Header'
import AboutUs from './AboutUs'
import Services from './Services'
import '../CSS/Home.scss'


const Home = () => {

        return (
            <div>
                <Nav />
                <Header />
                <Services />
                <AboutUs />

            </div>
        )
    
}

export default Home;

