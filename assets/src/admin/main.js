import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store/store'
import menuFix from './utils/admin-menu-fix'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#gu-index-admin',
	router,
	store,
	render: h => h(App)
});


// fix the admin menu for the slug "vue-app"
menuFix('gu-index-admin');