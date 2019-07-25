const state = {
	addProjetoBox: false,
	apagaLuz: false
}

const getters = {}
const actions = {}

const mutations = {
	LUZ_TOGGLE(state) { state.apagaLuz = !state.apagaLuz },
	ABRE_PROJETO_BOX(state) { state.addProjetoBox = !state.addProjetoBox }
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}