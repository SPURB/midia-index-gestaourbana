import Vue from 'vue'
import Router from 'vue-router'
import Home from 'admin/views/Home.vue'
import Projeto from 'admin/views/Projeto.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/projeto/:id',
			name: 'Projeto',
			component: Projeto
		},
	]
})
