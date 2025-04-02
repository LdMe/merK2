import {Router} from "express";
import standController from "../controllers/standController.js" // default

const router = Router();

// conseguir todos los stands
router.get("/",standController.getAll)
// crear un stand
router.get("/new",standController.createForm)
router.post("/",standController.create)
// conseguir stand por id
router.get("/:id",standController.getByID)
// modificar un stand
router.get("/:id/edit",standController.editForm)
router.post("/:id",standController.edit)

// ruta para eliminar un stand
router.post("/:id/delete",standController.remove)

export default router;