module.exports = (sequelize,dataTypes) => {
    let alias = "Cart_items";

    let cols = {
        id : {
            type : dataTypes.INTEGER(11),
            allowNull : false,
            primaryKey : true
        },
        user_id : {
            type : dataTypes.INTEGER(11),
            allowNull : false
        },
        product_id : {
            type : dataTypes.INTEGER(11),
            allowNull : false
        },
        quantity : {
            type : dataTypes.INTEGER(2),
            allowNull : false
        }
    }

    let config = {
        tableName: "cart_items",
        timestamps: true
    }

    const Cart_item = sequelize.define(alias,cols,config);

    return Cart_item

}