import express from 'express'
import { remove_day_attendance } from '../../controllers/attendance.js'
import validate_token from '../../utils/utils.js';

const router_d_attendance = express.Router()

router_d_attendance.delete('/attendance',(req,res)=>{
     /* #swagger.summary = 'Delete Attendance'
        #swagger.description= 'Delete attendance '
       * */
      /*#swagger.responses[200] = { 
    */
    try{
        let token =req.headers['secret-token'];
        if(validate_token(token)){
            throw new Error("Not authorized")
        }
    if(!req.query.roll_no){
        throw new Error ("roll_no param missing")
    }
        remove_day_attendance(req.query.roll_no,req.query.date).then((list)=>{
            res.status(200).json({[list]:req.query.roll_no})
        }).catch((err)=>{
            res.status(400).json({Error:err.message})
        })
    }
    catch(err){
        res.status(400).send(err.message)
    }

})

export default router_d_attendance