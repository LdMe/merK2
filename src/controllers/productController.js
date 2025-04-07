import Product from "../models/product.js";
import Stand from "../models/stand.js";
import Sale from "../models/sale.js";

async function getByID(req,res){
    const id = req.params.id;
    //const {id} = req.params;
    //res.send("Conseguir el stand "+id);
    const stand = await Product.findByPk(id,{
        include: [Stand,Sale]
    });
    res.json(stand);
    //res.render("stand/show",{stand}); // la ruta de render es a partir de la carpeta views, no la del router
}

export default{
    getByID
}