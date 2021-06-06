import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { specObjOne, specObjTwo } from '../components/InfoSection/data';
import Footer from '../components/Footer';
import Maps from '../components/Maps';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...specObjOne} />
            <InfoSection {...specObjTwo} />
            <Maps />
            <Footer />
        </>
    )
}

export default Home;
