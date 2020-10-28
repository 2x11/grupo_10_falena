module.exports = (sequelize, dataTypes) => {
    let alias = "Order_items";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        transaction_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        quantity: {
            type: dataTypes.INTEGER(2),
            allowNull: false
        }
    }

    let config = {
        tableName: "order_items",
        timestamps: true
    }

    const Order_item = sequelize.define(alias, cols, config);
    /*
    Order_item.associate = function(models) {
        Order_item.belongsTo(models.Product, {
                as: 'Products',
                foreignKey: "product_id"
            }),
            Order_item.belongsTo(models.Order, {
                as: 'Orders',
                foreignKey: 'transaction_id'
            })


    }
    */
    return Order_item
}