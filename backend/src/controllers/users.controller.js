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

userController.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);

    } catch (err) {
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

userController.updateUser = async (req, res) => {
    try {
        const { name, lastname, email, password } = req.body;
        await User.findByIdAndUpdate(req.params.id, {
            name,
            lastname,
            email,
            password

        });
        res.json('User Updated')
    } catch (e) {
        console.log(e);
        res.json(e.errmsg);
    }
};

userController.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json('User deleted');
}

userController.authUser = async (req, res) => {

    try {
        const { email } = req.params;
        const { password } = req.params;
        const user = await User.findOne({ email: email });
        //THIS IS A BAD PRACTICE AND MUST BE REPLACED IN A UPCOMING UPDATE --ID 03/JUL/2020
        user.password == password ? res.json('Credentials are good') : res.json('Credentials didnt work');
    } catch (error) {
        console.log(error);
        res.json(error);
    }


}

module.exports = userController;