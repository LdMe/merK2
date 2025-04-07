import { DataTypes } from "sequelize";
import connection from "../config/sequalize.js";
import StandCategory from "./stand_category.js";
import Product from "./product.js";

const Stand = connection.define("stand", {
    stand_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    size: {
        type: DataTypes.ENUM("small", "medium", "large"),
        defaultValue: "small"
    },
    creation_date: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    stand_category_id: {
        type: DataTypes.INTEGER.UNSIGNED
    }
});

Stand.belongsTo(StandCategory,  { foreignKey: 'stand_category_id' });
StandCategory.hasMany(Stand,{ foreignKey: 'stand_category_id' });

Product.belongsTo(Stand,{foreignKey:"stand_id"});
Stand.hasMany(Product,{foreignKey:"stand_id"});

export default Stand;