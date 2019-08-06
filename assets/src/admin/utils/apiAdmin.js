import axios from 'axios'
const fechadura = require('@spurb/fechadura')

export default axios.create({
	baseURL: CONFIG.consultasApUrl,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
		'Current': fechadura(CONFIG.chaveApi, 'bicho').encript
	}
})