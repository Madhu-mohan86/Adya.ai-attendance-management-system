import express from 'express'
import { RemoveStudent } from '../../controllers/user-crud.js'
import validate_token from '../../utils/utils.js';

const router_d_student = express.Router()

router_d_student.delete('/student',(req,res)=>{
    /* #swagger.summary = 'Delete Student'
        #swagger.description= 'Delete Student '
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
        RemoveStudent(req.query.roll_no).then((list)=>{
            res.status(200).json({[list]:req.query.roll_no})
        }).catch((err)=>{
            res.status(400).json({Error:err.message})
        })
    }
    catch(err){
        res.status(400).send(err.message)
    }

})

export default router_d_student