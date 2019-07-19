import api from '../../utils/api'
const state = {
	arquivos: [],
	box: false,
	editBox: false,
	response: false, // será o id do arquivo criado
	error: false,
	errors: [],
	clickedIdEtapa: undefined
}

const getters = { }

const actions = {
	getArquivos: ({ state, commit, getters, rootState }) => {
		console.log(rootState.projeto.id) // GET `/arquivos/?id_projeto=${rootState.projeto.id}`
	},

	putArquivo: ({ state, commit, getters, rootGetters }, message) => { 
		console.log(message)
	},
	postNovoArquivo: ({ state, commit, getters, rootGetters }, novoArquivo) => {
		commit('SET_FECHING_STATUS', true,  { root: true })
		const output = {
			nome: novoArquivo.nome,
			idEtapa: state.clickedIdEtapa,
			descricao: novoArquivo.descricao, 
			autor: rootGetters.wordpress.userSettings.uid
		}
		api.post('/arquivos', output)
			.then(response => { 
				commit('SET_RESPONSE', { postResponse: response.data } )
			})
			.catch(error => {
				commit('SET_ERROR', error)
			})
			.then(() => {
				commit('SET_FECHING_STATUS', false, { root: true })
				commit('LUZ_TOGGLE', null, { root: true })
				commit('ABRE_BOX')
			})
	},
	fetchNovoArquivo: ({ state, commit, getters, rootGetters }, novoArquivo) => {
		commit('SET_FECHING_STATUS', true,  { root: true })

		api.get('/arquivos/' + novoArquivo.id )
			.then(response => {
				let arquivo  = response.data
				arquivo.id = parseInt(arquivo.id)
				arquivo.idEtapa = parseInt(arquivo.idEtapa)
				arquivo.posicao !== null ? parseInt(arquivo.posicao) : null
				commit('UPDATE_ARQUIVOS', arquivo, { root: true })
			})
			.catch(error => { commit('SET_ERROR', error) })
			.then(() => {
				commit('SET_FECHING_STATUS', false, { root: true })
			})
	},
	
}

const mutations = {
	ABRE_EDIT_BOX(state) { state.editBox = !state.editBox },
	ABRE_BOX:(state) => { state.box = !state.box },
	SET_RESPONSE: (state, resposeNovoIdEtapa) => { state.response = resposeNovoIdEtapa.postResponse },
	SET_ERROR: (state, response) => { state.error = response },
	SET_ID_ETAPA: (state, id) => { state.clickedIdEtapa = id.idEtapa },
	RESET_RESPONSE: (state) => { state.response = false },
	// SET_ETAPAS_ALTERADAS: (state, idEtapa) => { 
	// 	state.etapasAlteradas.includes(idEtapa) ? null : state.etapasAlteradas.push(idEtapa)
	// }
}

export default {
 	namespaced: true,
	state,
	getters,
	actions,
	mutations
}