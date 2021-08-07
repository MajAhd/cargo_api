'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('suppliers', [
            {
                carrier_id: 1,
                license_plate: "license_plate 1",
                geo_lat: 52.354462,
                geo_lon: 4.836563,
                allowed_weight: 50,
                current_cargo_weight: 200,
                current_number_of_pallets: 200,
                max_number_of_pallets: 50,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                carrier_id: 1,
                license_plate: "license_plate 2",
                geo_lat: 52.358848,
                geo_lon: 4.831245,
                allowed_weight: 50,
                current_cargo_weight: 200,
                current_number_of_pallets: 200,
                max_number_of_pallets: 50,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                carrier_id: 1,
                license_plate: "license_plate 3",
                geo_lat: 52.380192,
                geo_lon: 4.847719,
                allowed_weight: 10,
                current_cargo_weight: 300,
                current_number_of_pallets: 200,
                max_number_of_pallets: 50,
                createdAt: new Date(),
                updatedAt: new Date()
            },

            {
                carrier_id: 2,
                license_plate: "license_plate 4",
                geo_lat: 52.364389,
                geo_lon: 4.806828,
                allowed_weight: 2,
                current_cargo_weight: 100,
                current_number_of_pallets: 100,
                max_number_of_pallets: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                carrier_id: 2,
                license_plate: "license_plate 5",
                geo_lat: 52.342872,
                geo_lon: 4.904592,
                allowed_weight: 100,
                current_cargo_weight: 1000,
                current_number_of_pallets: 500,
                max_number_of_pallets: 1000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                carrier_id: 2,
                license_plate: "license_plate 6",
                geo_lat: 52.359099,
                geo_lon: 4.880573,
                allowed_weight: 90,
                current_cargo_weight: 1000,
                current_number_of_pallets: 900,
                max_number_of_pallets: 1000,
                createdAt: new Date(),
                updatedAt: new Date()
            },


            {
                carrier_id: 3,
                license_plate: "license_plate 7",
                geo_lat: 52.356704,
                geo_lon: 4.803852,
                allowed_weight: 2,
                current_cargo_weight: 100,
                current_number_of_pallets: 100,
                max_number_of_pallets: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                carrier_id: 3,
                license_plate: "license_plate 8",
                geo_lat: 52.417884,
                geo_lon: 4.788830,
                allowed_weight: 500,
                current_cargo_weight: 200,
                current_number_of_pallets: 40,
                max_number_of_pallets: 100,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                carrier_id: 3,
                license_plate: "license_plate 9",
                geo_lat: 52.356412,
                geo_lon: 4.914082,
                allowed_weight: 90,
                current_cargo_weight: 1000,
                current_number_of_pallets: 900,
                max_number_of_pallets: 1000,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('suppliers', null, {});
    }
};
