import {Router} from "express";
import productApiController from "../../controllers/product/productAPIController.js"
import { upload } from "../../middlewares/multer.js";
const router = Router();

// conseguir todos los productos
router.get("/",productApiController.getAll)
// crear un producto
router.post("/",upload.single("image"),productApiController.create)
// conseguir producto por id
router.get("/:id",productApiController.getByID)
// modificar un producto
router.put("/:id",upload.single("image"),productApiController.edit)

// ruta para eliminar un producto
router.delete("/:id",productApiController.remove)

export default router;