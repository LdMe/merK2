import { DataTypes } from "sequelize";
import connection from "../config/sequalize.js";

const StandCategory = connection.define("stand_category", {
    stand_category_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },

});

export default StandCategory;