import mongoose from "mongoose";
import express from 'express'
import router_c_student from "./create_endpoints/students.js";
import router_c_teacher from "./create_endpoints/teachers.js";
import router_c_attendance from "./create_endpoints/attendance.js";
import router_r_student from "./read_endpoints/students.js";
import router_r_teacher from "./read_endpoints/teachers.js";
import router_r_attendance from "./read_endpoints/attendance.js";
import router_us_attendance from "./update_endpoints/attendance.js";
import router_us_student from "./update_endpoints/students.js";
import router_us_teacher from "./update_endpoints/teachers.js";
import router_d_attendance from "./delet_endpoints/attendance.js";
import router_d_student from "./delet_endpoints/students.js";
import { MONGODB_URI } from "../utils/config_env.js";

const app=express()
app.use(express.json())

mongoose.connect(MONGODB_URI);
const db = mongoose.connection;

app.use(
    router_c_student,
    router_c_teacher,
    router_c_attendance,
    router_r_student,
    router_r_teacher,
    router_r_attendance,
    router_us_attendance,
    router_us_student,
    router_us_teacher,
    router_d_attendance,
    router_d_student
)

export default app
