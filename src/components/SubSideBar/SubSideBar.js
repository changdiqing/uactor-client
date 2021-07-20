import React from "react";
import { Layout } from "antd";
import "./SubSideBar.css";
const SubSideBar = ({ menu }) => {
    return (
        <Layout.Sider
            className="subsidebar"
            //breakpoint={"lg"}
            theme="light"
            collapsedWidth={0}
            trigger={null}
        >
            {menu}
        </Layout.Sider>
    );
};
export default SubSideBar;
