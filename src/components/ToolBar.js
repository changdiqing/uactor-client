import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Modal, Button } from "antd";
import AddActorForm from "./AddActorForm";

const ToolBar = () => {
    const tools = ["Explorer", "Dashboard", "+", "group", "deploy"];
    const toolbarMenu = [
        {
            name: "Explorer",
            path: "/",
        },
        {
            name: "Dashboard",
            path: "/dashboard",
        },
        {
            name: "group",
            path: "/group",
        },
    ];
    const [toolsIndex, setToolsIndex] = useState(-1);

    const handleClickMenu = (event) => {
        setToolsIndex(event.key);
    };

    const handleOk = () => {
        setToolsIndex(-1);
    };

    const handleCancel = () => {
        setToolsIndex(-1);
    };
    const styledTopics = [];
    toolbarMenu.forEach((item, index) =>
        styledTopics.push(
            <Link to={item.path}>
                <Menu.Item key={index}>{item.name}</Menu.Item>
            </Link>
        )
    );

    return (
        <>
            <Menu mode="inline" selectedKeys={[toolsIndex]}>
                {styledTopics}
            </Menu>
            <AddActorForm visible={toolsIndex == 1} okDelegation={handleOk} cancelDelegation={handleCancel} />
        </>
    );
};
export default ToolBar;
