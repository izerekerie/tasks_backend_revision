import mongoose from "mongoose"
import Task from '../models/task'
export const createTask=async(req,res)=>{
    const task=req.body;
   

    try{
        const newTask=  new Task(task);
       await newTask.save();
       res.status(201).json(newTask);
    }catch(error){
        res.status(404).json(error.response.data)
    }

}
export const getTasks= async(req,res)=>{
    try{
        const tasks= await Task.find();
        res.status(200).json(tasks);
    }catch(error){
        res.status(404).json(error.response.data);
    }
}
export const getTask=async(req,res)=>{
const id=req.params.id
    try{
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('no category with that id')
    }
    const task=await Task.findById(id);
    res.status(200).json(task);
    }catch(error){
        res.status(404).json(error.response.data);
    }
}
export const deleteTask= async(req,res)=>{
    const id=req.params.id
    try{
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('no category with that id')
    }
    await Task.findByIdAndDelete(id);
    res.status(200).json({message:'task deleted sucessfully'});
    }catch(error){
        res.status(404).json(error.response.data);
    }
}
export const getTaskSearch=async(req,res)=>{

    req.params;
}

export const updateTask= async(req,res)=>{

    const id=req.params.id;
    const task=req.body;
   
    try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send('no category with that id')
        }
       const updatedTask= await Task.findByIdAndUpdate(id,task,{new:true});
         res.status(200).json(updatedTask);
    }catch(error){
        res.status(404).json(error.response.data);
    }


}
 