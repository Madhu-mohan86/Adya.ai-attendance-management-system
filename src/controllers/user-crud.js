import { Students,Teachers } from "../models/users.js";

const AddStudent = (name, studentClass, roll_no,days) => {
    try{
    let student_new=new Students({
        name:name,
        class:studentClass,
        roll_no:roll_no,
        total_days:days
        })
   return student_new.save().then((stat)=>{
        return "Added Student"
   }).catch((err)=>{
    if(err.code===11000){
        throw new Error("Student Already Exists");
        }
        else{
            throw new Error(err.message);
        }
   })
    }catch{
        throw new Error("Error in Adding Student")
    }
};

const AddTeacher = (name, studentClass, roll_no) => {
        let student_new=new Teachers({
            name:name,
            class:studentClass,
            roll_no:roll_no
            })
        return student_new.save()
        .then((stat) => {
            return "Added Teacher"; 
        })
        .catch((error) => {
            if(error.code===11000){
            throw new Error("Teacher Already Exists");
            }
            else{
                throw new Error(error.message);
            }
        });
};

const RemoveStudent = (roll_no) => {
    Students.findOneAndDelete({roll_no:roll_no})
};

const RemoveTeacher = ( roll_no) => {
    Teachers.findOneAndDelete({roll_no:roll_no})
};

const UpdateTeacher=async(roll_no,class_name=null,name=null)=>{
    try{
        let exisitTeacher = await Teachers.findOne({ roll_no: roll_no });
        if(!exisitTeacher){
            throw new Error ("Roll-no not found")
        }
        const updateObject = {};
        if (class_name !== null) {
            updateObject.class=class_name;
        }
    
        if (name !== null) {
            updateObject.name = name;
        }
        console.log(updateObject)
    
        // Update the teacher using updateOne
       return Teachers.updateOne(
            { _id: exisitTeacher._id },
            updateObject
        ).then((stud)=>{
           return "Updated details"
    }).catch((err)=>{
        throw new Error("Error updating details")
    })
    }catch(err){
        throw new Error(err.message)
    }
}
const UpdateStudent=async(roll_no,class_name=null,name=null)=>{
    try{
        let existiStudent = await Students.findOne({ roll_no: roll_no });
        if(!existiStudent){
            throw new Error ("Roll-no not found")
        }
        const updateObject = {};
        if (class_name !== null) {
            updateObject.class=class_name;
        }
    
        if (name !== null) {
            updateObject.name = name;
        }
        console.log(updateObject)
    
        // Update the teacher using updateOne
       return Students.updateOne(
            { _id: existiStudent._id },
            updateObject
        ).then((stud)=>{
           return "Updated details"
    }).catch((err)=>{
        throw new Error("Error updating details")
    })
    }catch(err){
        throw new Error(err.message)
    }
}

const GetStudents = () => {
    try{
    return Students.find({},{_id:0,__v:0}).then((list)=>{
        return list
    })
    }catch{
        throw new Error("Error in getting list of Students")
    }
};
const GetStudent = (roll_no) => {
    try{
    return Students.findOne({roll_no:roll_no},{_id:0,__v:0}).then((list)=>{
        return list
    })
    }catch{
        throw new Error("Error in getting list of Students")
    }
};


const GetTeachers = () => {
    try{
        return Teachers.find({},{_id:0,__v:0}).then((list)=>{
            return list
        })
        }catch{
            throw new Error("Error in getting list of Teachers")
        }
};

const GetTeacher = (roll_no) => {
    try{
    return Teachers.findOne({roll_no:roll_no},{_id:0,__v:0}).then((list)=>{
        return list
    })
    }catch{
        throw new Error("Error in getting list of Teachers")
    }
};


export {AddStudent,AddTeacher,RemoveStudent,RemoveTeacher,UpdateTeacher,UpdateStudent,GetStudents,GetTeachers,GetStudent,GetTeacher}