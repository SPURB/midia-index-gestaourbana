import Vue from 'vue'
import Vuex from 'vuex'
// import api from '../utils/api'
import apiFake from '../utils/apiFake'

Vue.use(Vuex)

let store = new Vuex.Store({
	state: {
		projeto: {},
		arquivoClicado: undefined,
		projetos: [],
		tiposDeArquivo: [
			'PDF', 
			'KML',
			'SHP',
			'DOC',
			'XLS'
		],
		apagaLuz: false,
		editArquivoBox: false,
		adicionarArquivoBox: false,
		addEtapaBox: false,
		addProjetoBox: false,
	},
	getters: {
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
		luzToggle(state) { state.apagaLuz = !state.apagaLuz },
		abreEditarArquivoBox(state) { state.editArquivoBox = !state.editArquivoBox },
		abreAdicionarArquivoBox(state) { state.adicionarArquivoBox = !state.adicionarArquivoBox },
		abreAdicionarEtapaBox(state) { state.addEtapaBox = !state.addEtapaBox },
		abreAdicionarProjetoBox(state) { state.addProjetoBox = !state.addProjetoBox },
		ativoToggle(state, incomeId) {
			state.projetos.map(function(index) {
				if (index.id === incomeId) {
					index.ativo = Math.abs(index.ativo - 1)
				}
			})
		},
		SET_PROJETOS: (state, response) => { state.projetos = response.data },
		SET_INFO_PROJETO: (state, response) => { state.projeto = response.data },
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
		SET_ARQUIVO_EXTENSION: (state, obj) =>{
			const indexUrl = state.arquivoClicado.urls.findIndex(i => parseInt(i.id) === parseInt(obj.idUrl) )
			state.arquivoClicado.urls[indexUrl].extensao = obj.extensao
		},
		SET_PROJETO: (state, obj) => {
			/* 
			alterar action -> POST PROJETO, se 200 state.projetos.push(response)
			este push(obj). Este 'obj' deve ser o 'response' do POST
			*/
			console.log(obj)
		},
		SET_NOVA_ETAPA: (state, nome) => {
			/* 
			alterar action -> POST ETAPA
			*/
			console.log('idProjeto: ' + state.projeto.id)
			console.log(nome)
		},
		UPDATE_ETAPA_NOME: (state, objIndexEtapaNome) => {
			state.projeto.etapas[objIndexEtapaNome.indexEtapa].nome = objIndexEtapaNome.nome
		},
		UPDATE_ARQUIVO_CLICADO:(state, arquivo) => { state.arquivoClicado = arquivo }
	},
	actions: {
		fetchProjetos: state =>{
//			api.get('projetos')
			apiFake.get('?data=projetos')
				.then(response => {
					state.commit('SET_PROJETOS', response)
				})
				.catch(error => { 
					console.log(error)
				})
				.then(() => {
					// fim de fetch 
				}
			)
		},
		fetchInfoProjeto: (state, id) => {
//			api.get('projeto/'+id)
			apiFake.get('?data=projeto/'+id)
				.then(response => {
					state.commit('SET_INFO_PROJETO', response)
				})
				.catch(error => { 
					console.log(error)
				})
				.then(() => {
					// fim de fetch 
				}
			)
		},
		postNovoProjeto: ( state, obj ) => {
			state.commit('SET_PROJETO', obj)
			// api.post(obj)
			// 	.then(response => {
			// 		state.commit('SET_PROJETO', response)
			// 	})
			// 	.catch(error => {
			// 		console.log(error)
			// 	})
			// 	.then(() => {
			// 		// fim de fetch
			// 	}
			// )
		},
		postNovaEtapa: ( state, nome ) =>{
			state.commit('SET_NOVA_ETAPA', nome)
			// api.post(nome)
			// 	.then(response => {
			// 		state.commit('SET_NOVA_ETAPA', response)
			// 	})
			// 	.catch(error => {
			// 		console.log(error)
			// 	})
			// 	.then(() => {
			// 		// fim de fetch
			// 	}
			// )
		}
	}
})

export default store