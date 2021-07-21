import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "antd";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import ToolBar from "./components/ToolBar";
import ActorBoard from "./components/ActorBoard/ActorBoard";
import { connect } from "react-redux";
import CodeEditorBoard from "./components/CodeEditorBoard/CodeEditorBoard";
import Messenger from "./components/Messenger/Messenger";
import { fetchUActors, removeUActor } from "./redux/uActorActions";

const mapDispatchToProps = (dispatch) => ({
    fetchUActors: () => {
        dispatch(fetchUActors());
    },
});
function App(props) {
    // Initial actions
    props.fetchUActors();

    const Menu = <ToolBar />;
    return (
        <div className="App">
            <Router>
                <NavBar menu={Menu} />
                <Layout>
                    <SideBar menu={Menu} />
                    <Layout.Content className="content">
                        <Switch>
                            <Route exact path="/" component={CodeEditorBoard} />
                            <Route exact path="/dashboard" component={ActorBoard} />
                            <Route exact path="/messenger" component={Messenger} />
                        </Switch>
                    </Layout.Content>
                </Layout>
            </Router>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(App);
