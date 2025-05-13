import productController from "./productController.js";

async function getAll(req, res) {
    try {
       
        const products = await productController.getAll();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}

async function getByID(req, res) {
    try {
        const id = req.params.id;
        const stand = await productController.getByID(id);
        res.json(stand);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}

async function create(req, res) {
    try {
        const data = req.body;
        data.image = req.file?.filename;
        const response = await productController.create(data);
        res.json(response);
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Server error" });
        }
    }
}

async function edit(req, res) {
    try {
        const id = req.params.id;
        const data = req.body;
        data.image = req.file?.filename;
        const result = await productController.edit(id, data);
        res.json(result);
    } catch (error) {
        console.error(error);
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            res.status(500).json({ error: "Server error" });
        }
    }
}

async function remove(req, res) {
    try{
        const id = req.params.id;
        const response = await productController.remove(id);
        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
}

export {
    getAll,
    getByID,
    create,
    edit,
    remove
}

export default {
    getAll,
    getByID,
    create,
    edit,
    remove
};