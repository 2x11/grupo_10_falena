module.exports = (sequelize, dataTypes) => {
    let alias = "Orders";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        user_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        transaction_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        total_cost: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        status: {
            type: dataTypes.VARCHAR(15),
            allowNull: false
        },
        created_at: {
            type: dataTypes.DATEONLY(),
            allowNull: false
        },
        modified_at: {
            type: dataTypes.DATEONLY(),
            allowNull: false
        }
    }

    let config = {
        tableName: "orders",
        timestamps: true
    }

    const Order = sequelize.define(alias, cols, config);
    /*
    Order.associate = function(models) {
        Order.belongsTo(models.User, {
                as: 'Users',
                foreignKey: "user_id"
            }),
            Order.hasMany(models.Order_item, {
                as: 'Order_items',
                foreignKey: 'transaction_id'
            })


    }
    */
    return Order
}