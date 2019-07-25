import api from '../../utils/api'

const state = { 
	response: false,
	error: false
}

const getters = {}

const actions = { 
	getNovoArquivo: ({ state, commit, getters, rootState }, arquivo) => {
		commit('SET_FECHING_STATUS', true,  { root: true })
		api.get('/arquivos/' + arquivo.idArquivo)
			.then(res => commit('SET_RESPONSE', res.data))
			.catch(err => commit('SET_ERROR', err))
			.finally(() => commit('SET_FECHING_STATUS', false,  { root: true }) )
	}
}

const mutations = {
	SET_RESPONSE: (state, novoArquivo) => {
		novoArquivo.id = parseInt(novoArquivo.id)
		novoArquivo.idEtapa = parseInt(novoArquivo.idEtapa)
		state.response = novoArquivo 
	},
	SET_ERROR: (state, error) => { state.error = error }
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}