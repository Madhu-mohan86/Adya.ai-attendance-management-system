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
    try{
        let student_new=new Teachers({
            name:name,
            class:studentClass,
            roll_no:roll_no
            })
        student_new.save()
    }
    catch{
    let existingTeacher = Teachers.findOne({ roll_no: roll_no });
    Teachers.updateOne(
        { _id: existingTeacher._id },
        { $addToSet: { class:studentClass } }
    );
    existingTeacher.save()
    }
};

export {AddStudent,AddTeacher}