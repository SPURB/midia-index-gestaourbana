import api from '../../utils/api'
const state = { 
	idEtapa: undefined, 
	error: false, 
	addEtapaBox: false
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
			.then(() => {
				commit('SET_FECHING_STATUS', false, { root: true })
				commit('luzToggle', null, { root: true })
				commit('DISPLAY', false)
			})
	},
	getNovaEtapa:({ state, commit, getters, rootState }, idNovaEtapa) => {
		commit('SET_FECHING_STATUS', true, { root: true })
		api.get('/etapas/'+idNovaEtapa)
			.then(response => {
				let novaEtapa = response.data
				novaEtapa.id = parseInt(novaEtapa.id)
				novaEtapa.idProjeto = parseInt(novaEtapa.idProjeto)
				novaEtapa.arquivos = []
				commit('UPDATE_ETAPAS', novaEtapa, { root: true })
			})
			.catch(error => commit('SET_ERROR', error))
			.then(() => commit('SET_FECHING_STATUS', false, { root: true }))
	}
}

const mutations = {
	SET_ETAPA: (state, response) => { state.idEtapa = response },
	SET_ERROR: (state, response) => { state.error = !state.error },
	DISPLAY: (state, boxState) => { state.addEtapaBox = boxState }
}

export default {
 	namespaced: true,
	state,
	getters,
	actions,
	mutations
}