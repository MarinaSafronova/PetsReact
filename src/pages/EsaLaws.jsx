import GetStartEsa from "../components/Sections/EsaLaws/GetStartEsa";
import HeroEsa from "../components/Sections/EsaLaws/HeroEsa";
import EsaTopics from "../components/Sections/EsaLaws/Topics/EsaTopics";
import Layout from "../components/Layout/Layout";
import Form from "../components/Form/Form";


function EsaLaws(){
    return (
        <Layout>
            <HeroEsa/>
            <EsaTopics/>
            <GetStartEsa/>
            <Form/>
        </Layout>
    )
}

export default EsaLaws;