<template>
	<div class="AdicionarProjeto">
		<div class="cont">
			<div class="title">
				<h3>Adicionar projeto</h3>
			</div>
			<div class="conteudo">
				<p>Criação de um projeto e suas etapas. Ao criar as etapas, elas serão numeradas em ordem crescente.</p>
				<p>Para inserir os links em um post, copie o Shortcode <code @click="copiaSlug($event)">[table id=&lt;<span style="color: #0073aa;">número da ID</span>&gt;/]</code> e cole no lugar desejado. Cada lista/tabela tem um único Shortcode.</p>		
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
import trataSlug from '../mixins/trataSlug'

export default {
	name: 'Projeto',
	mixins: [ trataSlug ],
	data(){
		return {
			nomeProjeto: '',
			disabled: true,
			message: false
		}
	},
	computed:{
		projetosNomes: {
			get(){ 
				return this.$store.state.projetos.map(index => index.nome.toLowerCase() )
			}
		},
		uid(){ return this.$store.getters.wordpressUserSettings.uid },
		isfetching(){ return this.$store.state.fetching },
		serverResponse(){ return this.$store.state.serverResponse },
		serverError(){	return this.$store.state.serverError },
	},
	watch:{
		isfetching(status){ status ? this.message = 'carregando' : this.message = false },
		nomeProjeto(nome){
			const nomeCaixaBaixa = nome.toLowerCase()
			const nomeIgual = this.projetosNomes.find(function(index) { return index == nomeCaixaBaixa })
			if (nomeIgual === undefined){
				this.message = false
				this.disabled = false 
			}
			else { 
				this.message = 'O projeto "' + nome + '" já existe. Escolha outro nome.';
				this.disabled = true 
			}
		},
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
			this.$store.commit('ABRE_PROJETO_BOX')
			this.$store.commit('LUZ_TOGGLE')
		},
		adicionarProjeto(){ 
			this.$store.dispatch('postNovoProjeto', {
				nome: this.nomeProjeto,
				ativo: 1,
				wordpress_user_id: this.uid
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
div.AdicionarProjeto {
	position: absolute;
	top: 0;
	left: -20px;
	width: calc(100% + 20px);
	height: calc(100vh - 32px);
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	transition: height ease-out .4s;

	&.fechado {
		height: 0;

		& > div.cont {
			transform: translateY(-80vh);
		}
	}

	div.cont {
		width: 720px;
		background-color: #FFF;
		border-radius: 4px;
		box-shadow: 0 4px 4px rgba(0, 0, 0, .48);
		z-index: 2;
		transform: translateY(0);
		animation: addProj ease-in .4s;
		transition: transform ease-out .4s;

		@keyframes addProj {
			from { transform: translateY(-80vh); }
			to { transform: translateY(0); }
		}

		div.title {
			background-color: #0073aa;
			position: relative;
			padding: 0 12px;
			border-radius: 2px 2px 0 0;

			h3 {
				line-height: 40px;
				margin: 0;
				color: #FFF;
			}
		}

		div.conteudo {
			padding: 0 24px;
			input[type=text] {
				width: 100%;
				height: 40px;
				border-radius: 20px;
				padding: 0 12px;
			}
			p.mensagem-erro{
				background-color: #fe4c4c;
				padding: .5em;
				border-radius: 5px;
				color: #fff;
			}
		}

		div.actions {
			padding: 24px;
			display: flex;
			justify-content: space-between;

			button {
				border-width: 0;
				color: #FFF;
				padding: 16px 24px;
				border-radius: 2px;
				box-shadow: inset 0 -2px 2px rgba(0, 0, 0, .24);
				cursor: pointer;

				&.cancelar { background-color: #fe4c4c; }
				&.adicionar { 
					background-color: #219653; 
					&:disabled{ 
						background-color: #ececec;
						color: #bdbdbd;
						box-shadow: inset 0 -2px 2px rgba(222, 221, 221, 0.2)
					}
				}
			}
		}
	}
}
</style>