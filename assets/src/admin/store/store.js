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
		wordpressUserSettings() { return userSettings }
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
		}
	},
	actions: {
		FETCH_PROJETOS: state =>{
//			api.get('projetos')
			apiFake.get('?data=projetos')
				.then(response => {
					state.commit('SET_PROJETOS', response)
				}
			)
		},
		FETCH_INFO_PROJETO: (state, id) => {
//			api.get('projeto/'+id)
			apiFake.get('?data=projeto/'+id)
				.then(response => {
					state.commit('SET_INFO_PROJETO', response)
				}
			)
		}
	}
})

export default store