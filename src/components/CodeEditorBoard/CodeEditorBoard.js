import React from "react";
import AceEditor from "react-ace";
import { Layout, Row, Col, Devider, Button, Modal, Form, Input } from "antd";
import FileServices from "../../services/FileServices";
import SubSideBar from "../SubSideBar/SubSideBar";
import FileTree from "../FileTree/FileTree";
//import  uActorCtl  from "../../services/UActorCtl";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-monokai";
import { CaretRightOutlined } from "@ant-design/icons";
import UActorService from "../../services/UActorService";
import UActorCtlArgs from "../../models/UActorCtlArgs";

const testArguments = new UActorCtlArgs(
    "127.0.0.1",
    "5555",
    false,
    null,
    ["/Users/diqingchang/uActor/examples/tutorial_ping_pong/two_node_deployment.yml"],
    null,
    null,
    null
);
class CodeEditorBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileContent: "",
            respData: "",
            selectedFile: null,
        };
    }

    componentWillMount() {}

    handleDeploy = (values) => {
        const args = new UActorCtlArgs(
            //"127.0.0.1",
            values.ip,
            values.port,
            //"5555",
            false,
            null,
            //["/Users/diqingchang/uActor/examples/tutorial_ping_pong/two_node_deployment.yml"],
            [this.state.selectedFile],
            null,
            null,
            null
        );
        UActorService.delpoyUActor(args)
            .then((data) => {
                let msg = "Deploying " + data.file + " was successful";
                this.setState({
                    respData: msg,
                });
            })
            .catch((err) => {
                this.setState({
                    respData: err.message,
                });
            });
    };
    handleSelectFile = (node) => {
        let path = node.path;
        if (!node.isLeaf) return;
        FileServices.readFile(node.path)
            .then((data) => {
                this.setState({ fileContent: data, selectedFile: node.path });
            })
            .catch((err) => {
                console.error(err);
                alert(err);
            });
    };

    render() {
        const fileSelected = this.state.selectedFile;
        return (
            <div>
                <Layout className="CodeEditorBoard">
                    <SubSideBar menu={<FileTree onSelect={this.handleSelectFile} />} />
                    <Layout.Content>
                        <div>{this.state.selectedFile}</div>
                        <AceEditor
                            placeholder="Placeholder Text"
                            mode="yaml"
                            theme="monokai"
                            name="blah2"
                            onLoad={this.onLoad}
                            onChange={this.onChange}
                            fontSize={14}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            width="100%"
                            value={this.state.fileContent}
                            setOptions={{
                                enableBasicAutocompletion: false,
                                enableLiveAutocompletion: false,
                                enableSnippets: false,
                                showLineNumbers: true,
                                tabSize: 2,
                            }}
                        />
                        <Form name="deployForm" id="Form" onFinish={this.handleDeploy} layout="inline">
                            <Form.Item>
                                <Button disabled={!fileSelected} icon={<CaretRightOutlined />} htmlType="submit" />
                            </Form.Item>
                            <Form.Item
                                name="ip"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please assign an ip!",
                                    },
                                ]}
                            >
                                <Input id="ip" placeholder="127.0.0.1" />
                            </Form.Item>
                            <Form.Item
                                name="port"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please assign a port number!",
                                    },
                                ]}
                            >
                                <Input id="port" placeholder="port" />
                            </Form.Item>
                        </Form>
                        <Row></Row>
                        <div>{this.state.respData}</div>
                    </Layout.Content>
                </Layout>
            </div>
        );
    }
}

export default CodeEditorBoard;
