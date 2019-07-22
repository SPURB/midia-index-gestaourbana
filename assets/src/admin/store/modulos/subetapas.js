import api from '../../utils/api'

const state = { 
	fetching: false,
	error: false,
	subetapas: []
}

// const getters = {}

const actions = {
	getSubEtapas : ({ state, commit}) => {
		commit('FETCH_STATUS', true)
		api.get('subetapas')
			.then(res => commit('SET_SUBETAPAS', res.data))
			.catch(err => commit('ERROR', err))
			.finally(() => commit('FETCH_STATUS', false))
	}
}

const mutations = {
	ERROR: (state, status) => state.error = status,
	FETCH_STATUS: (state, status) => state.fetching = status,
	SET_SUBETAPAS: (state, subetapas) => state.subetapas = subetapas
}

export default {
	namespaced: true,
	state,
	// getters,
	actions,
	mutations
}