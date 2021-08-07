import {Supplier} from "../src/models/supply/instances/supplier";

const expect = require('chai').expect

describe("User", () => {

    it('Get Supplier info', async () => {
        let supplier = new Supplier(1);
        let result = await supplier.get_supply_info()
        expect(result).to.be.an('object')
    });
    it('Get undefined Supplier info', async () => {
        let supplier = new Supplier(0);
        let result = await supplier.get_supply_info()
        expect(result).to.be.equal(null);
    });
})
