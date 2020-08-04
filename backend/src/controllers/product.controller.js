const productController = {};
const Product = require('../models/product.model');


productController.createProduct = async (req, res) => {

    try {

        const { name } = req.body;
        const { description } = req.body;
        const { price } = req.body;

        const newProduct = new Product({ name, description, price });
        await newProduct.save();
        res.json('Product Created');

    } catch (error) {
        console.log(error);
        res.json(error);
    }

}

productController.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            error: err
        });
    }

}

productController.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(Product);
    } catch (error) {
        res.status(400).json({
            error: err
        });
    }
}

productController.updateProduct = async (req, res) => {
    try {
        const {name, description, price} = req.body;
        await Product.findByIdAndUpdate(req.params.id, {
            name,
            description,
            price
        });
        res.json('Product Updated');
    } catch (error) {
        
    }
}

productController.deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        await Product.findByIdAndDelete(id);
        res.json('Product Deleted');    

    } catch (error) {
        console.log(error)
        res.json(error.errmsg);
    }
}

module.exports = productController;