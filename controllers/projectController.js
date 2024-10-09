const projects=require('../models/projectModel')

exports.addProject=async (req,res)=>{
    try{
        const {title,desc,image,languages,github,demo}=req.body
        const userid=req.payload
        if(!title || !desc || !image || !languages || !github || !demo ){
            res.status(400).json("Invalid Data")
        }else{
            const newProject=new projects({
                title,description:desc,image,languages,github,demo,userid
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json(err)
    }
   
}