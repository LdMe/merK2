import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";
import Sale from "./sale.js";

const Seller = connection.define("seller",{
    seller_id: {
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
    },
    stand_id: {
        type: DataTypes.INTEGER.UNSIGNED
    }
})

Seller.hasMany(Sale,{foreignKey:"seller_id"});
Sale.belongsTo(Seller,{foreignKey:"seller_id"});

export default Seller;