<template>
	<div class="app-projeto">
		<h1>Adicionar Projeto</h1>
		<section class="cabecalho">
			<p>Criação de um projeto e suas etapas. Ao criar as etapas, elas serão numeradas em ordem crescente.</p>
			<p>Para inserir os links em um post, copie o Shortcode <code>[tabel id=&lt;<span style="color: #0073aa;">número da ID</span>&gt;/]</code> e cole no lugar desejado. Cada lista/tabela tem um único Shortcode.</p>
		</section>
		<section class="form">			
			<form>
				<fieldset>
					<input type="text" id="nome" placeholder="Digite o nome do projeto">
				</fieldset>
			</form>
		</section>
		<section class="acoes">
			<button>Cancelar</button>
			<button>Adicionar</button>
		</section>
	</div>
</template>

<script>
export default {
	name: 'Projeto',
	data() {
		return {};
	},
	components: {},
	methods: {}
};
</script>

<style lang="scss" scoped>
div.app-projeto {
h1 { font-weight: bold; }
section:not(.projeto) { margin: 2rem 0; p { color: #898989; } }
code { color: initial; }
button, input, textarea { margin: 0; font-family: inherit; }

	section.form {
		form {
			margin: 0;
			input[type=text] {
				display: block;
				width: 100%;
				max-width: 1000px;
				padding: 20px;
			}
		}
	}

	section.acoes {
		max-width: 1000px;
		width: 100%;
		button {
			margin: 0;
			font-family: inherit;
			font-size: large;
			border: 0;
			padding: 20px 32px;
			border-radius: 2px;
			cursor: pointer;
			color: #FFF;
			box-shadow: inset 0 -2px 2px rgba(0, 0, 0, .24);
			&:first-child { float: left; background-color: #FE4C4C; }
			&:last-child { float: right; background-color: #219653; }
		}
	}
}
</style>