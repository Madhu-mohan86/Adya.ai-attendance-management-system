import mongoose  from "mongoose";

const attendances = new mongoose.Schema({
    date: {
        type: String,
        required: true,
        null:true
    },
    present: {
        type: Boolean,
        default: false,
    }
}, { _id: false });


const teacher = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:true
    },
    class:{
        type:[String],
        required:true,
        index:true
    },
    roll_no:{
        type:String,
        required:true,
        unique: true,
        index:true
    }
})

const student = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        index:true
    },
    class:{
        type:String,
        required:true,
        index:true
    },
    roll_no:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    percentage:{
        type:String,
        required:false
    },
    attendance: [attendances],
    total_days:{
        type:Number,
        required:true,
    }
})



const Teachers=mongoose.model('Teachers',teacher);
const Students=mongoose.model('Students',student);


export  {Teachers,Students};