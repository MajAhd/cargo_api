import http from "http"
import cluster from "cluster"
import {logger} from "./config/logger";

require("dotenv").config();

let app = require("./src")

let numOfCPUs = require("os").cpus().length;

const server = http.createServer(app);



if (cluster.isWorker) {
    const {SERVER_HOST, SERVER_PORT} = process.env;
    server.listen(SERVER_PORT, () => {
        logger.log('info', `Cargo Api run Port: ${SERVER_PORT}`);
        logger.log('info', `Cargo Api run URL: http://${SERVER_HOST}:${SERVER_PORT}`);
    });

} else {
    // You can also of course get a bit fancier about logging, and
    // implement whatever custom logic you need to prevent DDoS attacks and other bad behavior.
    // See the options in the cluster documentation.
    // The important thing is that the Master(or in node 16> Primary) does very little,
    // increasing our resilience to unexpected errors.

    for (let i = 0; i < numOfCPUs; i++) {
        cluster.fork();
    }

    cluster.on("online", function (worker) {
        logger.log('info', `Worker ${worker.process.pid} is online`);
    });
    cluster.on("exit", (worker, code, signal) => {
        logger.log('info', `'Worker ${worker.process.pid} died with code: ${code} , and signal: ${signal}`);
        logger.log('info', 'Starting a new worker');
        cluster.fork();
    });
}
