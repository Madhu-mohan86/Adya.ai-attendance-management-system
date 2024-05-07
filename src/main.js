import router from "./server/server.js";
import express from 'express'
const app = express()

app.use(express.json())
app.use(router)
app.listen(3090,()=>console.log(`running on port ${3000}`))
