module.exports = (sequelize, dataTypes) => {

    let alias = "Users";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
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
        zip_code: {
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
        }
    }

    let config = {
        tableName: "users",
        timestamps: false,
        underscored: true
    }



    const User = sequelize.define(alias, cols, config);
    
    User.associate = function(models) {
        User.hasMany(models.Orders, {
            as: 'Orders',
            foreignKey: 'user_id'
        })
        User.hasMany(models.Cart_items, {
            as: 'Cart_items',
            foreignKey: 'user_id'

        })
    }
    return User;
}