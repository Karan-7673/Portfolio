import Hero from '../components/Hero'
import Aboutus from '../components/Aboutus'
import Education from '../components/Education'
import InternShip from '../components/InternShip'
import WorkExperience from '../components/WorkExperience'
import ContactUs from '../components/ContactUs'
import { Helmet } from 'react-helmet'
import Technology from '../components/Technology'
export default function Home() {
    return (
        <>
            <Helmet>
                <title>Home - Karan Dakave</title>
                <meta
                    name="description"
                    content="Portfolio of Karan Dakave, a React Developer specializing in building responsive, scalable, and modern web applications." />
                <meta
                    name="keywords"
                    content="Karan Dakave, React Developer, Frontend Developer, Web Developer, JavaScript, Tailwind CSS, Bootstrap, API Integration, Portfolio" />
                <link rel="canonical" href="https://karandakave.vercel.app/" />
                <meta property="og:title" content="Karan Dakave | Portfolio" />
                <meta
                    property="og:description"
                    content="Explore Karan Dakave's portfolio showcasing React projects, UI/UX skills, and web development expertise." />
                <meta property="og:image" content="/meta_image.jpg" />
                <meta property="og:url" content="https://karandakave.vercel.app/" />
                <meta property="og:type" content="website" />

            </Helmet>
            <Hero />
            <Aboutus />
            <Technology />
            <Education />
            <InternShip />
            <WorkExperience />
            {/* <Certificates /> */}
            <ContactUs />
        </>
    )
}
