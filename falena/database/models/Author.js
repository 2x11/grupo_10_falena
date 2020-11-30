module.exports = (sequelize, dataTypes) => {
    let alias = "Authors";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
            uniqueKey: true
        },
        image: {
            type: dataTypes.STRING(45),
        }
    }

    let config = {
        tableName: "Authors",
        timestamps: false
    }

    const Author = sequelize.define(alias, cols, config);

    Author.associate = function(models) {
        
        Author.hasMany(models.Products, {
            as: 'authors',
            foreignKey: 'author_id'
        })
    }
    return Author
}