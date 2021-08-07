import {iDemand} from "./demand_interface";
import {DemandAbstract} from "./demand_abstract";

class Demand extends DemandAbstract implements iDemand {
    id: number;

    constructor(id) {
        super()
        this.id = id
    }

}