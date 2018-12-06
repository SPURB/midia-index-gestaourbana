import api from '../../utils/api'
const state = { 
	box: false,
	editBox: false,
	response: undefined,
	error: false
}

const getters = {}

const actions = {
	postNovoArquivo: ({ state, commit, getters, rootState }, novoArquivo) => {
		commit('SET_FECHING_STATUS', true,  { root: true })

		const output = {
			nome: novoArquivo.nome,
			idEtapa: novoArquivo.idEtapa,
			descricao: novoArquivo.descricao
		}


		// id	"1"
		// nome	"Diagnóstico"
		// idEtapa	"2"
		// atualizacao	"2018-11-01 16:50:56"
		// autor	"devspurbanismo"
		// descricao	"Lorem lorem"
		// posicao	"1"

		api.post('/arquivos', output)
			.then(response => commit('SET_RESPONSE', response.data ))
			.catch(error => {
				console.log(error)
				commit('SET_ERROR', error)
			})
			.then(() => {
				commit('SET_FECHING_STATUS', false, { root: true })
				commit('luzToggle', null, { root: true })
				commit('ABRE_BOX')
			})
	}
}

const mutations = {
	ABRE_BOX(state) { state.box = !state.box },
	SET_RESPONSE: (state, response) => { state.idEtapa = response },
	SET_ERROR: (state, response) => { state.error = response }
}

export default {
 	namespaced: true,
	state,
	getters,
	actions,
	mutations
}