import React from "react";
import "./App.css";
import { Layout } from "antd";
import SideBar from "./components/SideBar/SideBar";
import NavBar from "./components/NavBar/NavBar";
import ToolBar from "./components/ToolBar";
import ActorBoard from "./components/ActorBoard/ActorBoard";

function App() {
    const Menu = <ToolBar />;
    return (
        <div className="App">
            <NavBar menu={Menu} />
            <Layout>
                <SideBar menu={Menu} />
                <Layout.Content className="content">
                    <ActorBoard />
                </Layout.Content>
            </Layout>
        </div>
    );
}

export default App;
