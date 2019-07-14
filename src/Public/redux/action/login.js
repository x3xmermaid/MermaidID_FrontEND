import axios from 'axios'
// import console = require('console');

export const postVerify = (id,password) =>{
    let link = `https://mermaidid.herokuapp.com/manual/register_auth/`+id[0].id_user
    // console.log(id[0].id_user);
    return {
        type: 'VERIFY',
        payload: axios({
            method: 'post',
            url: link,
            data: {
                password: password,
            }           
            })
    } 
}

export const postLogin = (email) =>{
    // console.log("email :"+email);
    let link = `https://mermaidid.herokuapp.com/manual/register`
    return {
        type: 'ADD_USER',
        payload: axios({
            method: 'post',
            url: link,
            data: {
                email: email,
            }           
            })
    } 
}

export const postVerifyLogin = (id,password) =>{
    let link = `https://mermaidid.herokuapp.com/manual/login_auth/`+id[0].id_user
    // console.log(id[0].id_user);
    return {
        type: 'VERIFY_LOGIN',
        payload: axios({
            method: 'post',
            url: link,
            data: {
                password: password,
            }           
            })
    } 
}

export const postLoginLogin = (email) =>{
    // console.log("email :"+email);
    let link = `https://mermaidid.herokuapp.com/manual/login`
    return {
        type: 'LOGIN_USER',
        payload: axios({
            method: 'post',
            url: link,
            data: {
                email: email,
            }           
            })
    } 
}


