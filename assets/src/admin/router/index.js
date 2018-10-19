import Vue from 'vue'
import Router from 'vue-router'
import Home from 'admin/components/Home.vue'
import Projeto from 'admin/components/Projeto.vue'
import AdicionarProjeto from 'admin/components/AdicionarProjeto.vue'
import Configuracoes from 'admin/components/Configuracoes.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/projeto',
			name: 'Projeto',
			component: Projeto
		},
		{
			path: '/adicionar-projeto',
			name: 'AdicionarProjeto',
			component: AdicionarProjeto
		},
		{
			path: '/configuracoes',
			name: 'Configuracoes',
			component: Configuracoes
		},
	]
})
