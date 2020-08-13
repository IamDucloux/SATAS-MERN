const { Router, request } = require('express');
const router = Router();

const { authUser } = require('../controllers/users.controller');

router.route('/')
    .post( authUser );

module.exports = router;