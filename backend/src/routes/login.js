const { Router, request } = require('express');
const router = Router();

const { authUser } = require('../controllers/users.controller');
/* 
router.route('/')
    .get()
    .post(); */

/* router.route('/:id')
    .get()
    .delete()
    .put(); */

router.route('/')
    .get()
    .post( authUser );

module.exports = router;