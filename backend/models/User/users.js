const { DataTypes } = require('sequelize');
const db = require("../../config/db");

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    noHp: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        allowNull: false
    }
}, {
    freezeTableName: true,
});

module.exports = User;