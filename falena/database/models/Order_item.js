module.exports = (sequelize, dataTypes) => {
    let alias = "Order_items";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true
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

    return Order_item

}