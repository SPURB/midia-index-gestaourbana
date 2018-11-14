<template>
	<div class="app-projeto">
		<div class="cont">
			<div class="title">
				<h3>Adicionar projeto</h3>
			</div>
			<div class="conteudo">
				<p>Criação de um projeto e suas etapas. Ao criar as etapas, elas serão numeradas em ordem crescente.</p>
				<p>Para inserir os links em um post, copie o Shortcode <code @click="copiaSlug($event)">[tabel id=&lt;<span style="color: #0073aa;">número da ID</span>&gt;/]</code> e cole no lugar desejado. Cada lista/tabela tem um único Shortcode.</p>		
				<form>
					<fieldset>
						<input type="text" id="nome" placeholder="Digite o nome do projeto">
					</fieldset>
				</form>
			</div>
			<div class="actions">
				<button class="cancelar" @click="fechaNovoProjetoBox">Cancelar</button>
				<button class="adicionar">Adicionar</button>
			</div>
		</div>
	</div>
</template>

<script>
import trataSlug from '../mixins/trataSlug'

export default {
	name: 'Projeto',
	mixins: [ trataSlug ],
	data() {
		return {};
	},
	components: {},
	methods: {
		fechaNovoProjetoBox() {
			this.$store.commit('abreAdicionarProjetoBox')
			this.$store.commit('luzToggle')
		}
	}
};
</script>

<style lang="scss" scoped>
div.app-projeto {
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
				&.adicionar { background-color: #219653; }
			}
		}
	}
}
</style>