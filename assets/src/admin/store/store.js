import Vue from 'vue'
import Vuex from 'vuex'
import ui from './modulos/ui'
import api from '../utils/api'

import apiAdmin from '../utils/apiAdmin'

import etapas from './modulos/etapas'
import subetapas from './modulos/subetapas'
import arquivos from './modulos/arquivos'
import urls from './modulos/urls'
import infoProjeto from './modulos/infoProjeto'
import statusProjetos from './modulos/statusProjetos'
import wordpress from './modulos/wordpress'

Vue.use(Vuex)

let store = new Vuex.Store({
	strict: true,
	modules:{
		ui,
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
		projetos: [],
		serverResponse: false,
		serverError: false,
		fetching: false
	},
	getters: {
		projetosAlterados(state) {
			let status = false
			state.projetos.forEach(projeto => projeto.alterado ? status = true : status = status)
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
		ATIVA_TOGGLER(state, incomeId) {
			state.projetos.map(index => {
				if (index.id === incomeId) {
					index.ativo = Math.abs(index.ativo - 1)
					index.alterado = !index.alterado
				}
			})
		},
		SET_ERROR: (state, error) => { state.serverError = error.response.data },
		RESET_ERROR: state => { state.serverError = false },
		SET_FECHING_STATUS: (state, status) => { state.fetching = status },
		RESET_PROJETOS: (state) => { 
			state.projetos.map(function(index) {
				if(index.alterado){
					index.alterado = !index.alterado
					index.ativo = !index.ativo
				}
			})
		},
		RESET_RESPONSES: state =>{
			state.serverResponse = false
			state.serverError = false
		},
		RESET_PROJETOS_AFTER_UPDATE: (state, status) => {
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
		UPDATE_PROJETO_NOME: (state, projetoAlterado ) => {  state.projeto.nome = projetoAlterado },
		UPDATE_ARQUIVOS: (state, arquivo) => { 
			const index = state.projeto.etapas.findIndex(i => i.id === arquivo.idEtapa )
			arquivo.itemNovo = true
			state.projeto.etapas[index].arquivos.push(arquivo)
		}
	},
	actions: {
		fetchProjetos: ({ dispatch, state, commit }) => {
			commit('SET_FECHING_STATUS', true)
			api.get('projetos')
				.then(response => commit('SET_PROJETOS', response))
				.catch(error => { 
					commit('SET_ERROR', error) 
					api.get('projetos')
					.then(res => res)
					.catch(err => err)
				})
				.then(() => commit('SET_FECHING_STATUS', false))
				.finally (() => dispatch('wordpress/getNames'))
		},
		fetchInfoProjeto: ( state, id ) => {
			if(parseInt(id)) {
				state.commit('SET_FECHING_STATUS', true)
				api.get('projetos/' + id)
					.then(response => state.commit('SET_INFO_PROJETO', response))
					.catch(error => state.commit('SET_ERROR', error))
					.then(() => state.commit('SET_FECHING_STATUS', false))
			}
		},
		postNovoProjeto: (state, projeto ) => {
			state.commit('SET_FECHING_STATUS', true)
			apiAdmin.post('/projetos', projeto)
				.then(response => state.commit('SET_PROJETO', response))
				.catch(error => state.commit('SET_ERROR', error))
				.then(() => state.commit('SET_FECHING_STATUS', false)
			)
		},
		putProjeto: ( { dispatch, state, commit } ) => {
			commit('SET_FECHING_STATUS', false)
			apiAdmin.put('/projetos/' + state.projeto.id, { nome: state.projeto.nome })
				.then(response => {
					dispatch('etapas/putEtapas')
					commit('SET_PROJETO', response)
				})
				.catch(error => commit('SET_ERROR', error))
				.then(() => commit('SET_FECHING_STATUS', false))
		}
	}
})
export default store