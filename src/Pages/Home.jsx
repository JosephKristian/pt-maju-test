import React from 'react';
import Navbar from '../components/NavBar/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer/Footer';
import AboutSection from '../components/About/AboutSection';
import OurNewArrivalSection from '../components/OurNewArrival';
import OurPropertiesSection from '../components/OurProperties/index';
import OurServicesSection from '../components/OurServices';


const Home = () => {
    return (
        <>
            <Navbar />
            <section className="relative w-full text-white overflow-hidden">
                <Hero />
            </section>
            <section className="py-[56px] md:py-20 px-[16px] md:px-[56px] pb-[61px] bg-[#F1F6FD] min-h-[906px] md:min-h-[625px]">
                <AboutSection />
            </section>
            <section className="py-[56px] md:py-20 px-[16px] md:px-[56px] min-h-[620px] md:min-h-[584px]">
                <OurPropertiesSection />
            </section>
            <section className="py-[56px] md:py-20 bg-white min-h-[823px] md:min-h-[817px]">
                <OurNewArrivalSection />
            </section>
            <section className="py-[56px] md:py-20 px-[16px] md:px-[56px] min-h-[620px] md:min-h-[584px]">
                <OurServicesSection />
            </section>

            <Footer />
        </>
    );
};

export default Home;
