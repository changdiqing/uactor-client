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

class ActorBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //this.props.fetchUActors();
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
