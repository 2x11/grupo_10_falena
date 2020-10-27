module.exports = (sequelize, dataTypes) => {

    let alias = "Users";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        firts_name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        last_name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        dni: {
            type: dataTypes.INTEGER(8),
            allowNull: false,
        },
        phone_number: {
            type: dataTypes.INTEGER(15)
        },
        adress: {
            type: dataTypes.STRING(45)
        },
        zipcode: {
            type: dataTypes.INTEGER(4)
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        rol: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        profile_picture: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        date: {
            type: dataTypes.DATEONLY,
        }
    }

    let config = {
        tableName: "users",
        timestamps: true,
        underscored: true
    }



    const User = sequelize.define(alias, cols, config);
    User.associate = function(models) {
        User.hasMany(models.Order, {
            as: 'Orders',
            foreignKey: 'user_id'
        })
        User.hasMany(models.Cart_item, {
            as: 'Cart_items',
            foreignKey: 'user_id'

        })
    }
    return User;
}