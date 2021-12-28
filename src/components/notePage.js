import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { AppHome } from "./appContent";
import AppFooter from "./appFooter";
import AppHeader from "./appHeader";

export  const NotePage = () => {
    return <Layout className="mainLayout">
    <Header>
      <AppHeader/>
    </Header>
    <Content style={{marginTop: 64}}>
      <AppHome/>
    </Content>
    <Footer>
      <AppFooter/>  
    </Footer>      
  </Layout>
    
    
  };