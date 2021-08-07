'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('demands', [
            {
                user_id: 1,
                origin_lat: 52.361335,
                origin_lon:  4.839012,
                delivery_lat: 52.246531,
                delivery_lon:  5.275329,
                total_weight: 100,
                pallets_qtt: 20,
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                user_id: 1,
                origin_lat: 52.357789,
                origin_lon: 4.914887,
                delivery_lat: 52.246531,
                delivery_lon:  5.275329,
                total_weight: 50,
                pallets_qtt: 2,
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                user_id: 1,
                origin_lat: 52.384471,
                origin_lon: 4.874785,
                delivery_lat: 52.246531,
                delivery_lon:  5.275329,
                total_weight: 400,
                pallets_qtt: 40,
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('demands', null, {});
    }
};
