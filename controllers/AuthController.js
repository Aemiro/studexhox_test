let Student=require('../models').Student;
const login=async(req,res)=>{
    try{

        res.status(200).json({msg: "Todo list. Not yet implemented"});
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"Something is wrong please try again!"});
    }
}
const register=async(req,res)=>{
    try{
        let newStudent=await Student.create({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            current_class:req.body.current_class,
            department: req.body.department,
            gender: req.body.gender
        });
        res.status(200).json(newStudent);
    }catch (err){
        console.log(err);
        res.status(500).json({msg:"Something is wrong please try again!"});
    }
}
module.exports = {
    login,
    register
};