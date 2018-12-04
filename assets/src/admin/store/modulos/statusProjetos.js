import api from '../../utils/api'
const state = { 
	response: undefined,
	error: false
}

const getters = {
	projetos (state, getters, rootState) { return rootState.projetos }
}

const actions = {
	put: ({ state, commit, getters, rootState }, ids) => {
		commit('SET_FECHING_STATUS', true, { root: true })
		const output = ids.map(id => {
			return {
				id: id,
				ativo: getters.projetos.find(projeto => projeto.id === id).ativo
			}
		})
		// console.log(output)
		api.put('/projetos', output)
			.then(response => commit('SET_ETAPA', response.data ))
			.catch(error => commit('SET_ERROR', error))
			.then(() => commit('SET_FECHING_STATUS', false, { root: true }))
	}
}

const mutations = {
	SET_ETAPA: (state, response) => { state.response = response },
	SET_ERROR: (state, response) => { state.error = !state.error }
}

export default {
 	namespaced: true,
	state,
	getters,
	actions,
	mutations
}