import app from "./routes/server.js"
import SwaggerUI from 'swagger-ui-express'
import swaggerDocument from './docs/swagger-output.json' assert { type: "json" };
app.use('/docs',SwaggerUI.serve,SwaggerUI.setup(swaggerDocument))
app.listen(3000,()=>console.log(`running on port ${3000}`))
