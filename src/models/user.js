import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";
import Seller from "./seller.js";

const User = connection.define("user",{
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique:true
    },
    password: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
})

User.hasOne(Seller,{foreignKey:"user_id"});
Seller.belongsTo(User,{foreignKey:"user_id"});

export default User;