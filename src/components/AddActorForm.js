import React from "react";
import { Modal, Form, Input, Button } from "antd";
import UActor from "../models/UActor";
import { connect } from "react-redux";
import { createUActor } from "../redux/uActorActions";

const mapDispatchToProps = (dispatch) => ({
    createUActor: (uactor) => {
        dispatch(createUActor(uactor));
    },
});

class AddActorForm extends React.Component {
    constructor(props) {
        super(props);
    }

    handleFinish = (values) => {
        // TODO: Validator for name, ip and port!
        // Create a new UActor with name, ip and port, leave the second argument null, which is pid(provided by server)
        const actor = UActor(values.actorname, null, values.ip, values.port);
        this.props.createUActor(actor);
        this.props.okDelegation();
    };

    handleCancel = () => {
        this.props.cancelDelegation();
    };

    render() {
        return (
            <Modal title="Create an uActor" visible={this.props.visible} footer={null} onCancel={this.handleCancel}>
                <Form name="normal_login" id="Form" onFinish={this.handleFinish}>
                    <Form.Item
                        name="actorname"
                        rules={[
                            {
                                required: true,
                                pattern: new RegExp(/^\S+$/),
                                message: "Please input your node name without space inbetween!",
                            },
                        ]}
                    >
                        <Input id="actorname" placeholder="Actor Name" />
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
                        <Input id="actorip" placeholder="127.0.0.1" />
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
                        <Input id="actorport" placeholder="port" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        );
    }
}

export default connect(null, mapDispatchToProps)(AddActorForm);
