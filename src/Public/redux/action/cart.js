import axios from 'axios'
// import console = require('console');

export const fetchCart = () =>{
    let link = `https://mermaidid.herokuapp.com/manual/cart`
    // let link = `http://192.168.100.5:3001/manual/cart`
    console.log(link)
    return {
        type: 'FETCH_CART',
        payload: axios.get(link)
    }
}

export const updateCart = (category, image, color) =>{
    let link = `http://192.168.6.119:3001/category`
    return {
        type: 'ADD_CATEGORY',
        payload: axios({
            method: 'post',
            url: link,
            data: {
                category: category,
                image: image,
                color: color,
            }           
            })
    } 
}

export const deleteCart = (id) =>{
    let link = `http://192.168.6.119:3001/category?where=no+`+id
    return {
        type: 'DELETE_CATEGORY',
        payload: axios.delete(link)
    } 
}

