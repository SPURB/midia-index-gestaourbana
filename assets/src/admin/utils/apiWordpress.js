import axios from 'axios'

export default axios.create({
	baseURL: CONFIG.wpApiUrl,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json'
	}
})