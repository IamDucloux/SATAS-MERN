const orderController = {};

const Order = require('../models/order.model');

orderController.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(400).json({
            error: error
        });
    }
}

orderController.getOrders = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.json(order);
    } catch (error) {
        res.status(400).json({
            error: error
        });
    }
}

orderController.createOrder = async (req, res) => {
    try {

        const {number} = req.body;
        const {products} = req.body;
        const {observation} = req.body;
        
    } catch (error) {
        
    }
}
/*
        <- TODO ->
        
        -createOrder
        -updateOrder
        -deleteOrder
*/


module.exports = userController;