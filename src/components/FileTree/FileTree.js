import React from "react";
import { Row, Col, Tree, Button, Input } from "antd";
import FileServices from "../../services/FileServices";
import { FolderOpenOutlined } from "@ant-design/icons";
import { FilePicker } from "react-file-picker";
import "./FileTree.css";

const { DirectoryTree } = Tree;

class FileTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            files: [],
        };
    }

    componentDidMount() {
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

    handleFilePickerChange = (event) => {
        this.setState({
            selectedFile: event.target.value,
        });
    };

    handleOpenDir = () => {
        console.log(this.state.selectedFile);
        this.loadFileTree(this.state.selectedFile);
    };

    render() {
        return (
            <>
                <Row>
                    <Col span={4}>
                        <Button icon={<FolderOpenOutlined />} onClick={this.handleOpenDir} />
                    </Col>
                    <Col span={20}>
                        <Input onChange={this.handleFilePickerChange} />
                    </Col>
                </Row>
                <DirectoryTree
                    className="filetree"
                    //multiple
                    //defaultExpandAll
                    showIcon={false}
                    blockNode={false}
                    onSelect={this.onSelect}
                    onExpand={this.onExpand}
                    treeData={this.state.files}
                />
            </>
        );
    }
}
export default FileTree;
