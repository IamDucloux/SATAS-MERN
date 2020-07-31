const { Router } = require('express');
const router = Router();

//const { getNotes, createNote, getNote, deleteNote, updateNote } = require('../controllers/notes.controller');

/* 
router.route('/')
    .get()
    .post(); */

router.route('/:id')
    .get()
    .delete()
    .put();

module.exports = router;