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
            count+=1
        }
        stud.percentage=(count/stud.total_days)*100
        return stud.save()
}

const change_attendance_present_to_absent=(roll_no)=>{
    var today=new Date()
    Students.findOne({roll_no:roll_no}).then(stud=>{
        for(let a of stud.attendance){
            if (a.date===today){
                a.present=false
                break
            }
        }
        stud.save()
    })
}

const change_attendance_absent_to_present=(roll_no)=>{
    var today=new Date()
    Students.findOne({roll_no:roll_no}).then(stud=>{
        for(let a of stud.attendance){
            if (a.date===today){
                a.present=true
                break
            }
        }
        stud.save()
    })
}

const remove_day_attendance=(roll_no)=>{
    var today=new Date()
    Students.findOne({roll_no:roll_no}).then(stud=>{
        const index = stud.attendance.findIndex(a => a.date==today);
            if (index !== -1) {
                stud.attendance.splice(index, 1);
            }
        stud.save()
    })
}

const get_attendances=(roll_no)=>{
    return Students.findOne({roll_no:roll_no}).then(stud=>{
        var list=[]
        stud.attendance.forEach(el=>{
            list.append(el)
        })
        return list
     })
}

export {add_attendace_absent,add_attendace_present,percentage_calculate,get_attendances,remove_day_attendance,change_attendance_absent_to_present,change_attendance_present_to_absent}