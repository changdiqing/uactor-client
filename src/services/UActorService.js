/*
    Provide uActor related services
*/

import axios from "axios";
export default class UActorService {
    // Query all active uActors
    static getUActors() {
        return new Promise((resolve, reject) => {
            axios
                .get("http://127.0.0.1:8080/uactors")
                .then((resp) => {
                    // handle success
                    console.log(resp);
                    resolve(resp.data);
                })
                // Catching all the wrong status?
                .catch((err) => {
                    // handle error
                    console.log("printing err");
                    console.log(err);
                    reject(err);
                });
        });
    }
}
