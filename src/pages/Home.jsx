import Articles from "../components/Sections/Home/Articles";
import GetStart from "../components/Sections/Home/GetStart";
import Hero from "../components/Sections/Home/Hero";
import Plans from "../components/Sections/Home/Plans";
import Qualifies from "../components/Sections/Home/Qualifies";
import Reviews from "../components/Sections/Home/Review";
import SimpleSteps from "../components/Sections/Home/SimpleSteps";
import Trust from "../components/Sections/Home/Trust";
import WhatSEA from "../components/Sections/Home/WhatSEA";
import WithoutESA from "../components/Sections/Home/WithoutESA";
import Layout from "../components/Layout/Layout";
import Form from "../components/Form/Form";

function Home() {
    return (
        <Layout>
            <Hero/>
            <SimpleSteps />
            <WhatSEA />
            <Trust />
            <Qualifies />
            <WithoutESA />
            <Reviews />
            <Plans />
            <Articles />
            <GetStart/>
            <Form/>
        </Layout>
    );
}

export default Home;
