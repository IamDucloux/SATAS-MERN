const userController = {};
const jwt = require('jsonwebtoken');

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

    let body = req.body;
    User.findOne({ email: body.email }, (err, usuarioDB)=>{
        if (err) {
          return res.status(500).json({
             ok: false,
             err: err
          })
       }
   // Verifica que exista un usuario con el mail escrita por el usuario.
      if (!usuarioDB) {
         return res.status(400).json({
           ok: false,
           err: {
               message: "Usuario o contraseña incorrectos"
           }
        })
      }
   // Valida que la contraseña escrita por el usuario, sea la almacenada en la db
      if (! body.password == usuarioDB.password){
         return res.status(400).json({
            ok: false,
            err: {
              message: "Usuario o contraseña incorrectos"
            }
         });
      }
   // Genera el token de autenticación
       let token = jwt.sign({
              usuario: usuarioDB,
           }, 'DEV-SEED', {
           expiresIn: '48h'
       })
       res.json({
           ok: true,
           usuario: usuarioDB,
           token,
       })
   })

}

module.exports = userController;