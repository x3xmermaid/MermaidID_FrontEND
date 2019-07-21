import axios from 'axios'
// import React, {Component} from 'react';
// import console = require('console');

export const addProduct = (productName, imageFile) =>{

    let link = `https://mermaidid.herokuapp.com/manual`+id
    // let link = `http://192.168.100.5:3001/manual/cart`
    const bodyFormData = new FormData()
    bodyFormData.set('userName', productName)
    bodyFormData.append('image', imageFile)
    console.log(link)
    return {
        type: 'FETCH_CART',
        payload: axios({
            method: 'POST',
            url: link,
            data: bodyFormData,
            config: {
               header: {'Content-Type': 'multipart/form-data'} 
            }
        }).then(function(response){
            console.log(response)
        }).catch(function (res){
            console.log(res)
        })
    }
}



