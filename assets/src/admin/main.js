import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VeeValidate from 'vee-validate';
import menuFix from './utils/admin-menu-fix'

Vue.config.productionTip = false
Vue.use(VeeValidate, { inject: false });

/* eslint-disable no-new */
new Vue({
	el: '#gu-index-admin',
	router,
	store,
	render: h => h(App)
});


// fix the admin menu for the slug "gu-index-admin"
menuFix('gu-index-admin');