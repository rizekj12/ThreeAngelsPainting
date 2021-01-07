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

    const [formInfo, setFormInfo] = useState({
        firstName: '',
        lastName: '',
        eMail: '',
        phoneNumber: '',
        subject:'',
        message: ''
    })


    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormInfo((prevState) => ({
                ...prevState,
                [name]: value
        }))
    }


        return (
            <>
                <Nav />
                <Header />
                <Services />
                <AboutUs />
                <OurWork/>
                <Quote formInfo={formInfo} handleFormChange={handleChange}/>
                <Testimonials/>
                <Footer/>
            </>
        )
    
}

export default Home;

