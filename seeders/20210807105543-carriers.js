'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('carriers', [
            {
                name: 'Amsterdam Cargo 1',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Amsterdam Cargo 2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Amsterdam Cargo 3',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('carriers', null, {});
    }
};
