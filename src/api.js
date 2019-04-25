import AXIOS from 'axios'

export default AXIOS.create({
  baseURL: process.env.VUE_APP_API_ROOT
})