import axios from 'axios'

export default axios.create({
	baseURL: CONFIG.baseURL,
	timeout: 5000,
	headers: {
		'Content-Post': CONFIG.token,
		'Content-Type': 'application/json',
	}
})