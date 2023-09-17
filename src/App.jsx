import { Layout } from "antd";
import NavBar from "./Components/Layout/NavBar";
import HeroCarousel from "./Components/Home/HeroCarousel";
import GetToKnow from "./Components/Home/GetToKnow";
import SiteFooter from "./Components/Layout/Footer";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout className="m-0">
        <Header className="h-20 bg-light-green">
          <NavBar />
        </Header>
        <Content className="w-full overflow-x-hidden bg-white">
          <HeroCarousel />
          <GetToKnow />
        </Content>
        <Footer className="rounded-t-[70px] bg-beige">
          <SiteFooter />
        </Footer>
      </Layout>
    </>
  );
}

export default App;
