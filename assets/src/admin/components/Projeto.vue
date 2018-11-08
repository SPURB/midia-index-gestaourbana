<template>
	<div class="app-projeto">
		<h1>Arquivos GU</h1>
		<section class="cabecalho">
			<p>A partir desta tela, você consegue acessar e editar as informações dos arquivos de cada projeto.</p>
			<p>Cada linha corresponde a um arquivo com formatos variados (PDF, DOC, KMZ...).</p>
		</section>
		<section v-for="projeto in projetos" v-if="projeto.id == 6" class="projeto">
			<div class="nome">
				<h2>{{ projeto.nome }}</h2>
				<div class="shortcode_expand">
					<span>Shortcode do projeto <code @click="copiaSlug($event)">[tabel id=1/]</code></span>
				</div>
			</div>
			<input type="text" class="busca-arquivos" placeholder="Pesquisar arquivos...">
			<Etapa v-for="etapa in etapasInput" :key="etapa.id">
				<template slot="nomeEtapa">(Nome da etapa aqui)</template>
			</Etapa>
			<button class="adicionarEtapa" @click="insereEtapa()">+ Adicionar etapa</button>
		</section>
		<section class="acoes">
			<button>Cancelar</button>
			<button>Salvar</button>
		</section>
		<!-- <Modal class="erro">
			<template slot="header">Campos não preenchidos</template>
			<template slot="msg">Por favor, preencha todos os campos.</template>
		</Modal> -->
		<AdicionarEtapa v-if="abreAdicionarEtapa"></AdicionarEtapa>
	</div>
</template>

<script>
import Etapa from '../components/Etapa.vue'
import AdicionarEtapa from '../components/AdicionarEtapa.vue'
import Modal from '../components/Modal.vue'

export default {
	name: 'Projeto',
	data() {
		return {
			etapasInput: [
				{ index: 0 }
			],
			etapaCounter: 1,
			etapas: [],
			nProjetos: []
		};
	},
	computed: {
		projetos() {
			return this.$store.state.projetos
		},
		abreAdicionarEtapa() {
			return this.$store.state.addEtapaBox
		}
	},
	components: {
		Etapa, AdicionarEtapa, Modal
	},
	// mounted() {
	// 	this.$store.dispatch('listaArquivos')
	// },
	updated() {},
	methods: {
		insereEtapa() {
			this.$store.commit('abreAdicionarEtapaBox')
			this.$store.commit('luzToggle')
		},
		copiaSlug(evt) {
			navigator.clipboard.writeText(evt.target.innerText)
		},
	}
}
</script>

<style lang="scss">
div.app-projeto {
	overflow: hidden;

	section:not(.projeto) { margin: 2rem 0; p { color: #898989; } }

	section.projeto {
		h2, h3, h4, h5, h6 { margin: 0; }

		background-color: #FFF;
		padding: 8px 12px 12px 12px;
		border: 1px solid #DDD;
		box-shadow: 0 4px 4px rgba(0, 0, 0, .12);
		box-sizing: border-box;

		div.nome {
			height: 40px;
			h2 {
				display: inline-block;
				font-size: x-large;
				line-height: 40px;
			}
			& > div.shortcode_expand {
				display: inline-flex;
				align-items: center;
				height: 100%;
				float: right;
				span { color: #898989; }
			}
		}

		input.busca-arquivos {
			margin: 8px 0 0 0 !important;
			padding: 0 12px 1px 12px;
			width: 100%;
			height: 36px;
			border-radius: 18px;
			box-shadow: none;
			border: 1px solid #DDD;
		}
	}

	button.adicionarEtapa {
		margin: 12px 0 0 0 !important;
		display: block;
		padding: 0 4rem;
		height: 40px;
		background: #0073aa;
		border-radius: 20px;
		border-width: 0;
		color: #FFF;
		cursor: pointer;
		position: relative;

		&:active::after {
			content: '';
			display: inline-block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border-radius: 20px;
			background: rgba(0, 0, 0, .4);
		}
	}

	section.acoes {
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
			position: relative;
			overflow: hidden;

			&:first-child { float: left; background-color: #FE4C4C; }
			&:last-child { float: right; background-color: #219653; }

			&.disabled {
				opacity: .4;
				-moz-user-select: none;
				user-select: none;
				cursor: not-allowed;
			}
		}
	}
}
</style>