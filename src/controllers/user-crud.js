import { Students,Teachers } from "../models/users";

const AddStudent = (name, studentClass, roll_no,days) => {
    let student_new=new Students({
        name:name,
        class:studentClass,
        roll_no:roll_no,
        total_days:days
        })
    student_new.save()
};

const AddTeacher = (name, studentClass, roll_no) => {
        let student_new=new Teachers({
            name:name,
            class:studentClass,
            roll_no:roll_no
            })
        student_new.save()
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


export {AddStudent,AddTeacher,RemoveStudent,RemoveTeacher,UpdateTeacher,UpdateStudent}