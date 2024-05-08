import { Students,Teachers } from "../models/users.js";

const add_attendace_present=async (roll_no)=>{
    var today=new Date().toISOString().slice(0, 10)
    const stud=await Students.findOne({roll_no:roll_no})
        if(stud===null){
            throw new Error ("Roll-no doesn't exist")
        }
        var bfr=stud.attendance.length
        stud.attendance.addToSet({date:String(today),present:true})
        return stud.save().then(async(stud)=>{
            let cal =await percentage_calculate(roll_no)
            var afr=stud.attendance.length
            if(bfr==afr){
                return "Already Attendance Marked for roll_no"
            }
            return "Added attendance present for roll_no"
        }). catch((err)=>{
        console.log(err)
        })
    }

const add_attendace_absent=async(roll_no)=>{
    var today=new Date().toISOString().slice(0, 10)
    const stud=await Students.findOne({roll_no:roll_no})
    if(stud===null){
        throw new Error ("Roll-no doesn't exist")
    }
    var bfr=stud.attendance.length
        stud.attendance.addToSet({date:String(today),present:false})
        return stud.save().then(async(stud)=>{
            let cal =await percentage_calculate(roll_no)
            var afr=stud.attendance.length
            if(bfr==afr){
                return "Already Attendance Marked for roll_no"
            }
            return "Added attendance absent for roll_no"
        }). catch((err)=>{
        console.log(err)
        })
}

const percentage_calculate=async(roll_no)=>{
    var count=0;
    const stud=await Students.findOne({roll_no:roll_no})
        for(let a of stud.attendance){
            if(a.present==true)
            count+=1
        }
        stud.percentage=(count/stud.total_days)*100
        return stud.save()
}

const change_attendance_present_to_absent=async(roll_no)=>{
    var today=new Date().toISOString().slice(0, 10)
    const stud= await Students.findOne({roll_no:roll_no})
    console.log(stud)
        for(let a of stud.attendance){
            if (a.date===today){
                a.present=false
                break
            }
        }
        return stud.save().then(async(stud)=>{
            let cal =await percentage_calculate(roll_no)
            return "Changed Attendance for roll_no"
        }). catch((err)=>{
        console.log(err)
        })
}

const change_attendance_absent_to_present=async(roll_no)=>{
    var today=new Date().toISOString().slice(0, 10)
    const stud= await Students.findOne({roll_no:roll_no})
        for(let a of stud.attendance){
            if (a.date===today){
                a.present=true
                break
            }
        }
        return stud.save().then(async(stud)=>{
            let cal =await percentage_calculate(roll_no)
            return "Changed Attendance for roll_no"
        }). catch((err)=>{
        console.log(err)
        })
}

const remove_day_attendance=async(roll_no,date=null)=>{
    try{    
        var today=new Date().toISOString().slice(0, 10)
        if (date!=null){
            today=date
        }
   const stud= await Students.findOne({roll_no:roll_no})
        const index = stud.attendance.findIndex(a => a.date==today);
            if (index !== -1) {
                stud.attendance.splice(index, 1);
            }
       return stud.save().then((stud)=>{
        return "Deleted Attendace"
       }).catch((err)=>{
        throw new Error("Error deleting attendance")
       })
    }catch(err){
        throw new Error(err.message)
    }
    
}

const get_attendance=(roll_no)=>{
    return Students.findOne({roll_no:roll_no},{_id:0,name:0,class:0,total_days:0,__v:0}).then(stud=>{
        return stud
     })
}

const get_attendancess=()=>{
    return Students.find({},{_id:0,name:0,class:0,total_days:0,__v:0}).then(stud=>{
       return stud
     })
}

export {add_attendace_absent,add_attendace_present,percentage_calculate,remove_day_attendance,change_attendance_absent_to_present,change_attendance_present_to_absent,get_attendance,get_attendancess}