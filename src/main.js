import app from "./routes/server.js"
import cors from "cors"
import SwaggerUI from 'swagger-ui-express'
import swaggerDocument from './docs/swagger-output.json' assert { type: "json" };
import { PORT,HOST } from "./utils/config_env.js";
app.use('/docs',SwaggerUI.serve,SwaggerUI.setup(swaggerDocument))
app.use(cors({origin:'*',methods:['GET','POST','READ',"PATCH"]}))
app.listen(PORT,HOST,()=>console.log(`running on port ${PORT} and HOST ${HOST}`))

