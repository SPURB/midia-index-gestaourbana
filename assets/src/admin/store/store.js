import Vue from 'vue'
import Vuex from 'vuex'
import api from '../utils/api'
import etapas from './modulos/etapas'
import subetapas from './modulos/subetapas'
import arquivos from './modulos/arquivos'
import statusProjetos from './modulos/statusProjetos'
import urls from './modulos/urls'
import infoProjeto from './modulos/infoProjeto'
import wordpress from './modulos/wordpress'

Vue.use(Vuex)

let store = new Vuex.Store({
	// strict: true,
	modules:{
		etapas,
		subetapas,
		arquivos,
		statusProjetos,
		urls,
		infoProjeto,
		wordpress
	},
	state: {
		projeto: false,
		arquivoClicado: undefined,
		projetos: [],
		apagaLuz: false,
		// editArquivoBox: false,
		addProjetoBox: false,
		serverResponse: false,
		serverError: false,
		fetching: false
	},
	getters: {
		projetosAlterados(state) {
			let status = false
			state.projetos.forEach( index => {
				index.alterado ? status = true : status = status
			})
			return status
		}, 
		dataFormatada(){
				const d = new Date,
				year = d.getFullYear(),
				month = d.getMonth() + 1,
				day = d.getDate(),
				hour = d.getHours(),
				minutes = d.getMinutes(),
				seconds = d.getSeconds()

			function twoDigits(oneDigit){
				const digits = oneDigit.toString().length;
				if(digits === 1) {
					return '0' + oneDigit.toString()
				}
				else { return oneDigit }
			}

			return year + '-' +
			twoDigits(month) + '-' +
			twoDigits(day) + ' ' +
			twoDigits(hour) + ':' +
			twoDigits(minutes) + ':' +
			twoDigits(seconds)
		} 
	},

	mutations: {
		LUZ_TOGGLE(state) { state.apagaLuz = !state.apagaLuz },
		// ABRE_ARQUIVO_BOX(state) { state.editArquivoBox = !state.editArquivoBox },
		ABRE_PROJETO_BOX(state) { state.addProjetoBox = !state.addProjetoBox },
		ATIVA_TOGGLER(state, incomeId) {
			state.projetos.map(function(index) {
				if (index.id === incomeId) {
					index.ativo = Math.abs(index.ativo - 1)
					index.alterado = !index.alterado 		
				}
			})
		},
		SET_ERROR: (state, error) => { state.serverError = error.data },
		SET_FECHING_STATUS: (state, status) => { state.fetching = status },
		RESET_PROJETOS: (state) => { 
			state.projetos.map(function(index) {
				if(index.alterado){
					index.alterado = !index.alterado
					index.ativo = !index.ativo
				}
			})
		},
		RESET_RESPONSES:(state) =>{
			state.serverResponse = false
			state.serverError = false
		},
		RESET_PROJETOS_AFTER_UPDATE:(state, status) => {
			state.projetos = state.projetos.map(function(index) { 
				index.alterado = status 
				return index
			})
		},
		RESET_PROJETO: state => { state.projeto = false }, 
		SET_PROJETOS: (state, response) => { 
			state.projetos = response.data.map(index => {
				index.id = parseInt(index.id)
				if(index.ativo === null){
					index.ativo = 0
				}
				index.ativo = parseInt(index.ativo)

				index.idEtapa = parseInt(index.idEtapa)
				index.wordpressUserId = parseInt(index.wordpressUserId)
				index.piu = parseInt(index.piu)

				index.alterado = false
				return index
			})
		},
		SET_INFO_PROJETO: (state, response) => {
			let projeto = response.data
			projeto.id = parseInt(projeto.id)
			projeto.ativo = parseInt(projeto.ativo)
			projeto.idEtapa = parseInt(projeto.idEtapa)
			projeto.wordpressUserId = parseInt(projeto.wordpressUserId)
			projeto.piu = parseInt(projeto.piu)

			state.projeto = projeto
		},
		SET_PROJETO: (state, res) => { state.serverResponse = res.data },
		SET_ARQUIVO: (state, arquivo) => { 
			const etapas = state.projeto.etapas;
			const indexEtapas = etapas.findIndex(i => i.id === arquivo.idEtapa);
			const indexArquivos = etapas[indexEtapas].arquivos.findIndex(i => i.id === arquivo.idArquivo);
			state.arquivoClicado = etapas[indexEtapas].arquivos[indexArquivos]
		},
		REORDER_ARQUIVOS: (state, obj) => {
			const indexEtapa = state.projeto.etapas.findIndex(i => i.id === obj.idEtapa )
			state.projeto.etapas[indexEtapa].arquivos = obj.arquivos
		},
		SET_ARQUIVO_EXTENSION: (state, obj) => {
			const indexUrl = state.arquivoClicado.urls.findIndex(i => parseInt(i.id) === parseInt(obj.idUrl) )
			state.arquivoClicado.urls[indexUrl].extensao = obj.extensao
		},
		UPDATE_ETAPA_NOME: (state, objIndexEtapaNome) => {
			state.projeto.etapas[objIndexEtapaNome.indexEtapa].nome = objIndexEtapaNome.nome
			state.projeto.etapas[objIndexEtapaNome.indexEtapa].updated = true
		},
		UPDATE_ETAPAS:(state, novaEtapa) => { state.projeto.etapas.push(novaEtapa) },
		UPDATE_ARQUIVO_CLICADO:(state, arquivo) => { state.arquivoClicado = arquivo },
		UPDATE_PROJETO_NOME: (state, projetoAlterado ) => {  state.projeto.nome = projetoAlterado },
		UPDATE_ARQUIVOS: (state, arquivo) => { 
			const index = state.projeto.etapas.findIndex(i => i.id === arquivo.idEtapa )
			arquivo.itemNovo = true
			state.projeto.etapas[index].arquivos.push(arquivo)
		}
	},
	actions: {
		fetchProjetos: state => {
			state.commit('SET_FECHING_STATUS', true)
			api.get('projetos')
				.then(response => { state.commit('SET_PROJETOS', response)})
				.catch(error => { state.commit('SET_ERROR', error)})
				.then(() => {state.commit('SET_FECHING_STATUS', false)
				}
			)
		},
		fetchInfoProjeto: ( state, id ) => {
			if(parseInt(id)) {
				state.commit('SET_FECHING_STATUS', true)
				api.get('projetos/' + id)
					.then(response => state.commit('SET_INFO_PROJETO', response))
					.catch(error => { state.commit('SET_ERROR', error) })
					.then(() => { state.commit('SET_FECHING_STATUS', false)}
				)
			}
		},
		postNovoProjeto: ( state, projeto ) => {
			state.commit('SET_FECHING_STATUS', true)
			api.post('/projetos', projeto)
				.then(response => { state.commit('SET_PROJETO', response )})
				.catch(error => { state.commit('SET_ERROR', error)})
				.then(() => {state.commit('SET_FECHING_STATUS', false)}
			)
		},
		putProjeto: ( { dispatch, state, commit } ) => {
			/* nome projetos, nome etapas e ordem de arquivos */
			commit('SET_FECHING_STATUS', false)
			api.put('/projetos/' + state.projeto.id, { nome: state.projeto.nome })
				.then(response => {
					dispatch('etapas/putEtapas')
					commit('SET_PROJETO', response)
				})
				.catch(error => {
					commit('SET_ERROR', error)
				})
				.then(() => commit('SET_FECHING_STATUS', false))
		}
	}
})
export default store