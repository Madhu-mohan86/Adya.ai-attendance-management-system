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

const UpdateTeacher=(roll_no,class_name=null,name=null)=>{
    let existingTeacher = Teachers.findOne({ roll_no: roll_no });
    Teachers.updateOne(
        { _id: existingTeacher._id },
        { $addToSet: { class:class_name,name:name } }
    );
    existingTeacher.save()
}
const UpdateStudent=(roll_no,class_name=null,name=null)=>{
    let existingTeacher = Students.findOne({ roll_no: roll_no });
    Teachers.updateOne(
        { _id: existingTeacher._id },
        { $addToSet: { class:class_name,name:name } }
    );
    existingTeacher.save()
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