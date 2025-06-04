import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/NavBar/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer/Footer';
import AboutSection from '../components/About/AboutSection';
import OurNewArrivalSection from '../components/OurNewArrival';
import OurPropertiesSection from '../components/OurProperties/index';
import OurServicesSection from '../components/OurServices';
import TheTeamSection from '../components/TheTeam';

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const Home = () => {
    return (
        <>
            <Navbar />

            <motion.section
                id='hero'
                className="relative w-full text-white overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Hero />
            </motion.section>

            <motion.section
                id='about'
                className="py-[56px] md:py-20 px-[16px] md:px-[56px] pb-[61px] bg-[#F1F6FD] min-h-[906px] md:min-h-[625px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <AboutSection />
            </motion.section>

            <motion.section
                id='properties'
                className="py-[56px] md:py-20 px-[16px] md:px-[56px] min-h-[620px] md:min-h-[584px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <OurPropertiesSection />
            </motion.section>

            <motion.section
                id='newArrival'
                className="py-[56px] md:py-20 bg-white min-h-[823px] md:min-h-[817px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <OurNewArrivalSection />
            </motion.section>

            <motion.section
                id='services'
                className="py-[56px] md:py-20 px-[16px] md:px-[56px] min-h-[620px] md:min-h-[584px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <OurServicesSection />
            </motion.section>

            <motion.section
                id='team'
                className='py-[56px] md:py-20 px-[16px] md:px-[56px] bg-[#F1F6FD] min-h-[1434px] md:min-h-[850px]'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <TheTeamSection />
            </motion.section>

            <Footer />
        </>
    );
};

export default Home;
