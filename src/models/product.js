import { DataTypes } from "sequelize";
import connection from "../config/sequalize.js"



const Product = connection.define("product", {
    product_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    price: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        allowNull: false
    },
    stock: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false
    },
    stand_id: {
        type: DataTypes.INTEGER.UNSIGNED
    }
});

export default Product;