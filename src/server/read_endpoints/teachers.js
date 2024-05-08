import express from 'express'
import { GetTeacher,GetTeachers } from "../../controllers/user-crud.js";
import validate_token from '../../utils/utils.js';

const router_r_teacher = express.Router()
    
router_r_teacher.get('/teachers',(req,res)=>{
    if(req.query.roll_no){
        let token =req.headers['secret-token'];
        if(validate_token(token)){
            throw new Error("Not authorized")
        }
        GetTeacher(req.query.roll_no).then((list)=>{
            res.status(200).json({"Teacher":list})
        }).catch((err)=>{
            res.status(400).json({Error:err.message})
        })
    }else{
        let token =req.headers['secret-token'];
        if(validate_token(token)){
            throw new Error("Not authorized")
        }
    GetTeachers().then((list)=>{
        res.status(200).json({"Teachers List":list})
    }).catch((err)=>{
        res.status(400).json({Error:err.message})
    })
}
})

export default router_r_teacher