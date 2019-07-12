import axios from 'axios';
import product from '../reducers/product';

const url='https://mermaidid.herokuapp.com/'

export const getProduct = () => {
    return {
        type:'GET_PRODUCT',
        payload:axios.get(`${url}tb_product`)
    }
}

export const getCategory = () => {
    return {
        type:'GET_CATEGORY',
        payload: axios.get(`${url}tb_category`)
    }
}

export const getUser = () => {
    return {
        type:'GET_USER',
        payload: axios.get(`${url}/mqb/tb_user?where=tb_user+id_user+1`)
    }
}