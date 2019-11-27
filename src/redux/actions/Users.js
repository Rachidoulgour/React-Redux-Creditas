import axios from 'axios';
export function login(formData){
    const request=axios.post('http://localhost:8080/api/v2/user/',formData).then(res=>{
        console.log(res.data)
        return res.data
    })
    return {
     type: 'LOGIN',
     payload: request
    }
    
 }
 export function register(formData){
    const request=axios.post('/api/user/signup',formData).then(res=> res.data )
    return {
     type: 'SIGN_UP',
     payload: request
    }
 }