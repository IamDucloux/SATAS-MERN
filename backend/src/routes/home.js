const { Router } = require('express');
const router = Router();



router.route('/')
    .get((req, res) => {res.send('Hello World')});

router.route('/home')
    .get();

module.exports = router;