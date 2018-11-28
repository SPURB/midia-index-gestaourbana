import Vue from 'vue'
import Vuex from 'vuex'
import api from '../utils/api'
// import apiFake from '../utils/apiFake'

Vue.use(Vuex)

let store = new Vuex.Store({
	state: {
		projeto: false,
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
		serverResponse: false
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
		SET_PROJETOS: (state, response) => { 
			state.projetos = response.data.map(index => {
				index.id = parseInt(index.id)
				index.ativo = parseInt(index.ativo)
				index.wordpress_user_id = parseInt(index.wordpress_user_id)
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
					for (let key in etapa.arquivos) {
						etapa.arquivos[key].id = parseInt(etapa.arquivos[key].id)
						etapa.arquivos[key].idEtapa = parseInt(etapa.arquivos[key].idEtapa)
						etapa.arquivos[key].posicao = parseInt(etapa.arquivos[key].posicao)
					}
					return etapa.arquivos
				}
				etapa.arquivos = arquivos()
				return etapa
			})
			state.projeto = projeto
		},
		SET_PROJETO: (state, res, status) => {
			/* 
			alterar action -> POST PROJETO
			*/
			console.log(res)
			'error' ? state.serverResponse = res.response.data : state.serverResponse = false
		},
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
			api.get('projetos')
				.then(response => {
					state.commit('SET_PROJETOS', response)
				})
				.catch(error => { 
					console.log(error)
				})
				.then(() => {
				}
			)
		},
		fetchInfoProjeto: (state, id) => {
			api.get('projetos/'+id)
			// apiFake.get('?data=projeto/'+id)
				.then(response => {
					state.commit('SET_INFO_PROJETO', response)
				})
				.catch(error => { 
					console.log(error)
				})
				.then(() => {
				}
			)
		},
		postNovoProjeto: ( state, projeto, status ) => {
			// state.commit('SET_PROJETO', obj)

			api.post('/projetos', projeto)
				.then(response => {
					console.log(response)
					state.commit('SET_PROJETO', response)
				})
				.catch(error => {
					state.commit('SET_PROJETO', error, 'error')
				})
				.then(() => {
				}
			)
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