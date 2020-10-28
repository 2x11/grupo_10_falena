module.exports = (sequelize, dataTypes) => {
    let alias = "Cart_items";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        quantity: {
            type: dataTypes.INTEGER(2),
            allowNull: false
        }
    }

    let config = {
        tableName: "cart_items",
        timestamps: true
    }

    const Cart_item = sequelize.define(alias, cols, config);
    
    Cart_item.associate = function(models) {

        Cart_item.belongsTo(models.Users, {

                as: 'Users',
                foreignKey: "user_id"
            }),
            Cart_item.belongsTo(models.Products, {

                as: 'Products',
                foreignKey: "product_id"

            })

    }
    return Cart_item    
}