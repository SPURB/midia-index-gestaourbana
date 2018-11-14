import { baseURL, token } from '../../../../config'
import axios from 'axios'
export default axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
	'token': token,
    'Content-Type': 'application/json',
  }
})
