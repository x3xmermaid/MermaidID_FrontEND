import axios from 'axios'
// import console = require('console');

export const fetchUser = (id_user) =>{
    let link = `https://mermaidid.herokuapp.com/mqb/tb_user?where=tb_user+id_user+`+id_user
    // let link = `http://192.168.100.5:3001/manual/cart`
    console.log(link)
    return {
        type: 'FETCH_USER',
        payload: axios.get(link)
    }
}

export const updateUser = (category, image, color) =>{
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

export const deleteUser = (id) =>{
    let link = `http://192.168.6.119:3001/category?where=no+`+id
    return {
        type: 'DELETE_CATEGORY',
        payload: axios.delete(link)
    } 
}

