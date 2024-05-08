import { SECRET_TOKEN } from "./config_env.js"

const validate_token=(token)=>{
    if (token!==SECRET_TOKEN){
        return true
    }
    else{
        return false
    }
}
export default validate_token