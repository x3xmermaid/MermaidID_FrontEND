import axios from 'axios';
import product from '../reducers/product';

const url='https://mermaidid.herokuapp.com/'

export const getProduct = () => {
    return {
        type:'GET_PRODUCT',
        payload:axios.get(`${url}tb_product`)
    }
}