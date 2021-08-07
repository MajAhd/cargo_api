import http from "http"
import winston from 'winston'
import cluster from "cluster"

require("dotenv").config();

let app = require("./src")

let numOfCPUs = require("os").cpus().length;

const server = http.createServer(app);

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.printf((info) => {
            return `${info.timestamp} - ${info.level}: ${info.message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: 'logs/logfile.log'})
    ]
});

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
