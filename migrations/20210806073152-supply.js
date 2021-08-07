'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('suppliers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            carrier_id: {
                type: Sequelize.INTEGER,
                references: {
                    model:'carriers',
                    key: 'id',
                    as: 'carrier_id',
                }
            },
            license_plate: {
                type: Sequelize.STRING
            },
            geo_lat: {
                type: Sequelize.DECIMAL(10,8)
            },
            geo_lon: {
                type: Sequelize.DECIMAL(10,8)
            },
            allowed_weight: {
                type: Sequelize.INTEGER
            },
            current_cargo_weight: {
                type: Sequelize.INTEGER
            },
            current_number_of_pallets: {
                type: Sequelize.INTEGER
            },
            max_number_of_pallets: {
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('suppliers');
    }
};
