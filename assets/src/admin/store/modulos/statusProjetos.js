// import api from '../../utils/api'
import apiAdmin from '../../utils/apiAdmin'
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
				ativo: getters.projetos.find(projeto => projeto.id === id).ativo,
				id: id
			}
		})

		apiAdmin.put('/projetos', output)
			.then(response => {
				commit('SET_ETAPA', response.data )
				commit('RESET_PROJETOS_AFTER_UPDATE', false, { root: true })
			})
			.catch(error => commit('SET_PROJETOS_ERROR', error))
			.then(() => commit('SET_FECHING_STATUS', false, { root: true }))
	}
}

const mutations = {
	SET_ETAPA: (state, response) => { state.response = response },
	SET_PROJETOS_ERROR: state => { state.error = !state.error }
}

export default {
 	namespaced: true,
	state,
	getters,
	actions,
	mutations
}