import axios from 'axios'


// export const fetchCart = () =>{
//     let link = `https://mermaidid.herokuapp.com/manual/cart`
//     // let link = `http://192.168.100.5:3001/manual/cart`
//     console.log(link)
//     return {
//         type: 'FETCH_CART',
//         payload: axios.get(link)
//     }
// }

export const updateCheckout = (value) =>{
    // console.log("value")
    let link = `https://mermaidid.herokuapp.com/mqb/tb_cart?wherein=id_cart`
    for(let i=0;i<value.length;i++){
        link = link+"+"+value[i].id_cart
    }
    console.log(link)
    
    return {
        type: 'UPDATE_CHECKOUT',
        payload: axios({
            method: 'patch',
            url: link,
            data: {
                buyed: 0,
            }           
            })
    } 
}

// export const deleteCart = (id) =>{
//     let link = `http://192.168.6.119:3001/category?where=no+`+id
//     return {
//         type: 'DELETE_CATEGORY',
//         payload: axios.delete(link)
//     } 
// }

