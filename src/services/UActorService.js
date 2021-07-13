/*
    Provide uActor related services
*/

import axios from "axios";
export default class UActorService {
    // Create a new uActor
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
    // Query all active uActors
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
}
