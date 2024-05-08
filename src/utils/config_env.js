import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

const SECRET_TOKEN=process.env.SECRET_TOKEN
const MONGODB_URI=process.env.MONGODB_URI
const HOST=process.env.HOST
const PORT=process.env.PORT
console.log(MONGODB_URI)

export{SECRET_TOKEN,MONGODB_URI,HOST,PORT}