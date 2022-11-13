import Home from "../../pages/index"
import Layout from "../../components/LayoutComponent"

export default {
  title: "Pages/Home",
  component: Home,
}

export const HomePage = () => <Layout><Home /></Layout>