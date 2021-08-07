import express from "express";
import bodyParser from "body-parser";
import path from "path";
import compression from 'compression';
import methodOverride from 'method-override';


const app = express();
// routes
const DemandRoute = require("./routes/demand.route")
const SupplyRoute = require("./routes/supply.route")
// App usages
app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,Delete,PUT,PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
    next();
});

// routes usages
app.use(DemandRoute)
app.use(SupplyRoute)
app.use("/public", express.static(path.join(__dirname, "public")));
app.get("/", (req, res, next) => {
    res.json({
        status: 200,
        msg: "Cargo Api!"
    });
});

app.use((req, res, next) => {
    res.json({
        status: 404,
        msg: "Request Not Found!"
    });
});

module.exports = app;
