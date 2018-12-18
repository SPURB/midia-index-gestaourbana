import api from '../../utils/api'
// import statusProjetos from './statusProjetos';

const state = { 
	tiposDeArquivo: [
		'PDF', 
		'KML',
		'SHP',
		'DOC',
		'XLS'
	],
	urlsNovas:[{}],
	response: false,
	error: false
}	

const getters = {}

const actions = {
	setNovasUrls({ state, commit, getters, rootGetters }, arquivo){
		commit('SET_FECHING_STATUS', true,  { root: true })

		/* checar valores antes de fazer o post */
		// try {
		// } catch (error) {
		// }

		state.urlsNovas.forEach(element => {
			const output = {
				url: element.url,
				extensao: element.extensao,
				idArquivo: arquivo.id
			}
			api.post('/urls', output)
				.then(res => { 
					state.response = res.data 
					// commit('UPDATE_ARQUIVO', {
					// 	url: element.url,
					// 	extensao: element.extensao,
					// 	idUrl: res.data, 
					// 	idArquivo: arquivo.id, 
					// 	idEtapa: arquivo.idEtapa
					// }, { root: true })
				})
				.catch(err => { 
					console.error('setNovasUrls:' + err) 
					state.error = err
				})
				.then(() => {
					commit('SET_FECHING_STATUS', false, { root: true })
					commit('RESET_ALL')
				})
		})
	}
}

const mutations = {
	SET_URL:(state, newUrl) => {
		state.urlsNovas[newUrl.index].url = newUrl.url
	},
	SET_EXTENSAO:(state, newExtension) => {
		state.urlsNovas[newExtension.index].extensao = newExtension.extensao
	},
	RESET:(state, urlResetIndex) => { 
		const filtradas = state.urlsNovas.filter((element, index) => {
			return index !== urlResetIndex.reset
		})
		state.urlsNovas = filtradas
	},
	RESET_ALL: (state) => { state.urlsNovas = [{}] }
}

export default {
 	namespaced: true,
	state,
	getters,
	actions,
	mutations
}