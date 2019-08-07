import api from '../../utils/api'
// import apiAdmin from '../../utils/apiAdmin'

const state = {
	fetching: false,
	arquivos: [],
	box: false,
	editBox: false,
	response: false, // será o id do arquivo criado
	error: false,
	errors: [],
	clickedIdEtapa: undefined,
	clieckedArquivoId: undefined,
	updates: [],
	// create: []
}

const getters = {
	arquivoClicado: (state) => {
		if(state.clieckedArquivoId) {
			return state.arquivos.find(arquivo => parseInt(arquivo.id) === state.clieckedArquivoId)
		}
		else return undefined
	}
}

const actions = {
	getArquivos: ({ state, commit, getters, rootState }) => {
		commit('FETCH_STATUS', true)
		commit('RESET_ARQUIVOS')
		api.get(`/arquivos/?idProjeto=${rootState.projeto.id}`)
			.then(res => {
				commit('SET_ARQUIVOS', res.data)
			})
			.catch(error => commit('SET_ERROR', error))
			.finally(() => commit('FETCH_STATUS', false))
	},

	putArquivo: ({ state, commit, getters, rootGetters }, message) => { 
		console.log(message)
	},

	postNovoArquivo: ({ state, commit, getters, rootGetters }, novoArquivo) => {
		commit('SET_FECHING_STATUS', true, { root: true })
		const output = {
			nome: novoArquivo.nome,
			idEtapa: state.clickedIdEtapa,
			descricao: novoArquivo.descricao,
			autor: rootGetters.wordpress.userSettings.uid
		}
		apiAdmin.post('/arquivos', output)
			.then(response => { 
				commit('SET_RESPONSE', { postResponse: response.data } )
			})
			.catch(error => {
				commit('SET_ERROR', error)
			})
			.then(() => {
				commit('SET_FECHING_STATUS', false, { root: true })
				commit('ui/LUZ_TOGGLE', null, { root: true })
				commit('ABRE_BOX')
			})
	},

	fetchNovoArquivo: ({ state, commit, getters, rootGetters }, novoArquivo) => {
		commit('SET_FECHING_STATUS', true, { root: true })

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
	REORDER: (state, updateArquivosOrder) => {
		updateArquivosOrder.arquivos.forEach(arquivo => {
			const index = updateArquivosOrder.arquivos.indexOf(arquivo)
			arquivo.posicao = index + 1
			return arquivo
		})

		console.log("store new order:")
		console.log(state.arquivos.map(arquivo => { return { id: arquivo.id, posicao: arquivo.posicao }} ))
	},

	ABRE_EDIT_BOX: (state, id) => {
		state.editBox = !state.editBox
		state.clieckedArquivoId = id
	},
	ABRE_BOX:(state) => { state.box = !state.box },
	SET_RESPONSE: (state, resposeNovoIdEtapa) => { state.response = resposeNovoIdEtapa.postResponse },
	SET_ERROR: (state, response) => { state.error = response },
	SET_ID_ETAPA: (state, id) => { state.clickedIdEtapa = id.idEtapa },
	RESET_RESPONSE: (state) => { state.response = false },
	SET_ARQUIVOS: (state, arquivos) => { 
		state.arquivos = arquivos.map(arquivo => {
			arquivo.id = parseInt(arquivo.id)
			arquivo.idEtapa = parseInt(arquivo.idEtapa)
			arquivo.idProjeto = parseInt(arquivo.idProjeto)
			arquivo.idSubEtapa = parseInt(arquivo.idSubEtapa)
			arquivo.posicao = parseInt(arquivo.posicao)
			arquivo.idExtensao = parseInt(arquivo.idExtensao)
			return arquivo
		})
	},
	RESET_ARQUIVOS: (state) => state.arquivos = [],
	FETCH_STATUS: (state, isFetching) => state.fetching = !state.fetching,
	UPDATE_ARQUIVO_CLICADO: (state, arquivos) => {
		console.log(arquivos)
	},
	ADD_ARQUIVO: (state, arquivo) => {
		state.arquivos.push(arquivo)
	},
	LIST_UPDATES: (state, updates) => {
		if (updates.length) updates.forEach(update => state.updates.push(update))
		state.updates = [...new Set(state.updates)] 
	}
}

export default {
 	namespaced: true,
	state,
	getters,
	actions,
	mutations
}