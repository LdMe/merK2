import {Router} from "express";
import productApiController from "../../controllers/product/productAPIController.js"
import { isLoggedInAPI } from "../../middlewares/authMiddleware.js";
const router = Router();

// conseguir todos los stands
router.get("/",productApiController.getAll)
// crear un stand
router.post("/",productApiController.create)
// conseguir stand por id
router.get("/:id",productApiController.getByID)
// modificar un stand
router.put("/:id",productApiController.edit)

// ruta para eliminar un stand
router.delete("/:id",productApiController.remove)

export default router;