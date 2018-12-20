import api from '../../utils/api'
const state = { 
	box: false,
	editBox: false,
	response: false, // será o id do arquivo criado
	// responses: [],
	error: false,
	// errors: [],
	clickedIdEtapa: undefined,
	// etapasAlteradas: []
}

const getters = {
	/* retorna um Array de objetos com idEtapa e Array de ids de arquivos
		[{	
			idEtapa: Int,
			novasPosicoes: [ idArquivo(Int) ]
		}] 
	*/
	// posicoesPorEtapas (state, getters, rootState){ 
	// 	let output = undefined
	// 	if(rootState.projeto && state.etapasAlteradas.length > 0){
	// 		let etapas = rootState.projeto.etapas
	// 		output = etapas.map( etapa => {
	// 			let idsPorEtapa = etapa.arquivos.map( arquivo => { return arquivo.id })
	// 			return {
	// 				idEtapa: etapa.id,
	// 				novasPosicoes: idsPorEtapa
	// 			}
	// 		})		
	// 	}
	// 	return output
	// }
}

const actions = {
	// putArquivosOrder:({ state, commit, getters }) => { 
	// 	console.log('putArquivosOrder: etapasAlteradas + posicoesPorEtapas')
	// 	console.log(state.etapasAlteradas)
	// 	console.log(getters.posicoesPorEtapas)
	// 	if(state.etapasAlteradas.length > 0){
	// 		state.etapasAlteradas.forEach( id => {
	// 			const posicoes = getters.posicoesPorEtapas.find(element => element.idEtapa === id)
	// 			const output = {
	// 				id: id,
	// 				arquivos: posicoes.novasPosicoes
	// 			}
	// 			console.log(output)
	// 			api.put('/etapas/' + id, output)
	// 				.then( response => state.responses.push({ idEtapa: id, response: response }))
	// 				.catch( error => { 
	// 					state.errors.push({ idEtapa: id, error: error }) 
	// 				})
	// 		})
	// 	}
	// },
	postNovoArquivo: ({ state, commit, getters, rootGetters }, novoArquivo) => {
		commit('SET_FECHING_STATUS', true,  { root: true })
		const output = {
			nome: novoArquivo.nome,
			idEtapa: state.clickedIdEtapa,
			descricao: novoArquivo.descricao, 
			autor: rootGetters.wordpressUserSettings.uid
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