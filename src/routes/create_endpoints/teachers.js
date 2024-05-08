import express from 'express'
import { AddTeacher } from "../../controllers/user-crud.js";
import validate_token from '../../utils/utils.js';


const router_c_teacher = express.Router()
    
router_c_teacher.post('/teachers',(req,res)=>{
     /* #swagger.summary = 'Add Teacher'
        #swagger.description= 'Add Teacher'
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
        if (!name) {
            missing_params.push('name')
        }
        if (!class_name) {
            missing_params.push('class_name')
        }
        if (!roll_no) {
            missing_params.push('roll_no')
        }
        if(missing_params.length!=0){
            throw new Error(missing_params+" from payload")
        }
        AddTeacher(name, class_name, roll_no)
        .then((result) => {
            res.status(200).json({ result: result, name: name });
        })
        .catch((err) => {
            res.status(400).json({ "Error": err.message });
        });
}catch(err){
    res.status(400).json({"Missing":err.message})
}
}) 

export default router_c_teacher