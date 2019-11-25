import axios from 'axios';



export const getProductById = async (id) => {
    const request= await axios.get(`http://localhost:8080/api/v1/products/${id}`).then(res=>{
        console.log(res.data)
        
        return res.data
        
    })
    return {
     type: 'GET_PRODUCT',
     payload: request
    }
}