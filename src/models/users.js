import mongoose  from "mongoose";


const teacher = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    class:{
        type:Array[String],
        required:true,
    },
    roll_no:{
        type:String,
        required:true,
        unique: true
    }
})

const student = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    class:{
        type:String,
        required:true,
    },
    roll_no:{
        type:String,
        required:true,
        unique:true
    },
    percentage:{
        type:String,
        required:false
    },
    attendance: [{
        date: {
            type: Date,
            required: true,
        },
        present: {
            type: Boolean,
            default: false,
        }
    }],
    total_days:{
        type:Number,
        required:true,
    },
})


teacher.index({name:1,role_no:1,class:1})
student.index({ 'attendance.date': 1 }, { unique: true });
student.index({name:1,roll_no:1,class:1})

const Teachers=mongoose.model('Teachers',teacher);
const Students=mongoose.model('Students',student);


export  {Users,Teachers,Students};