import mongoose  from "mongoose";

const user = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        enum:['Teacher','Student']
    },
    password:{
        type:String,
        required:true,
    }
})
user.index({name:1,role:1})

const Users=mongoose.model('Users',user);

export default Users