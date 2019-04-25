import AXIOS from 'axios'

console.log(process.env.NODE_ENV)
console.log(process.env)

export default AXIOS.create({
  baseURL: process.env.VUE_APP_API_ROOT
})