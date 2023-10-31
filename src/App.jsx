import { Layout } from "antd";
import NavBar from "./Components/Layout/NavBar";
import SiteFooter from "./Components/Layout/Footer";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <Layout className="relative m-0">
        <Header className="h-20 bg-light-green">
          <NavBar />
        </Header>
        <Content className=" w-full overflow-x-hidden bg-white">
          <Outlet />
        </Content>
        <Footer className="relative rounded-t-[70px] bg-beige">
          <SiteFooter />
        </Footer>
      </Layout>
    </>
  );
}

export default App;
