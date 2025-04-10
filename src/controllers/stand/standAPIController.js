import standController from "./standController.js";

async function getAll(req,res){
    const stands = await standController.getAll();
    res.json(stands);
}

async function getByID(req,res){
    const id = req.params.id;
    const stand = await standController.getByID(id);
    res.json(stand);
}

async function create(req,res){
    const response = await standController.create(req.body);
    res.json(response);
}

async function edit(req,res){
    const id = req.params.id;
    const result = await standController.edit(id,req.body);
    res.json(result);
}

async function remove(req,res){
    const id = req.params.id;
    const response  = await standController.remove(id);
    res.json(response);
}

export{
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