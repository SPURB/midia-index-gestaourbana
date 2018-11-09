import { baseURL, token } from '../../../../apiconfig'
import axios from 'axios'
export default axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
	'token': token,
    'Content-Type': 'application/json',
  }
})
