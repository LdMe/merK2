import Product from "../../models/product.js";
import Seller from "../../models/seller.js";
import standModel from "../../models/stand.js";
import StandCategory from "../../models/standCategory.js";
import { StandNameNotProvided,IncorrectStandSize,StandCategoryNotProvided,StandCategoryNotFound } from "../../utils/errors.js";
async function getAll(){
    const stands = await standModel.findAll({
        include:StandCategory
    });
    return stands;
}


async function getByID(id){
    const stand = await standModel.findByPk(id,{
        include: [Product,StandCategory,Seller]
    });
    return stand;
}

async function create(data){
    data.creation_date =  new Date();
    if(!data.name){
        throw new StandNameNotProvided();
    }
    data.size = data.size ? data.size.toLowerCase() : "small";
    const standSizes  = ["small","medium","large"];
    if(!standSizes.includes(data.size)){
        throw new IncorrectStandSize();
    }
    if(!data.stand_category_id){
        throw new StandCategoryNotProvided()
    }
    const category =  StandCategory.findByPk(data.stand_category_id);
    if(!category){
        throw new StandCategoryNotFound();
    }
    const response = await standModel.create(data);
    return response;
}

async function edit(id,data){
    const result = await standModel.update(
        data,
        {
            where:{
                stand_id:id
            }
        }
    )
    return result;
}

async function remove(id){
    const response  = await standModel.destroy({
        where:{
            stand_id: id
        }
    });
    return response;
}

export {
    getAll,
    getByID,
    create,
    edit,
    remove
}

export default {
    getAll,
    getByID,
    create,
    edit,
    remove
};