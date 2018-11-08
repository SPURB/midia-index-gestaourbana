import axios from 'axios'
export default axios.create({
  baseURL: 'http://spurbsp163:7080/apiconsultas/',
  // timeout: 5000,
  headers: {
    'X-Auth-Token': 'w3rkbv68sgtfjmrg8bocsj5x814wmo04m5a1udg1',
    'Content-Type': 'application/json'
  }
})