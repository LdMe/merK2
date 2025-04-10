import {Router} from "express";
import standViewController from "../../controllers/stand/standViewController.js"

const router = Router();

// conseguir todos los stands
router.get("/",standViewController.getAll)
// crear un stand
router.get("/new",standViewController.createForm)
router.post("/",standViewController.create)
// conseguir stand por id
router.get("/:id",standViewController.getByID)
// modificar un stand
router.get("/:id/edit",standViewController.editForm)
router.post("/:id",standViewController.edit)

// ruta para eliminar un stand
router.post("/:id/delete",standViewController.remove)

export default router;