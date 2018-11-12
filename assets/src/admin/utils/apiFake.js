import axios from 'axios'
export default axios.create({
  baseURL: "http://spurbcp13343:7080/fake/",
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
})
