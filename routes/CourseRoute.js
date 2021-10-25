const express = require('express');
const router = express.Router();
const {getCourses,getCourseById, createCourse, deleteCourse}=require('../controllers/CoursesController')
/**
 * @swagger
 * /api/courses:
 *   get:
 *     description: Get All Courses
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get('/', getCourses)

/**
 * @swagger
 * /api/courses/create:
 *   post:
 *     description: Create new Course
 *     parameters:
 *     - name: title
 *       description: Course title
 *       in: formData
 *       required: false
 *       type: String
 *     - name: description
 *       description: Course description
 *       in: formData
 *       required: false
 *       type: String
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.post('/create', createCourse);
/**
 * @swagger
 * /api/course/:id:
 *   get:
 *     description: Get Course by ID
 *     parameters:
 *     - name: id
 *       description: course Id
 *       in: formData
 *       required: false
 *       type: String
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get('/:id', getCourseById);
/**
 * @swagger
 * /api/courses/:id:
 *   delete:
 *     description: Delete Course
 *     parameters:
 *     - name: id
 *       description: course  Id
 *       in: formData
 *       required: false
 *       type: String
 *     responses:
 *       200:
 *         description: Deleted
 *
 */
router.delete('/:id', deleteCourse)
module.exports = router;