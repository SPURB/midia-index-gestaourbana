<template>
	<div class="AdicionarProjeto add-form">
		<div class="cont">
			<div class="title">
				<h3>Adicionar projeto</h3>
			</div>
			<div class="conteudo">
				<p>Adicione um novo projeto. Verifique se o projeto já foi existe.</p>
				<form>
					<fieldset>
						<input
							@keyup.esc="fechaNovoProjetoBox"
							type="text" 
							id="nome" 
							ref="nome"
							placeholder="Digite o nome do projeto"
							v-model="nomeProjeto"
							/>
					</fieldset>
				</form>
				<p class="mensagem-erro" v-if="message">{{ message }}</p>
				<p class="mensagem-erro" v-if="serverError">{{ serverError }}</p>
				<ul class="lista">
					<li class="lista--item" v-for="(projeto, index) in projetosFiltrados" :key="index">{{ projeto.nome }}</li>
				</ul>
			</div>
			<div class="actions">
				<button 
					class="cancelar" 
					@click="fechaNovoProjetoBox"
					>Cancelar</button>
				<button 
					:disabled="disabled" 
					class="adicionar"
					@click="adicionarProjeto">Adicionar</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import trataSlug from '../mixins/trataSlug'

export default {
	name: 'AdicionarProjeto',
	mixins: [ trataSlug ],
	data(){
		return {
			nomeProjeto: '',
			disabled: true,
			message: false
		}
	},
	computed:{
		...mapState({
			projetos: state => state.projetos,
			isfetching: state => state.isfetching,
			serverResponse: state => state.serverResponse,
			serverError: state => state.serverError
		}),

		...mapGetters(['dataFormatada']),

		projetosFiltrados () {
			return this.projetos.filter(projeto => projeto.nome.toLowerCase().indexOf(this.nomeProjeto.toLowerCase()) >= 0)
		},

		uid(){ return parseInt(userSettings.uid) },

	},

	watch:{
		projetosFiltrados(projetos){ projetos.length ? this.disabled = true : this.disabled = false },
		isfetching(status){ status ? this.message = 'carregando' : this.message = false },
		serverResponse(val) {
			if(val){ 
				this.changeRoute()
			}
		}
	},
	mounted(){ this.setFocusToInput() },
	methods: {
		fechaNovoProjetoBox() {
			this.$store.dispatch('fetchProjetos')
			this.$store.commit('ui/ABRE_PROJETO_BOX')
			this.$store.commit('RESET_ERROR')
			this.$store.commit('ui/LUZ_TOGGLE')
		},

		adicionarProjeto(){
			this.$store.dispatch('postNovoProjeto', {
				nome: this.nomeProjeto,
				idEtapa: 0,
				piu: 0,
				ativo: 1,
				atualizacao: this.dataFormatada,
				wordpressUserId: this.uid
			})
		},

		changeRoute(){
			this.fechaNovoProjetoBox()
			this.$router.push({ path: '/projeto/' +  this.serverResponse })
		},
		setFocusToInput(){this.$refs.nome.focus()},
	}
};
</script>

<style lang="scss" scoped>
@import "../scss/ADDFORM";

</style>