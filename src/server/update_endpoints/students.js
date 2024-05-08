import express from 'express'
import { UpdateStudent } from '../../controllers/user-crud.js'

const router_us_student = express.Router()

router_us_student.patch('/student',(req,res)=>{
    try{
    if(!req.query.roll_no){
        throw new Error("missing param roll_no")
    }
    const { roll_no, class_name, name } = req.query;
    UpdateStudent(roll_no,class_name,name).then((stud)=>{
        res.json({[stud]:roll_no})
    }).catch((err)=>{
        res.status(400).send(err.message)
    })
}catch(err){
    res.status(400).send(err.message)
}
})

export default router_us_student