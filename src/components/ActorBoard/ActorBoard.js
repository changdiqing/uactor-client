import React from "react";
import { Card, Col, Row } from "antd";
import "./ActorBoard.css";
import { connect } from "react-redux";
import { fetchUActors } from "../../redux/uActorActions";

const mapStateToProps = (state) => ({
    uActorReducer: state.uActorReducer,
});

const mapDispatchToProps = (dispatch) => ({
    fetchUActors: () => {
        dispatch(fetchUActors());
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
        props.fetchUActors();
    }
    render() {
        return (
            <div className="ActorBoard">
                {this.props.uActorReducer.loading
                    ? "Loading"
                    : this.props.uActorReducer.uActors.map((actor) => (
                          <Card className="ActorCard" title="Unknown Name" bordered={false}>
                              {actor.pid}
                              <br />
                              {actor.port}
                          </Card>
                      ))}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActorBoard);
