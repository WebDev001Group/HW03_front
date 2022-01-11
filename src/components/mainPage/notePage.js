import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions";
import { AppHome } from "./content/appContent";
import AppHeader from "./header/appHeader";
import AppFooter from "./footer/appFooter";
// import AppHeader from "./mainPage/header/appHeader";
const mapStateToProps = (state) => {
  // console.log("state: ",state)
  return {
    isLoggedIn: state.loggedInReducer.isLoggedIn,
    username: state.loggedInReducer.username,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
const NotePage = ({ isLoggedIn, username, logout }) => {
  const navigate =useNavigate()
  useEffect(()=>{
    if(!isLoggedIn){
      navigate("/")
    }

  },[])
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader logout={logout} username={username} />
      </Header>
      <Content style={{ marginTop: 64 }}>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(NotePage);
