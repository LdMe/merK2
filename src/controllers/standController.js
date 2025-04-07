import standModel from "../models/stand.js"
import StandCategory from "../models/stand_category.js";

async function getAll(req, res) {
    const stands = await standModel.findAll({
        include: StandCategory
    });
    console.log(stands);
    res.render("stand/list", { stands });
}

async function getByID(req, res) {
    const id = req.params.id;
    const stand = await standModel.findByPk(id);
    res.render("stand/show", { stand });
}

async function createForm(req, res) {
    const categories = await StandCategory.findAll();
    res.render("stand/create",{categories});
}
async function create(req, res) {
    const { name, size, category_id } = req.body;

    const creation_date = new Date();
    const response = await standModel.create({
        name: name,
        size: size,
        creation_date: creation_date,
        stand_category_id: category_id
    });


    res.redirect("/stand");
}

async function editForm(req, res) {
    const id = req.params.id;
    const stand = await standModel.findByPk(id);
    const categories = await StandCategory.findAll();
    res.render("stand/edit", { stand,categories });
}

async function edit(req, res) {
    const id = req.params.id;
    const { name, size, creation_date, category_id } = req.body; // los datos para modificar el stand
    const result = await standModel.update({
        name: name,
        size: size,
        creation_date: creation_date,
        stand_category_id: category_id
    }, {
        where: { stand_id: id }
    });
    res.redirect("/stand/" + id);
}

async function remove(req, res) {
    const id = req.params.id;
    const response = await standModel.destroy({where:{stand_id:id}});
    res.redirect("/stand");
}

export {
    getAll,
    getByID,
    createForm,
    create,
    editForm,
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