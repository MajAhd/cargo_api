import * as express from "express"

require("dotenv").config();
const router = express.Router();
import * as DemandController from "../controller/demand.controller"
import {UserMiddleware} from "../middleware/user.middleware";

const demand_url = process.env.API_V1 + "/demand";


router.get(demand_url + "/:demand_id", UserMiddleware, DemandController.get_demand);
router.post(demand_url, UserMiddleware, DemandController.post_new_demand);
router.post(demand_url + '/:demand_id', UserMiddleware, DemandController.post_update_demand);
router.post(demand_url + '/:demand_id/status', DemandController.post_demand_status);

module.exports = router;