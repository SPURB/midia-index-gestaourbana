const state = {
	apagaLuz: false
}

const getters = {}

const actions = {}

const mutations = {
	LUZ_TOGGLE(state) { state.apagaLuz = !state.apagaLuz },
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}