import axios from 'axios';
import product from '../reducers/product';

const url='https://mermaidid.herokuapp.com/mqb/'
const urlManual='https://mermaidid.herokuapp.com/manual/'

export const getProduct = () => {
    return {
        type:'GET_PRODUCT',
        payload:axios.get(`${url}tb_product`)
    }
}

export const getWishlist = (id_user) => {
    id_user==undefined ? 0 :  id_user
    return {
        type:'GET_WISHLIST',
        payload:axios.get(`https://mermaidid.herokuapp.com/mqb/tb_product?join=tb_store+id_store+id_store+tb_wishlist+id_product+id_product&where=tb_wishlist+id_user+${id_user}`)
    }
}

export const postImage = (photo,body) => {
    const data = new FormData();

    data.append("image", {
      name: photo.fileName,
      type: photo.type,
      uri: photo.uri 
    });
  
    return data
        

    }

export const postCart = (data) => {
    return {
        type:'ADD_CART',
        payload:axios.post(`https://mermaidid.herokuapp.com/mqb/tb_cart`,data)
    }
}
