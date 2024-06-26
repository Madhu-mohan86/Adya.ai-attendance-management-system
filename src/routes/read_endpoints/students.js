import express from 'express'
import { GetStudents,GetStudent} from "../../controllers/user-crud.js";
import validate_token from '../../utils/utils.js';

const router_r_student = express.Router()
    
router_r_student.get('/students',(req,res)=>{
    /* #swagger.summary = 'Read Student profile'
        #swagger.description= 'Read student profile '
       * */
      /*#swagger.responses[200] = { 
    */
    if(req.query.roll_no){
        GetStudent(req.query.roll_no).then((list)=>{
            res.status(200).json({"Student":list})
        }).catch((err)=>{
            res.status(400).json({Error:err.message})
        })
    }
    else{

    GetStudents().then((list)=>{
        res.status(200).json({"Students List":list})
    }).catch((err)=>{
        res.status(400).json({Error:err.message})
    })
}
})

export default router_r_student