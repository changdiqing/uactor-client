import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "antd";
import SideBar from "./components/SideBar/SideBar";
import SubSideBar from "./components/SubSideBar/SubSideBar";
import NavBar from "./components/NavBar/NavBar";
import ToolBar from "./components/ToolBar";
import FileTree from "./components/FileTree/FileTree";
import ActorBoard from "./components/ActorBoard/ActorBoard";
import CodeEditorBoard from "./components/CodeEditorBoard/CodeEditorBoard";

function App() {
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
                        </Switch>
                    </Layout.Content>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
