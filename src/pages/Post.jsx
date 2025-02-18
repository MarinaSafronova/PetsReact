import HeroPost from "../components/Sections/Post/HeroPost"
import Content from "../components/Sections/Post/Content"
import GetStartPost from "../components/Sections/Post/GetStartPost"
import Layout from "../components/Layout/Layout"
import Form from "../components/Form/Form"

function Post() {
  return (
    <Layout>
        <HeroPost/>
        <Content/>
        <GetStartPost/>
        <Form/>
    </Layout>
  )
}

export default Post