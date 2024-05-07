import mongoose from "mongoose";
import express from 'express'
import { AddTeacher } from "../controllers/user-crud.js";


mongoose.connect('mongodb://127.0.0.1:27017/');
const db = mongoose.connection;

const router = express.Router()
    
router.post('/add-teacher',(req,res)=>{
    let a= AddTeacher('nithinn','ece',102)
    res.send(a)
})

export default router
