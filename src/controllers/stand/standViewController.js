import standController from "./standController.js";
import StandCategory from "../../models/standCategory.js";

async function getAll(req, res) {
    const stands = await standController.getAll();
    const role = req.session.user?.role;
    res.render("stand/list", { stands, role });
}

async function getByID(req, res) {
    const id = req.params.id;
    const stand = await standController.getByID(id);
    res.render("stand/show", { stand }); // la ruta de render es a partir de la carpeta views, no la del router
}

async function createForm(req, res) {
    const categories = await StandCategory.findAll(); // esto lo cambiaremos por llamada a standCategoryController.getAll()
    res.render("stand/create", { categories });
}
async function create(req, res) {
    const response = await standController.create(req.body);
    res.redirect("/stand");
}

async function editForm(req, res) {
    const id = req.params.id;
    const stand = await standController.getByID(id);
    if (!stand) {
        res.redirect("/stand")
    }
    const categories = await StandCategory.findAll();// esto lo cambiaremos por llamada a standCategoryController.getAll()
    res.render("stand/edit", { stand, categories });
}
async function edit(req, res) {
    const id = req.params.id;
    const result = await standController.edit(id, req.body);
    res.redirect("/stand/" + id);
}

async function remove(req, res) {
    const id = req.params.id;
    const response  = await standController.remove(id);
    res.redirect("/stand");
}

export {
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