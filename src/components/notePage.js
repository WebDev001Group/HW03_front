import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import { connect } from "react-redux";
import { logout } from "../redux/actions";
import { AppHome } from "./appContent";
import AppFooter from "./appFooter";
import AppHeader from "./appHeader";
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
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader logout={logout} />
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
