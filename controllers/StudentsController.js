let Student=require('../models').Student;
const getStudents=async(req,res)=>{
    try{
        const students=await Student.findAll();
        res.status(200).json(students);
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"Something is wrong please try again!"});
    }
}

const deleteStudent=async(req, res)=>{
    try{
        const studentId=req.params.id;
        const student=await Student.findByPk(studentId);
        if(student!==null){
            await student.destroy();
            res.status(200).json({msg:'Student deleted'});
        }else{
            res.status(404).json({msg:"Student does not exist with this id!"});
        }

    }catch (err){
        console.log(err)
        res.status(500).json({msg:"Something is wrong please try again!"});
    }
}

const getStudentById=async (req,res)=>{
    try{
        const studentId=req.params.id;
        const student=await Student.findByPk(studentId);
        if(student!==null){
            res.status(200).json(student);
        }else{
            res.status(404).json({msg:"Student does not exist with this id!"});
        }

    }catch (err){
        console.log(err)
        res.status(500).json({msg:"Something is wrong please try again!"});
    }
}

module.exports = {
    getStudents,
    getStudentById,
    deleteStudent
};