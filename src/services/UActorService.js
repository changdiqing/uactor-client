/*
    Provide uActor related services
*/

import axios from "axios";
export default class UActorService {
    // Create a new node
    static createUActor(uactor) {
        return new Promise((resolve, reject) => {
            axios
                .post("http://127.0.0.1:8080/uactor", null, { params: { uactor } })
                .then((resp) => {
                    // handle success
                    resolve(resp.data);
                })
                // Catching all the wrong status?
                .catch((err) => {
                    // handle error
                    reject(err);
                });
        });
    }
    // Query all active nodes
    static getUActors() {
        return new Promise((resolve, reject) => {
            axios
                .get("http://127.0.0.1:8080/uactors")
                .then((resp) => {
                    // handle success
                    resolve(resp.data);
                })
                // Catching all the wrong status?
                .catch((err) => {
                    // handle error
                    reject(err);
                });
        });
    }

    static removeUActor(pid) {
        return new Promise((resolve, reject) => {
            axios
                .delete("http://127.0.0.1:8080/remove-uactor", { params: { pid: pid } })
                .then((resp) => {
                    resolve(resp.data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }

    // deploy a new uActor
    static delpoyUActor(ctlArgument) {
        return new Promise((resolve, reject) => {
            axios
                .get("http://127.0.0.1:8080/deploy", { params: { ctlArgument } })
                .then((resp) => {
                    // handle success
                    resolve(resp.data);
                })
                // Catching all the wrong status?
                .catch((err) => {
                    // handle error
                    reject(err);
                });
        });
    }

    static sendNodeMessage(ip, port, jsonMsg) {
        console.log(ip);
        console.log(port);
        console.log(jsonMsg);
        return new Promise((resolve, reject) => {
            axios
                .post("http://127.0.0.1:8080/message", null, { params: { ip: ip, port: port, message: jsonMsg } })
                .then((resp) => {
                    // handle success
                    resolve(resp.data);
                })
                // Catching all the wrong status?
                .catch((err) => {
                    // handle error
                    reject(err);
                });
        });
    }
}
