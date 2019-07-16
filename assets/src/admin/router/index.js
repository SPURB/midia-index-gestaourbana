import Vue from 'vue'
import Router from 'vue-router'
import Home from 'admin/components/Home.vue'
import Projeto from 'admin/components/Projeto.vue'
// import AdicionarProjeto from 'admin/components/AdicionarProjeto.vue'

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

// export default router