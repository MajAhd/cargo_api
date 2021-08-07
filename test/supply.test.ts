import Supplier from "../src/models/supply/instances/supplier";

const expect = require('chai').expect

describe("Supplier", () => {

    it('Get Supplier info', async () => {

        let result = await Supplier.get_supply_info(1)
        expect(result).to.be.an('object')
    });
    it('Get undefined Supplier info', async () => {
        let result = await Supplier.get_supply_info(0)
        expect(result).to.be.equal(null);
    });

    it("new supplier" , async () => {

    })

    it("update supplier license plate" , async () => {

    })

    it("update supplier cargo" , async () => {

    })

})
