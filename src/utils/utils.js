const validate_token=(token)=>{
    if (token!=='secret_token'){
        return true
    }
    else{
        return false
    }
}

export default validate_token