import standController from "./standController.js";
import StandCategory from "../../models/standCategory.js";

async function getAll(req, res) {
    try {
        const stands = await standController.getAll();
        const role = req.session.user?.role;
        res.render("stand/list", { stands, role });
    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Internal server error" });
    }
}

async function getByID(req, res) {
    try {
        const id = req.params.id;
        const stand = await standController.getByID(id);
        if (!stand) { // esto se puede dejar aqui o en la vista
            res.render("layout", { error: "There is no stand for that id" });
            return;
        }
        res.render("stand/show", { stand }); // la ruta de render es a partir de la carpeta views, no la del router
    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Internal server error" });
    }
}

async function createForm(req, res) {
    try {
        const error = req.query.error;
        const categories = await StandCategory.findAll(); // esto lo cambiaremos por llamada a standCategoryController.getAll()
        res.render("stand/create", { categories, error });
    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Internal server error" });
    }
}
async function create(req, res) {
    try {
        const response = await standController.create(req.body);
        res.redirect("/stand");
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.redirect("/stand/new?error=" + error.message)
        } else {
            res.redirect("/stand/new?error=Internal+server+error")
        }
    }
}

async function editForm(req, res) {
    try {
        const id = req.params.id;
        const error = req.query.error;
        const stand = await standController.getByID(id);
        if (!stand) {
            res.redirect("/stand")
        }
        const categories = await StandCategory.findAll();// esto lo cambiaremos por llamada a standCategoryController.getAll()
        res.render("stand/edit", { stand, categories,error});
    } catch (error) {
        console.error(error);
        res.render("layout", { error: "Internal server error" });
    }
}
async function edit(req, res) {
    const id = req.params.id;
    try {
        const result = await standController.edit(id, req.body);
        res.redirect("/stand/" + id);
    }catch(error){
        console.error(error);
        if (error.statusCode) {
            res.redirect(`/stand/${id}/edit?error=` + error.message)
        } else {
            res.render("layout", { error: "Internal server error" });
        }
    }
}

async function remove(req, res) {
    try{
        const id = req.params.id;
        const response = await standController.remove(id);
        res.redirect("/stand");
    }catch(error){
        res.render("layout", { error: "Internal server error" }); 
    }
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