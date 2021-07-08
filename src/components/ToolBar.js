import React, { useState } from "react";
import { Menu } from "antd";
import { Modal, Button } from "antd";

const ToolBar = () => {
    const tools = ["+", "group", "deploy"];
    const [toolsIndex, setToolsIndex] = useState(-1);

    const handleClickMenu = (event) => {
        console.log(event.key);
        setToolsIndex(event.key);
    };

    const handleOk = () => {
        setToolsIndex(-1);
    };

    const handleCancel = () => {
        setToolsIndex(-1);
    };
    const styledTopics = [];
    tools.forEach((topic, index) =>
        styledTopics.push(
            <Menu.Item key={index} onClick={handleClickMenu}>
                {topic}
            </Menu.Item>
        )
    );

    return (
        <>
            <Menu mode="inline" selectedKeys={[toolsIndex]}>
                {styledTopics}
            </Menu>
            <Modal title="Basic Modal 1" visible={toolsIndex == 0} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <Modal title="Basic Modal 2" visible={toolsIndex == 1} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <Modal title="Basic Modal 3" visible={toolsIndex == 2} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    );
};
export default ToolBar;
