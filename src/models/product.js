import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";
import Sale from "./sale.js";

const Product = connection.define("product",{
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
        type: DataTypes.STRING(256),
        allowNull: true,
    },
    price: {
        type: DataTypes.MEDIUMINT.UNSIGNED,
        allowNull:false,
    },
    stock: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull:false
    },
    stand_id: {
        type: DataTypes.INTEGER.UNSIGNED
    }
})

Product.belongsToMany(Sale,{through:"sale_has_product",foreignKey:"product_id"});
Sale.belongsToMany(Product,{through:"sale_has_product",foreignKey:"sale_id"});
export default Product;