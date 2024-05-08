import express from 'express'
import { get_attendance,get_attendancess } from '../../controllers/attendance.js'
import validate_token from '../../utils/utils.js';

const router_r_attendance = express.Router()

router_r_attendance.get('/attendance',(req,res)=>{
    /* #swagger.summary = 'Read Attendance'
        #swagger.description= 'Read attendance '
       * */
      /*#swagger.responses[200] = { 
    */
    if(req.query.roll_no){
        get_attendance(req.query.roll_no).then((list)=>{
            res.status(200).json({list})
        }).catch((err)=>{
            res.status(400).json({Error:err.message})
        })
    }
    else{
    get_attendancess().then((list)=>{
        res.status(200).json({"Attendance List":list})
    }).catch((err)=>{
        res.status(400).json({Error:err.message})
    })
}

})

export default router_r_attendance