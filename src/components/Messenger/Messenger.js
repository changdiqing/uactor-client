import React from "react";
import AceEditor from "react-ace";
import { Layout, Row, Col, Button, Form, Input } from "antd";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-monokai";
import { CaretRightOutlined } from "@ant-design/icons";
import UActorService from "../../services/UActorService";

const sampleMsg = {
    publisher_node_id: "bootstrap_server",
    publisher_actor_type: "peer_announcer",
    publisher_instance_id: "1",
    _internal_sequence_number: 1,
    _internal_epoch: 1,
    type: "peer_announcement",
    peer_type: "tcp_server",
    peer_ip: "127.0.0.1",
    peer_port: 5556,
    peer_node_id: "example_node_1",
};

class Messenger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileContent: JSON.stringify(sampleMsg),
            respData: "",
        };
    }

    handleSocketOutput = (output) => {
        let newOutput = this.state.reapData + "\n" + output;
        this.setState({ respData: newOutput });
    };

    handleMessage = (values) => {
        if (!this.isValidJson(this.state.fileContent)) alert("not valid json!");
        let ip = values.ip;
        let port = parseInt(values.port);
        if (isNaN(port)) {
            alert("Port must be a number!");
            return;
        }
        let jsonMsg = this.state.fileContent;
        UActorService.sendNodeMessage(ip, port, jsonMsg)
            .then((data) => {
                this.setState({
                    respData: data,
                });
            })
            .catch((err) => {
                this.setState({
                    respData: err.message,
                });
            });
    };

    onEditorChange = (value) => {
        this.setState({
            fileContent: value,
        });
    };

    isValidJson = (jsonString) => {
        try {
            JSON.parse(jsonString);
        } catch (err) {
            return false;
        }
        return true;
    };

    render() {
        return (
            <div>
                <Layout className="Messenger">
                    <Layout.Content>
                        <Form name="messageForm" id="messageForm" onFinish={this.handleMessage} layout="inline">
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
                            <Form.Item>
                                <Button icon={<CaretRightOutlined />} htmlType="submit" />
                            </Form.Item>
                        </Form>
                        <Row>
                            <Col>
                                <AceEditor
                                    placeholder="Write your message in JSON"
                                    mode="json"
                                    theme="monokai"
                                    name="jsonEditor"
                                    //onLoad={}
                                    onChange={this.onEditorChange}
                                    fontSize={14}
                                    showPrintMargin={true}
                                    showGutter={true}
                                    highlightActiveLine={true}
                                    value={this.state.fileContent}
                                    setOptions={{
                                        enableBasicAutocompletion: false,
                                        enableLiveAutocompletion: false,
                                        enableSnippets: false,
                                        showLineNumbers: true,
                                        tabSize: 2,
                                        useWorker: false,
                                    }}
                                />
                            </Col>
                            <Col>
                                <div>{this.state.respData}</div>
                            </Col>
                        </Row>
                    </Layout.Content>
                </Layout>
            </div>
        );
    }
}

export default Messenger;
