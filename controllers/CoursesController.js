let Course=require('../models').Course;
const createCourse=async(req,res)=>{
    try{
        let newCourse=await Course.create({
            title:req.body.title,
            description:req.body.description,
            logo:req.body.logo
        });
        res.status(200).json(newCourse);
    }catch (err){
        console.log(err);
        res.status(500).json({msg:"Something is wrong please try again!"});
    }
}
const deleteCourse=async(req, res)=>{
    try{
        const courseId=req.params.id;
        const course=await Course.findByPk(courseId);
        if(course!==null){
            await course.destroy();
            res.status(200).json({msg:'course deleted'});
        }else{
            res.status(404).json({msg:"Course does not exist with this id!"});
        }

    }catch (err){
        console.log(err)
        res.status(500).json({msg:"Something is wrong please try again!"});
    }
}
const getCourses=async (req,res)=>{
    try{
        const courses=await Course.findAll();
        res.status(200).json(courses);
    }catch (err){
        console.log(err);
        res.status(500).json({msg:"Something is wrong please try again!"});
    }

}

const getCourseById=async (req,res)=>{
    try{
        const courseId=req.params.id;
        const course=await Course.findByPk(courseId);
        if(course!==null){
            res.status(200).json(course);
        }else{
            res.status(404).json({msg:"Course does not exist with this id!"});
        }

    }catch (err){
        console.log(err)
        res.status(500).json({msg:"Something is wrong please try again!"});
    }
}

module.exports = {
    getCourses,
    getCourseById,
    createCourse,
    deleteCourse
};