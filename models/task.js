import mongoose from "mongoose";
const  taskSchema=mongoose.Schema({
    title:String,
    createdBy:String,
    category:String,
    createdAt:{
        type:Date,
        default:new Date()
    }
    
})

const Task=mongoose.model('Task',taskSchema);
export default  Task;