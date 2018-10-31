import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		arquivos: [
			{
				"id": 1,
				"nome": "Diagnóstico",
				"descricao": "Minuta de consulta pública para Programa de Interesse Público",
				"autoria": "devspurbanismo",
				"inclusao": "2018-08-21 18:37:28",
				"projetoId": 21,
				"projetoEtapa": 2,
				"etapaIndex": 1,
				destino: [
					{
						"urlid": 1,
						"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_V03.pdf",
						"extensao": "pdf"
					}
				]
			},
			{
				"id": 2,
				"nome": "Mapas",
				"descricao": "Mapas do Anexo I da Minuta de consulta pública",
				"autoria": "devspurbanismo",
				"inclusao": "2018-08-21 18:37:50",
				"projetoId": 21,
				"projetoEtapa": 2,
				"etapaIndex": 2,
				destino: [
					{
						"urlid": 1,
						"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_V03.pdf",
						"extensao": "pdf"
					}
				]
			},
			{
				"id": 3,
				"nome": "Ofício",
				"descricao": "Pedido de instauração de Projeto de Intervenção Urbana (PIU) relativo à área do Complexo Anhembi",
				"inclusao": "2018-08-21 19:11:38",
				"projetoId": 6,
				"projetoEtapa": 1,
				"etapaIndex": 1,
				destino: [
					{
						"urlid": 1,
						"url": "http://gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/piu-monitoramento/ANH1_Oficio.pdf",
						"extensao": "pdf"
					}
				]
			}
		],
		projetos: [
			{ 'id': 6, 'nome': 'PIU Anhembi', 'ultimaMod': '2018-08-21 19:11:38', 'autoria': 'devspurbanismo', 'status': 1 },
			{ 'id': 21, 'nome': 'PIU Rio Branco', 'ultimaMod': '2018-08-21 18:37:50', 'autoria': 'devspurbanismo', 'status': 1 }
		],
		apagaLuz: false,
	},
	getters: {},
	mutations: {
		luzToggle(state) {
			state.apagaLuz = !state.apagaLuz
		}
	},
	actions: {}
})