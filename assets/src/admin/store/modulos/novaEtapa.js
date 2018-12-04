import api from '../../utils/api'
const state = { 
	idEtapa: undefined, 
	error: false
}

const getters = {
	projectId (state, getters, rootState) { return rootState.projeto.id }
}

const actions = {
	postNovaEtapa: ({ state, commit, getters, rootState }, novoNome) => {
		commit('SET_FECHING_STATUS', true,  { root: true })

		const output = {
			idProjeto: getters.projectId,
			nome: novoNome
		}

		api.post('/etapas', output)
			.then(response => commit('SET_ETAPA', response.data ))
			.catch(error => commit('SET_ERROR', error))
			.then(() => commit('SET_FECHING_STATUS', false, { root: true }))
	}
}

const mutations = {
	SET_ETAPA: (state, response) => { state.idEtapa = response },
	SET_ERROR: (state, response) => { state.error = !state.error }
}

export default {
 	namespaced: true,
	state,
	getters,
	actions,
	mutations
}