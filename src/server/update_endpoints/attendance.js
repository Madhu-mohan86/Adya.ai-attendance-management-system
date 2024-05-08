import express from 'express'
import { change_attendance_absent_to_present,change_attendance_present_to_absent } from '../../controllers/attendance.js'

const router_us_attendance = express.Router()

router_us_attendance.patch('/attendance',(req,res)=>{
    try{
        let missing_params=[]
    if(!req.query.roll_no){
        missing_params.push('roll_no')
    }
    if(!req.query.attendance_status){
        missing_params.push('attendance_status')
    }
    if(missing_params.length!=0){
        throw new Error(missing_params+" from payload")
    }
    if(req.query.attendance_status=='absent'){
    change_attendance_present_to_absent(req.query.roll_no,req.query.attendance_status).then((staus)=>{
    res.json({[staus]:req.query.roll_no})
})}
else if(req.query.attendance_status=='present'){
    change_attendance_absent_to_present(req.query.roll_no,req.query.attendance_status).then((staus)=>{
        res.json({[staus]:req.query.roll_no})
})
}
else{
    res.status(400).send("Attendace status can be absent or present")
}



}catch(error){
    res.status(400).json({"Missing":error.message})
}

})

export default router_us_attendance