const express = require('express');
const router = express.Router();
const {getCourses,getCourseById, createCourse, deleteCourse}=require('../controllers/CoursesController')
/* GET home page. */
router.get('/', getCourses)
router.post('/create', createCourse);
router.get('/:id', getCourseById);
router.delete('/:id', deleteCourse)
module.exports = router;