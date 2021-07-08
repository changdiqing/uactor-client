import net from "net";
import { encode } from "@msgpack/msgpack";

function Node(id, ip, port) {
    this.id = id;
    this.ip = ip;
    this.port = port;
}

function peerAnnouncer(nodes) {
    let t = Math.floor(new Date() / 1000);
    console.log(nodes);
    nodes.forEach((node) => {
        let socket = new net.Socket();
        socket.connect(node.port, node.ip, () => {
            console.log("connected " + node);
            nodes.forEach((node) => {
                let peer_message = {};
                peer_message["publisher_node_id"] = "bootstrap_server";
                peer_message["publisher_actor_type"] = "peer_announcer";
                peer_message["publisher_instance_id"] = "1";
                peer_message["_internal_sequence_number"] = t;
                peer_message["_internal_epoch"] = t;

                peer_message["type"] = "peer_announcement";
                peer_message["peer_type"] = "tcp_server";

                peer_message["peer_ip"] = node.ip;
                peer_message["peer_port"] = node.port;
                peer_message["peer_node_id"] = node.id;
                console.log(peer_message);

                let peer_msg = Buffer.from(encode(peer_message));
                // TODO: too many magic numbers!
                let buf = Buffer.allocUnsafe(4);
                buf.writeIntBE(peer_msg.length, 0, 4);
                let bufTotal = Buffer.concat([buf, peer_msg]);
                console.log(Buffer.from(bufTotal));
                socket.write(buf);
                console.log(buf.length);
                console.log(buf);
                socket.write(peer_msg);
                console.log(peer_msg.length);
                let idx = 0;
                while (idx < peer_msg.length) {
                    let end = Math.min(idx + 10, peer_msg.length);
                    console.log(peer_msg.slice(idx, end));
                    idx += 10;
                }
                //socket.write(bufTotal);
                t++;
            });
            setTimeout(() => {
                console.log(`Wait 1000 milliseconds`);
            }, 1000);
        });
        console.log("end connection");
    });
    console.log("finished");
}

var peers = [new Node("example_node_1", "127.0.0.1", 5555), new Node("example_node_2", "127.0.0.1", 5556)];

peerAnnouncer(peers);
