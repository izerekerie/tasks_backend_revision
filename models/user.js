import mongoose from "mongoose";
import Joi from "joi";
const  userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Pleasse add a name']
    },
    email:{
        type:String,
        required:[true,'Please add ana email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please add a password'],
    
    }
})

export const User=mongoose.model('User',userSchema);
export const validate=(user)=>{
const schema=Joi.object({
name:Joi.string().required,
email:Joi.string().required(),
password:Joi.string().required()
});
return schema.validate(user);
}
