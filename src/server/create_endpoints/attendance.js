import express from 'express'
import { add_attendace_present,add_attendace_absent } from "../../controllers/attendance.js";
import validate_token from '../../utils/utils.js';

const router_c_attendance = express.Router()

router_c_attendance.post('/attendance',(req,res)=>{
    try{
        let token =req.headers['secret-token'];
        if(validate_token(token)){
            throw new Error("Not authorized")
        }
        let roll_no=req.body.roll_no
        if (!roll_no) {
            throw new Error("roll_no param missing from payload")
        }
        add_attendace_present(roll_no).then((stat)=>{
            res.status(200).json({[stat]:roll_no})
        }).catch((err)=>{
            res.status(400).json({[err.message]:roll_no})
        })
    }
    catch(err){
        res.status(400).json({"Missing":err.message})
    }
})

router_c_attendance.post('/mark-attendance-absent',(req,res)=>{
    try{
        let token =req.headers['secret-token'];
        if(validate_token(token)){
            throw new Error("Not authorized")
        }
        let roll_no=req.body.roll_no
        if (!roll_no) {
            throw new Error("roll_no param missing from payload")
        }
        add_attendace_absent(roll_no).then((stat)=>{
            res.status(200).json({[stat]:roll_no})
        }).catch((err)=>{
            res.status(400).json({[err.message]:roll_no})
        })
    }
    catch(err){
        res.status(400).json({"Missing":err.message})
    }
})


export default router_c_attendance;