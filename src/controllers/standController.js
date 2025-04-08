import Product from "../models/product.js";
import Seller from "../models/seller.js";
import standModel from "../models/stand.js";
import StandCategory from "../models/standCategory.js";

async function getAll(req,res){
    //res.send("Conseguir todos los stands");
    const stands = await standModel.findAll({
        include:StandCategory
    });
    //console.log(stands);
    //res.json(stands)
    const role = req.session.user?.role;
    res.render("stand/list",{stands,role});
}

async function getByID(req,res){
    const id = req.params.id;
    //const {id} = req.params;
    //res.send("Conseguir el stand "+id);
    const stand = await standModel.findByPk(id,{
        include: [Product,StandCategory,Seller]
    });
    //res.json(stand);
    res.render("stand/show",{stand}); // la ruta de render es a partir de la carpeta views, no la del router
}

async function createForm(req,res){
    const categories = await StandCategory.findAll();
    res.render("stand/create",{categories});
}
async function create(req,res){
    //res.send("Creamos un stand");
    const {name,size,category_id} = req.body;
    const creation_date = new Date();
    const response = await standModel.create({name:name,size:size,creation_date:creation_date,stand_category_id:category_id});
    //res.json(response);
    res.redirect("/stand");
}
async function editForm(req,res){
    const id = req.params.id;
    const stand = await standModel.findByPk(id);
    if(!stand){
        res.redirect("/stand")
    }
    const categories = await StandCategory.findAll();
    res.render("stand/edit",{stand,categories});
}
async function edit(req,res){
    const id = req.params.id;
    const {name,size,creation_date,category_id} = req.body; // los datos para modificar el stand
    const result = await standModel.update(
        {
            name:name,
            size:size,
            creation_date:creation_date,
            stand_category_id:category_id
        },
        {
            where:{
                stand_id:id
            }
        }
    )
    // opción 2
    // const stand = await standModel.findByPk(id);
    // stand.name=name;
    // stand.size=size;
    // stand.creation_date = creation_date;
    // stand.stand_category_id=category_id;
    // await stand.save();

     res.redirect("/stand/"+id);
}

async function remove(req,res){
    const id = req.params.id;
    const response  = await standModel.destroy({
        where:{
            stand_id: id
        }
    });
    // const stand = await standModel.findByPk(id);
    // await stand.destroy();

    res.redirect("/stand");
}

export{
    getAll,
    getByID,
    createForm,
    create,
    edit,
    remove
}

export default {
    getAll,
    getByID,
    createForm,
    create,
    editForm,
    edit,
    remove
};