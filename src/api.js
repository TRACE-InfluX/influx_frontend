import AXIOS from 'axios'

let API = AXIOS.create({
  baseURL: process.env.VUE_APP_API_ROOT
})

if(localStorage.bearertoken) {
  API.defaults.headers.common['Authorization'] = `Bearer ${localStorage.bearertoken}`;
}

export default API