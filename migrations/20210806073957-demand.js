'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('demands', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                    as: 'user_id',
                }
            },
            origin_lat: {
                type: Sequelize.DECIMAL(10,8)
            },
            origin_lon: {
                type: Sequelize.DECIMAL(10,8)
            },
            delivery_lat: {
                type: Sequelize.DECIMAL(10,8)
            },
            delivery_lon: {
                type: Sequelize.DECIMAL(10,8)
            },
            total_weight: {
                type: Sequelize.INTEGER
            },
            pallets_qtt: {
                type: Sequelize.INTEGER
            },
            status: {
                type: Sequelize.TINYINT,
                defaultValue: 1
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
        await queryInterface.dropTable('demands');
    }
};
