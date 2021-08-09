import Demand from "../src/models/demand/instance/demand";

const expect = require('chai').expect

describe("Demand", () => {
    it("get demand", async () => {
        let result = await Demand.get_demand(1)
        expect(result).to.be.an('object')
    })
    it("get undefined demand", async () => {
        it("get demand", async () => {
            let result = await Demand.get_demand(0)
            expect(result).to.be.equal(null);
        })
    })

    it("new demand", async () => {
        let sample_data = {
            user_id : 1,
            origin_lat: 51.36133500,
            origin_lon: 4.83901200,
            delivery_lon: 5.27532900,
            delivery_lat: 52.24653100,
            pallets_qtt: 10,
            total_weight: 25
        }
        let result = await Demand.new_demand(sample_data)
        expect(result).to.be.an('object')
    })


    it("update demand", async () => {
        let sample_data = {
            origin_lat: 52.36133500,
            origin_lon: 4.83901200,
            delivery_lon: 5.27532900,
            delivery_lat: 52.24653100,
            pallets_qtt: 20,
            total_weight: 100
        }
        let result = await Demand.update_demand(1, sample_data)
        expect(result).to.be.an('object')
    })

    it("update demand status", async () => {
        let sample_data = {
            status: 1,
        }
        let result = await Demand.update_demand_status(1, sample_data)
        expect(result).to.be.an('object')
    })
})