
import WhatWeDo from "../components/Sections/About/WhatWeDo";
import Choose from "../components/Sections/About/Choose";
import Mission from "../components/Sections/About/Mission";
import HeroAbout from "../components/Sections/About/HeroAbout";
import Layout from "../components/Layout/Layout";
import Form from "../components/Form/Form";

function About(){
    return (
        <Layout>
            <HeroAbout/>
            <WhatWeDo/>
            <Choose/>
            <Mission/>
            <Form/>
        </Layout>   
    )
}

export default About;