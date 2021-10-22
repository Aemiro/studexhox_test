const express = require('express');
const router = express.Router();
const {getStudents, getStudentById, deleteStudent}=require('../controllers/StudentsController');
/* GET Students. */
router.get('/',getStudents);
router.get('/:id',getStudentById);
router.delete('/:id',deleteStudent);

module.exports = router;
