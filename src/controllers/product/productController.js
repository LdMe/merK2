import Seller from "../../models/seller.js";
import Product from "../../models/product.js";
import Stand from "../../models/stand.js";
import { ProductNameNotProvided, ProductPriceNotProvided, ProductPriceNotValid, ProductStockNotProvided, ProductNotFound,StandNotFound } from "../../utils/errors.js";
import {removePicture} from "../../utils/files.js";
async function getAll() {
    const stands = await Product.findAll({
        include: Stand
    });
    return stands;
}


async function getByID(id) {
    const stand = await Product.findByPk(id, {
        include: [ Stand]
    });
    return stand;
}

async function create(data) {
    console.log("image",data)
    if (!data.name) {
        throw new ProductNameNotProvided();
    }
    if(!data.price){
        throw new ProductPriceNotProvided();
    }
    if(isNaN(data.price)){
        throw new ProductPriceNotValid();
    }
    if (!data.stock || isNaN(data.stock)) {
        throw new ProductStockNotProvided();
    }
    const stand = Stand.findByPk(data.stand_id);
    if (!stand) {
        throw new StandNotFound();
    }
    const response = await Product.create(data);
    return response;
}

async function edit(id, data) {
    
    if (data.stand_id) {
        const stand = Stand.findByPk(data.stand_id);
        if (!stand) {
            throw new StandNotFound();
        }
    }
    const product = await Product.findByPk(id);
    if(!product){
        throw new ProductNotFound();
    }
    if (product.image) {
        removePicture(product.image);
    }
    // otras comprobaciones como formato de fecha, etc.
    const result = await Product.update(
        data,
        {
            where: {
                product_id: id
            }
        }
    )
    const updatedStand = await Product.findByPk(id);
    return updatedStand;
}

async function remove(id) {
    const product = await Product.findByPk(id);
    if (product.image) {
        removePicture(product.image);
    }
    const response = await Product.destroy({
        where: {
            product_id: id
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