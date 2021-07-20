import React, { useState } from "react";
import { Menu, Modal, Button, Tree } from "antd";
import FileServices from "../../services/FileServices";
import { ConsoleSqlOutlined } from "@ant-design/icons";
import "./FileTree.css";

const { DirectoryTree } = Tree;
const treeData = [
    {
        title: "parent 0",
        key: "-0",
        isLeaf: false,
        children: [
            {
                title: "leaf 0-0 adjaiosdjpasodj",
                key: "0-0-0",
                isLeaf: true,
            },
            {
                title: "leaf 0-1",
                key: "1-0-2",
                isLeaf: true,
            },
        ],
    },
    {
        title: "parent 1",
        key: "-1",
        isLeaf: true,
        children: [
            {
                title: "leaf 1-0",
                path: "this is my path",
                key: "0-1-0",
                isLeaf: true,
            },
            {
                title: "leaf 1-1",
                key: "0-1-1",
                isLeaf: true,
            },
        ],
    },
];

class FileTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
        };
    }

    componentWillMount() {
        this.loadFileTree("/Users/diqingchang/uActor/examples/");
    }

    loadFileTree(dir) {
        FileServices.readDir(dir)
            .then((data) => {
                this.setState({ files: data });
            })
            .catch((err) => {
                console.error(err);
                alert(err);
            });
    }

    onSelect = (keys, info) => {
        console.log("Trigger Select", keys, info);
        let node = info.selectedNodes[0];
        this.props.onSelect(node);
    };

    onExpand = () => {
        console.log("Trigger Expand");
    };

    render() {
        return (
            <DirectoryTree
                className="filetree"
                //multiple
                //defaultExpandAll
                showIcon={false}
                blockNode={false}
                onSelect={this.onSelect}
                onExpand={this.onExpand}
                //treeData={treeData}
                treeData={this.state.files}
            />
        );
    }
}
export default FileTree;
