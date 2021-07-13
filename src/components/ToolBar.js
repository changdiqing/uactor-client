import React, { useState } from "react";
import { Menu, Modal, Button } from "antd";
import AddActorForm from "./AddActorForm";

const ToolBar = () => {
    const tools = ["+", "group", "deploy"];
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
            <AddActorForm visible={toolsIndex == 0} okDelegation={handleOk} cancelDelegation={handleCancel} />
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
