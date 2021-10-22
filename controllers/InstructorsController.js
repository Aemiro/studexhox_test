let Instructor=require('../models').Instructor;
const createInstructor=async(req,res)=>{
    try{
        let newInstructor=await Instructor.create({
            name:req.body.name,
            about:req.body.about,
            award:req.body.award,
            phone_number:req.body.phone_number,
            email:req.body.email,
            gender: req.body.gender
        });
        res.status(200).json(newInstructor);
    }catch (err){
        console.log(err);
        res.status(500).json({msg:"Something is wrong please try again!"});
    }
}
const deleteInstructor=async(req, res)=>{
    try{
        const instructorId=req.params.id;
        const instructor=await Instructor.findByPk(instructorId);
        if(instructor!==null){
            await instructor.destroy();
            res.status(200).json({msg:'Instructor deleted'});
        }else{
            res.status(404).json({msg:"Instructor does not exist with this id!"});
        }

    }catch (err){
        console.log(err)
        res.status(500).json({msg:"Something is wrong please try again!"});
    }
}
const getInstructors=async (req,res)=>{
    try{
        const instructors=await Instructor.findAll();
        res.status(200).json(instructors);
    }catch (err){
        console.log(err);
        res.status(500).json({msg:"Something is wrong please try again!"});
    }

}

const getInstructorById=async (req,res)=>{
    try{
        const instructorId=req.params.id;
        const instructor=await Instructor.findByPk(instructorId);
        if(instructor!==null){
            res.status(200).json(instructor);
        }else{
            res.status(404).json({msg:"Instructor does not exist with this id!"});
        }

    }catch (err){
        console.log(err)
        res.status(500).json({msg:"Instructor is wrong please try again!"});
    }
}

module.exports = {
    getInstructors,
    getInstructorById,
    createInstructor,
    deleteInstructor
};