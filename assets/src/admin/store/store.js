import Vue from 'vue'
import Vuex from 'vuex'
import api from '../utils/api'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		arquivos: [
			{
				"nome": "Diagnóstico",
				"id": 1,
				"id_etapa": 2,
				"atualizacao": "2018-08-21 18:37:28",
				"autor": "devspurbanismo",
				"descricao": "Minuta de consulta pública para Programa de Interesse Público",
				"posicao": 1,
			},
			{
				"nome": "Mapas",
				"id": 2,
				"id_etapa": 2,
				"atualizacao": "2018-08-21 18:37:50",
				"autor": "devspurbanismo",
				"descricao": "Mapas do Anexo I da Minuta de consulta pública",
				"posicao": 2,
			},
			{
				"nome": "Ofício",
				"id": 3,
				"id_etapa": 1,
				"atualizacao": "2018-08-21 19:11:38",
				"autor": "devspurbanismo",
				"descricao": "Pedido de instauração de Projeto de Intervenção Urbana (PIU) relativo à área do Complexo Anhembi",
				"posicao": 1,
			}
		],
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
		projetos: []
		// [
		// 	{
		// 		'nome': 'PIU Anhembi',
		// 		'id': 6,
		// 		'ativo': 1,
		// 		'autor': 'devspurbanismo',
		// 		'atualizacao': '2018-08-21 19:11:38'
		// 	},
		// 	{
		// 		'nome': 'PIU Rio Branco',
		// 		'id': 21,
		// 		'ativo': 1,
		// 		'autor': 'devspurbanismo',
		// 		'atualizacao': '2018-08-21 18:37:50'
		// 	}
		// ]
		,
		tiposDeArquivo: [
			{ 'index': 0, 'extensao': 'PDF' },
			{ 'index': 1, 'extensao': 'KMZ' },
			{ 'index': 2, 'extensao': 'KML' },
			{ 'index': 3, 'extensao': 'SHP' },
			{ 'index': 4, 'extensao': 'DOC' },
		],
		apagaLuz: false,
		editArquivoBox: false,
		adicionarArquivoBox: false,
		addEtapaBox: false,
		addProjetoBox: false,
	},
	getters: {
		wordpressUserSettings() {return userSettings}
	},
	mutations: {
		luzToggle(state) { state.apagaLuz = !state.apagaLuz },
		abreEditarArquivoBox(state) { state.editArquivoBox = !state.editArquivoBox },
		abreAdicionarArquivoBox(state) { state.adicionarArquivoBox = !state.adicionarArquivoBox },
		abreAdicionarEtapaBox(state) { state.addEtapaBox = !state.addEtapaBox },
		abreAdicionarProjetoBox(state) { state.addProjetoBox = !state.addProjetoBox },
		// arquivosArr: state => state.arquivos,
		ativoToggle(state, incomeId) {
			state.projetos.map(function(index) {
				if (index.id === incomeId) {
					index.ativo = Math.abs(index.ativo - 1)
				}
			})
		},
		SET_PROJETOS: (state, response) => {
			state.projetos = response.data
		}
	},
	actions: {
		// listaArquivos: state => {
		// 	state.commit('arquivosArr')
		// },
		FETCH_PROJETOS: state =>{
			api.get('projetos')
				.then(response => {
					state.commit('SET_PROJETOS', response)
				})
		}
	}
})

export default store