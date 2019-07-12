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

