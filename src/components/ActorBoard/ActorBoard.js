import React from "react";
import { Card } from "antd";
import "./ActorBoard.css";
import { connect } from "react-redux";
import { fetchUActors, removeUActor } from "../../redux/uActorActions";
import socketClient from "socket.io-client";
import { CloseOutlined } from "@ant-design/icons";

const mapStateToProps = (state) => ({
    uActorReducer: state.uActorReducer,
});

const mapDispatchToProps = (dispatch) => ({
    fetchUActors: () => {
        dispatch(fetchUActors());
    },
    removeUActor: (pid) => {
        dispatch(removeUActor(pid));
    },
});

let testActors = [
    {
        name: "example_node_1",
        address: "127.0.0.1:5555",
    },
    {
        name: "example_node_2",
        address: "127.0.0.1:5556",
    },
];

class ActorBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchUActors();
    }


    handleCardClose = (actor) => {
        this.props.removeUActor(actor.pid);
    };
    render() {
        return (
            <div className="ActorBoard">
                {this.props.uActorReducer.loading
                    ? "Loading"
                    : this.props.uActorReducer.uActors.map((actor) => (
                          <Card
                              className="ActorCard"
                              title={actor.name}
                              bordered={false}
                              actions={[<CloseOutlined key="close" onClick={() => this.handleCardClose(actor)} />]}
                          >
                              {actor.pid}
                              <br />
                              {actor.ip}
                          </Card>
                      ))}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActorBoard);
