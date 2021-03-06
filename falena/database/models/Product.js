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
        price: {
            type: dataTypes.DECIMAL(10, 2).UNSIGNED,
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER(3),
            allowNull: false
        },
        review: {
            type: dataTypes.TEXT(),
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER(11),
            allowNull: true
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
            type: dataTypes.DECIMAL(2, 1),
            allowNull: false
        },
        author_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }

    let config = {
        tableName: "products",
        timestamps: false,
        underscored: true
    }

    const Product = sequelize.define(alias, cols, config);
    Product.associate = function(models) {
        Product.belongsTo(models.Categories, {
            as: 'Categories',
            foreignKey: "category_id"
        })
        Product.belongsTo(models.Authors, {
            as: 'Authors',
            foreignKey: "author_id"
        })

        Product.hasMany(models.Order_items, {
            as: 'Order_items',
            foreignKey: 'product_id'

        })

        Product.hasMany(models.Cart_items, {
            as: 'Cart_items',
            foreignKey: 'product_id'

        })

    }
    return Product;
}