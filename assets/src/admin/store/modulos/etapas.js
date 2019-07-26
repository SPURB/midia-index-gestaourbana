import api from '../../utils/api'
const state = { 
	etapas: [],
	idEtapa: undefined, // será definido quando criar a etapa
	error: false,
	addEtapaBox: false,
	response: false,
	etapaNomeMutated: false,
	etapasAlteradas: [],

	serverResponse: false
}

const getters = {
	projectId (state, getters, rootState) { return rootState.projeto.id }
}
const actions = {
	getEtapas: ({state, commit}) => {
		commit('SET_FECHING_STATUS', true,  { root: true })
		api.get('/etapas/')
			.then(res => commit('GET_ETAPAS', res.data))
			.catch(error => {
				commit('SET_ERROR', error)
				commit('SET_ERROR_TRUE')
				console.log('error from getEtapas')
				console.log(error)
			})
			.finally(() => commit('SET_FECHING_STATUS', false,  { root: true }))
	},

	putArquivosOrder:({ state, commit, getters }) => { console.log('ETAPAS/putArquivosOrder')},

	putEtapas: ({ state, commit, getters, rootState }) => {
		commit('SET_FECHING_STATUS', true,  { root: true })
		rootState.projeto.etapas.forEach( index => {
			if(index.updated) {
				api.put('/etapas/' + index.id, { 
					nome: index.nome
				})
					.then(response => {
						commit('SET_PUT_RESPONSE', response.data)
					})
					.catch(error => {
						commit('SET_PUT_RESPONSE', error)
						commit('SET_ERROR', error)
					})

			}
		})
		commit('SET_FECHING_STATUS', false,  { root: true })
	},
	postNovaEtapa: ({ state, commit, getters, rootState }, novoNome) => {
		// commit('SET_FECHING_STATUS', true,  { root: true })
		const output = {
			idProjeto: novoNome.idProjeto,
			nome: novoNome.nome
		}
		
		console.log(output)

		api.post('/etapas', output)
			.then(response => {
				commit('SET_ETAPA', response.data )
				commit('ui/LUZ_TOGGLE', null, { root: true })
				commit('DISPLAY', false)
			})
			.catch(error => commit('SET_ERROR', error))
			.finally(() =>commit('SET_FECHING_STATUS', false, { root: true }))
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
			.finally(() => commit('SET_FECHING_STATUS', false, { root: true }))
	}
}

const mutations = {
	GET_ETAPAS: (state, etapas) => { 
		const numericalIds = etapas.map(etapa => {
			return {
				id: parseInt(etapa.id),
				nome: etapa.nome
			}
		})
		state.etapas = numericalIds
	},
	SET_ETAPA: (state, response) => { state.idEtapa = response },
	SET_ERROR: (state, error) => { state.error = error.response.data },
	SET_ERROR_TRUE: (state) => { state.error = true },
	DISPLAY: (state, boxState) => { state.addEtapaBox = boxState },
	SET_PUT_RESPONSE: (state, response) => { state.response = response },
	ETAPA_NOME_MUTATED: (state, status) => { state.etapaNomeMutated = status },
	RESET_RESPONSES: (state) => {
		state.response = false
		state.error = false
	},
	SET_ETAPAS_ALTERADAS: (state, idEtapa) => { 
		state.etapasAlteradas.includes(idEtapa) ? null : state.etapasAlteradas.push(idEtapa)
	},
	UPDATE_ETAPA_NOME: (state, update) => state.etapas[update.index].nome = update.nome
}

export default {
 	namespaced: true,
	state,
	getters,
	actions,
	mutations
}