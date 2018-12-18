import Vue from 'vue'
import Vuex from 'vuex'
import api from '../utils/api'
import etapas from './modulos/etapas'
import arquivos from './modulos/arquivos'
import statusProjetos from './modulos/statusProjetos'
import urls from './modulos/urls'
import infoProjeto from './modulos/infoProjeto'

Vue.use(Vuex)

let store = new Vuex.Store({
	// strict: true,
	modules:{
		etapas,
		arquivos,
		statusProjetos,
		urls,
		infoProjeto
	},
	state: { 
		projeto: false,
		arquivoClicado: undefined,
		projetos: [],
		apagaLuz: false,
		editArquivoBox: false,
		addProjetoBox: false,
		serverResponse: false,
		serverError: false,
		fetching: true
	},
	getters: {
		projetosAlterados(state) {
			let status = false
			state.projetos.forEach( index => {
				index.alterado ? status = true : status = status
			})
			return status
		}, 
		wordpressUserSettings() { return userSettings },
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
		ABRE_ARQUIVO_BOX(state) { state.editArquivoBox = !state.editArquivoBox },
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
		RESET_PROJETOS_AFTER_UPDATE:(state, status) => {
			state.projetos = state.projetos.map(function(index) { 
				index.alterado = status 
				return index
			})
		},
		RESET_PROJETO: state =>{ state.projeto = false }, 
		SET_PROJETOS: (state, response) => { 
			state.projetos = response.data.map(index => {
				index.id = parseInt(index.id)
				if(index.ativo == null){
					index.ativo = 0
				}
				index.ativo = parseInt(index.ativo)
				index.wordpress_user_id = parseInt(index.wordpress_user_id)
				index.alterado = false
				return index
			})
		},
		SET_INFO_PROJETO: (state, response) => { 
			let projeto = response.data
			projeto.id = parseInt(projeto.id)
			projeto.ativo = parseInt(projeto.ativo)
			projeto.wordpress_user_id = parseInt(projeto.wordpress_user_id)
			projeto.etapas = projeto.etapas.map(function(etapa) {
				etapa.id = parseInt(etapa.id)
				etapa.idProjeto = parseInt(etapa.idProjeto)
				let arquivos = () => {
					if(etapa.arquivos == undefined){
						etapa.arquivos = []
					}
					else{
						for (let key in etapa.arquivos) {
							etapa.arquivos[key].id = parseInt(etapa.arquivos[key].id)
							etapa.arquivos[key].idEtapa = parseInt(etapa.arquivos[key].idEtapa)
							etapa.arquivos[key].posicao = parseInt(etapa.arquivos[key].posicao)
						}
					}
					return etapa.arquivos
				}
				etapa.arquivos = arquivos()
				return etapa
			})
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
		},
		// UPDATE_ARQUIVO:(state, arquivo) => {
		// 	// console.log('UPDATE_ARQUIVO')
		// 	arquivo.idEtapa = parseInt(arquivo.idEtapa)
		// 	arquivo.idArquivo = parseInt(arquivo.idArquivo)
		// 	arquivo.idUrl = parseInt(arquivo.idUrl)
			
		// 	const etapa = state.projeto.etapas.find(etapa => etapa.id === arquivo.idEtapa)
		// 	console.log(arquivo.idArquivo)
		// 	console.log(etapa.arquivos.map(index => index.id))
		// }
	},
	actions: {
		fetchProjetos: state =>{
			state.commit('SET_FECHING_STATUS', true)
			api.get('projetos')
				.then(response => { state.commit('SET_PROJETOS', response)})
				.catch(error => { state.commit('SET_ERROR', error)})
				.then(() => {state.commit('SET_FECHING_STATUS', false)
				}
			)
		},
		fetchInfoProjeto: (state, id) => {
			state.commit('SET_FECHING_STATUS', true)
			api.get('projetos/' + id)
				.then(response => { state.commit('SET_INFO_PROJETO', response)})
				.catch(error => { state.commit('SET_ERROR', error) })
				.then(() => { state.commit('SET_FECHING_STATUS', false)}
			)
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
			api.put('/projetos/' + state.projeto.id , { nome: state.projeto.nome })
				.then(response => {
					dispatch('etapas/putEtapas')
					// console.log(response)
					// commit('etapas/SET_STATUS_NOME_PROJETO', true)
				})
				.catch(error => console.log(error))
				.then(() => { 
					commit('SET_FECHING_STATUS', false)
					// commit('etapas/SET_STATUS_NOME_PROJETO', false)
				})
		},
	}
})
export default store