import { Layout } from "antd";
import NavBar from "./Components/Layout/NavBar";
import HeroCarousel from "./Components/Home/HeroCarousel";
import GetToKnow from "./Components/Home/GetToKnow";
import SiteFooter from "./Components/Layout/Footer";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout className="m-0 ">
        <Header className="bg-dark-green h-20 py-2">
          <NavBar />
        </Header>
        <Content className="bg-white w-full overflow-x-hidden">
          <HeroCarousel />
          <GetToKnow />
        </Content>
        <Footer className="bg-beige rounded-t-[70px]">
          <SiteFooter />
        </Footer>
      </Layout>
    </>
  );
}

export default App;
