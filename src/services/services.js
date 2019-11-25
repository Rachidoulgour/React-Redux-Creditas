import axios from 'axios';

class ApiRequestService {

    async getProducts(){
        
            const {data} = await axios.get('http://localhost:8080/api/v1/products/')
            console.log(data)
            return data;
                    
    }
      
}
export default new ApiRequestService();