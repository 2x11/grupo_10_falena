module.exports = (sequelize, dataTypes) => {
    let alias = "Products";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        author: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(5, 2).UNSIGNED,
            allowNull: false
        },
        review: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        section: {
            type: dataTypes.STRING(25),
            allowNull: false,
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(5,1),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER(3),
            allowNull: false
        }
    }

    let config = {
        tableName: "products",
        timestamps: true,
        underscored: true
    }

    const Product = sequelize.define(alias, cols, config);

    return Product;
}