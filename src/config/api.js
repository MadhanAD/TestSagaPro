import axios from 'axios'
import {BASE_URL} from './url'

export function get(method){
    let url = `${method}`
    return axios.get(url)
    .then(response =>{
        return {response}
    })
    .catch(error => {
      return error  
    })
}

export function POST(method,params){
    return axios.post(`${BASE_URL}${method}`,params)
            .then(response => {
                return {
                    data : response,
                    error : false,
                    loading : false
                }
            })
            .catch(error => {
                return {
                    error : true
                }
            })
}