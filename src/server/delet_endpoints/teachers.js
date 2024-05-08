import express from 'express'
import { RemoveTeacher } from '../../controllers/user-crud.js'

const router_d_teacher = express.Router()

router_d_teacher.delete('/student',(req,res)=>{
    try{
    if(!req.query.roll_no){
        throw new Error ("roll_no param missing")
    }
        RemoveTeacher(req.query.roll_no).then((list)=>{
            res.status(200).json({[list]:req.query.roll_no})
        }).catch((err)=>{
            res.status(400).json({Error:err.message})
        })
    }
    catch(err){
        res.status(400).send(err.message)
    }

})

export default router_d_teacher