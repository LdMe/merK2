import Seller from "../../models/seller.js";
import Product from "../../models/product.js";
import Stand from "../../models/stand.js";
import { ProductNameNotProvided, ProductPriceNotProvided, ProductPriceNotValid, ProductStockNotProvided, StandNotFound } from "../../utils/errors.js";
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
    const standSizes = ["small", "medium", "large"];
    if (data.size) {
        data.size = data.size.toLowerCase();
        if (!standSizes.includes(data.size)) {
            throw new IncorrectStandSize();
        }
    }
    if (data.stand_category_id) {
        const category = Stand.findByPk(data.stand_category_id);
        if (!category) {
            throw new StandNotFound();
        }
    }
    // otras comprobaciones como formato de fecha, etc.
    const result = await Product.update(
        data,
        {
            where: {
                stand_id: id
            }
        }
    )
    const updatedStand = await Product.findByPk(id);
    return updatedStand;
}

async function remove(id) {
    const response = await Product.destroy({
        where: {
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