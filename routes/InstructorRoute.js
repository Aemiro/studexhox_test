const express = require('express');
const router = express.Router();
const {
    getInstructors,
    getInstructorById,
    createInstructor,
    deleteInstructor
}=require('../controllers/InstructorsController');
router.get('/', getInstructors)
router.post('/create', createInstructor);
router.get('/:id', getInstructorById);
router.delete('/:id', deleteInstructor)
module.exports = router;