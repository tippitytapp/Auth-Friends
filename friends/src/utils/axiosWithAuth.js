import axios from 'axios';

export function axiosWithAuth(){
    const token = JSON.parse(localStorage.getItem('token'));
   return axios.create({
       headers:{
        authorization: token
       },
       baseURL: "http://localhost:5000"
   })
}
