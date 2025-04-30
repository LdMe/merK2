import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Sale = connection.define("sale",{
    sale_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    seller_id: {
        type: DataTypes.INTEGER.UNSIGNED
    },
    client_id: {
        type: DataTypes.INTEGER.UNSIGNED
    },
    created_at: {
        type: DataTypes.DATE
    },
    updated_at: {
        type: DataTypes.DATE
    }
})


export default Sale;