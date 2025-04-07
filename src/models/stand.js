import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";
import StandCategory from "./standCategory.js";

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
        type: DataTypes.INTEGER.UNSIGNED,
    }
})

Stand.belongsTo(StandCategory,{foreignKey:"stand_category_id"});
StandCategory.hasMany(Stand,{foreignKey:"stand_category_id"});
export default Stand;