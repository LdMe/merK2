import Stand from "./stand.js";
import StandCategory from "./standCategory.js";


Stand.belongsTo(StandCategory);
StandCategory.hasMany(Stand);