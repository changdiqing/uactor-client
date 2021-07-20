/*
    Provide uActor related services
*/

import axios from "axios";
export default class FileServices {
    // Create a new uActor
    static readDir(dir) {
        return new Promise((resolve, reject) => {
            axios
                .get("http://127.0.0.1:8080/files", { params: { dir: dir } })
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


    static readFile(dir) {
        return new Promise((resolve, reject) => {
            axios
                .get("http://127.0.0.1:8080/file", { params: { dir: dir } })
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
