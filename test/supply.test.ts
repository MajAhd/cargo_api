import Supplier from "../src/models/supply/instances/supplier";
import Suppliers from "../src/models/supply/instances/suppliers";

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

    it('Get Suppliers list', async () => {
        let result = await Suppliers.get_suppliers(1)
        expect(result).to.be.an('array')
    });
    it('Get Suppliers filter', async () => {
        let result = await Suppliers.filter_suppliers(1, 10)
        expect(result).to.be.an('object')
    });

    it("new supplier", async () => {
        let sample_data = {
            license_plate: "license plate " + Math.floor(Math.random() * 500),
            carrier_id: Math.floor(Math.random() * 4),
            geo_lat: 53.75382323,
            geo_lon: 4.75382323,
            allowed_weight: Math.floor(Math.random() * 101),
            current_cargo_weight: Math.floor(Math.random() * 50),
            current_number_of_pallets: Math.floor(Math.random() * 21),
            max_number_of_pallets: Math.floor(Math.random() * 50),
        }
        let result = await Supplier.new_supplier(sample_data)
        expect(result).to.be.an('object')
    })

    it("update supplier license plate", async () => {
        let sample_data = {
            license_plate: "license_plate 9",
        }
        let result = await Supplier.update_supplier_license_plate(9, sample_data)
        expect(result).to.be.an('object')
    })

    it("update supplier cargo", async () => {
        let sample_data = {
            carrier_id: 3,
            geo_lat: 52.35641200,
            geo_lon: 4.91408200,
            allowed_weight: 90,
            current_cargo_weight: 1000,
            current_number_of_pallets: 900,
            max_number_of_pallets: 1000,
        }
        let result = await Supplier.update_supplier_cargo(9, sample_data)
        expect(result).to.be.an('object')
    })

})
