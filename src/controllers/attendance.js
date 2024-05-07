import { Students,Teachers } from "../models/users";

const add_attendace_present=(roll_no)=>{
    var today=new Date()
    var isexist=False
    Students.findOne({roll_no:roll_no}).then(stud=>{
        for(let a of stud.attendance){
            if (a.date===today){
                isexist=true
            }
        }
        if(isexist==false){
        stud.attendance.push({date:today,present:true})
        stud.save()
        }
    })
}

const add_attendace_absent=(roll_no)=>{
    var today=new Date()
    var isexist=False
    Students.findOne({roll_no:roll_no}).then(stud=>{
        for(let a of stud.attendance){
            if (a.date===today){
                isexist=true
            }
        }
        if(isexist==false){
        stud.attendance.push({date:today,present:true})
        stud.save()
        }
    })
}

const percentage_calculate=(roll_no)=>{
    var count=0;
    Students.findOne({roll_no:roll_no}).then(stud=>{
        for(let a of stud.attendance){
            count+=1
        }
        stud.percentage=(count/stud.total_days)*100
        stud.save()
    })
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