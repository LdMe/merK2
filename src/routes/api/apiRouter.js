import { Router } from "express";
import standRouter from "./standRouter.js";
// import productRouter from "./productRouter.js";
import authRouter from "./authRouter.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("welcome to the api world");
})
router.use("/stand", standRouter);
// router.use("/product",productRouter);
router.use("/", authRouter);

export default router