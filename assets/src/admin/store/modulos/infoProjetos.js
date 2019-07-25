const state = { 
	addProjetoBox: false,
	projetos: []
}

const getters = { }

const mutations = {
	ABRE_PROJETO_BOX(state) { state.addProjetoBox = !state.addProjetoBox },
}
const actions = { }

export default {
	namespaced: true,
	state, 
	getters,
	mutations,
	actions
}