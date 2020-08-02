const userController = {};

const User = require('../models/user.model');

userController.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

userController.createUser = async (req, res) => {
    try {
        const { name } = req.body;
        const { lastname } = req.body;
        const { email } = req.body;
        const { password } = req.body;

        const newUser = new User({ name, lastname, email, password });
        await newUser.save();
        res.json('User created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

userController.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json('User deleted');
}

module.exports = userController;