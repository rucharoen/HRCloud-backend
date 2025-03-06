module.exports = (sequelize, dataType) => {
    const Product = sequelize.define("HRCloud", {
        id: {
            type: dataType.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        employeeID: {
            type: dataType.STRING,
            allowNull: false
        },

        fullName: {
            type: dataType.STRING,
            allowNull: false
        },

        phone: {
            type: dataType.STRING,
            allowNull: false
        },

        birthDate: {
            type: dataType.STRING,
            allowNull: false
        },

    });

    return Product;
};