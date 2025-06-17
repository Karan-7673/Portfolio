import React from 'react'
import Hero from '../components/Hero'
import Aboutus from '../components/Aboutus'
import Education from '../components/Education'
import InternShip from '../components/InternShip'
import WorkExperience from '../components/WorkExperience'
import ContactUs from '../components/ContactUs'
import Certificates from '../components/Certificates'
import { Helmet } from 'react-helmet'
export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home - Karan Dakave</title>
                <meta name="description" content="Welcome to the portfolio of Karan Dakave, a React Developer passionate about building responsive and scalable web applications." />
                <meta name="keywords" content="React Developer, Frontend Developer, Web Developer, JavaScript, Tailwind, Bootstrap, API Integration, Karan Dakave Portfolio" />
                <meta property="og:title" content="Home - Karan Dakave" />
                <meta property="og:description" content="Explore the portfolio of Karan Dakave, showcasing React projects, UI/UX skills, and web development expertise." />
                <meta property="og:image" content="/meta_image.jpg" />
                <meta property="og:url" content="https://prathameshportfolio.vercel.app/" />
            </Helmet>
            <Hero />
            <Aboutus />
            <Education />
            <InternShip />
            <WorkExperience />
            <Certificates />
            <ContactUs />
        </>
    )
}
