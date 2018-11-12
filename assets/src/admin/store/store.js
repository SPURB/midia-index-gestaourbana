import Vue from 'vue'
import Vuex from 'vuex'
// import api from '../utils/api'
import apiFake from '../utils/apiFake'

Vue.use(Vuex)

let store = new Vuex.Store({
	state: {
		projeto: {},
		urls: [
			{
				"id": 1,
				"id_arquivo": 1,
				"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_V03.pdf",
				"extensao": "pdf"
			},
			{
				"id": 2,
				"id_arquivo": 2,
				"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_V03.pdf",
				"extensao": "pdf"
			},
			{
				"id": 3,
				"id_arquivo": 3,
				"url": "http://gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/piu-monitoramento/ANH1_Oficio.pdf",
				"extensao": "pdf"
			},
		],
		projetos: [],
		tiposDeArquivo: [
			{ 'index': 0, 'extensao': 'PDF' },
			{ 'index': 1, 'extensao': 'KMZ' },
			{ 'index': 2, 'extensao': 'KML' },
			{ 'index': 3, 'extensao': 'SHP' },
			{ 'index': 4, 'extensao': 'DOC' }
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
		SET_PROJETOS: (state, response) => {
			state.projetos = response.data
		},
		SET_INFO_PROJETO: (state, response) => {
			state.projeto = response.data
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