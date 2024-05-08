import express from 'express'
import { AddStudent } from "../../controllers/user-crud.js";
import validate_token from '../../utils/utils.js';

const router_c_student = express.Router()
    
router_c_student.post('/students',(req,res)=>{
     /* #swagger.summary = 'Add Student'
        #swagger.description= 'Add Student'
       * */
      /*#swagger.responses[200] = { 
    */
    try
    {
        let token =req.headers['secret-token'];
        if(validate_token(token)){
            throw new Error("Not authorized")
        }
        var missing_params=[]
        let name=req.body.name
        let class_name=req.body.class_name
        let roll_no=req.body.roll_no
        let sem_days=req.body.sem_days
        if (!name) {
            console.log(1)
            missing_params.push('name')
        }
        if (!class_name) {
            console.log(1)
            missing_params.push('class_name')
        }
        if (!roll_no) {
            console.log(1)
            missing_params.push('roll_no')
        }
        if (!sem_days) {
            console.log(1)
            missing_params.push('sem_days')
        }
        if(missing_params.length!=0){
            throw new Error(missing_params+" from payload")
        }
        AddStudent(name, class_name, roll_no,sem_days)
        .then((result) => {
            res.status(200).json({ [result]: name });
        })
        .catch((err) => {
            res.status(400).json({ "Error": err.message });
        });
}catch(err){
    res.status(400).json({"Missing":err.message})
}
}) 

export default router_c_student