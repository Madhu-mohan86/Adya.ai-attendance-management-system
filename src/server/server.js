import mongoose from "mongoose";
import express from 'express'
import router_c_student from "./create_endpoints/students.js";
import router_c_teacher from "./create_endpoints/teachers.js";
import router_c_attendance from "./create_endpoints/attendance.js";

const app=express()
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/adya');
const db = mongoose.connection;

app.use(router_c_student,router_c_teacher,router_c_attendance)

export default app
