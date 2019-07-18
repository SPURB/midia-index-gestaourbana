import wpApi from '../../utils/apiWordpress.js'

const state = {
	names: {}, // { id: name, slug, avatars } from wordpress database
	errors: [],
	error: false

}

const getters = {
	userSettings: () => userSettings, // logged user info from wordpress default
	userUniqueIds: (state, getters, rootState) => {
		const ids = rootState.projetos.map(projeto => projeto.wordpressUserId)
		return [...new Set(ids)]
	}
}

const actions = {
	getNames: ({ state, commit, getters }) => {
		getters.userUniqueIds.forEach( id => {
			wpApi.get(`/users/${id}`)
				.then( res => {
					console.log(res)
					let output = {
						id: id,
						name: res.data.name,
						slug: res.data.slug,
						avatars: res.data.avatar_urls
					}
					commit('SET_USER_NAME', output)
				})
				.catch( error => commit('FETCH_STATUS', error))
		})
	}
}

const mutations = {
	SET_USER_NAME: (state, user ) => state.names[user.id] = { name: user.name, slug: user.slug, avatars: user.avatars },
	FETCH_ERROR_STATUS: (state, error) => {
		state.errors.push(error)
		state.error = true
	}

}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}