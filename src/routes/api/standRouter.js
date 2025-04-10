import {Router} from "express";
import standAPIController from "../../controllers/stand/standAPIController.js"

const router = Router();

// conseguir todos los stands
router.get("/",standAPIController.getAll)
// crear un stand
router.post("/",standAPIController.create)
// conseguir stand por id
router.get("/:id",standAPIController.getByID)
// modificar un stand
router.post("/:id",standAPIController.edit)

// ruta para eliminar un stand
router.post("/:id/delete",standAPIController.remove)

export default router;