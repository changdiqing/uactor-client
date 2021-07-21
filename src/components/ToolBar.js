import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import AddActorForm from "./AddActorForm";

const ToolBar = () => {
    const toolbarMenu = [
        {
            name: "Messenger",
            path: "/messenger",
        },
        {
            name: "Explorer",
            path: "/",
        },
        {
            name: "Dashboard",
            path: "/dashboard",
        },
    ];
    const styledTopics = [];
    toolbarMenu.forEach((item, index) =>
        styledTopics.push(
            <Menu.Item key={index}>
                <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
        )
    );

    return (
        <>
            <Menu mode="inline">{styledTopics}</Menu>
        </>
    );
};
export default ToolBar;
