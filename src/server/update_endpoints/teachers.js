import express from 'express'
import { UpdateTeacher } from '../../controllers/user-crud.js'

const router_us_teacher = express.Router()

router_us_teacher.patch('/teacher',(req,res)=>{
    try{
    if(!req.query.roll_no){
        throw new Error("missing param roll_no")
    }
    const { roll_no, class_name, name } = req.query;
    UpdateTeacher(roll_no,class_name,name).then((stud)=>{
        res.json({[stud]:roll_no})
    }).catch((err)=>{
        res.status(400).send(err.message)
    })
}catch(err){
    res.status(400).send(err.message)
}
})

export default router_us_teacher