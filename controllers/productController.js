const Product = require("../models/Product");

module.exports.product_get_id = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        const { name, ...others } = product._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports.product_get = async(req, res) => {
    try {
        let product = await Product.find();
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports.product_post = async(req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = newProduct.save();
        res.status(200).json(`The ${newProduct.name} product has been saved`);
        console.log("The product has been saved")
    } catch (err) {
        res.status(400).json({ errors });
    }
}

module.exports.product_update = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id, {
                $set: req.body
            }, { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports.product_delete = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        await product.delete();
        res.status(200).json("Product has been delete");
    } catch (err) {
        res.status(500).json(err);
    }
}