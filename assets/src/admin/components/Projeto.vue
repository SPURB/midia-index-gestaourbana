<template>
	<div class="app-projeto">
		<h1>Arquivos GU</h1>
		<section class="cabecalho">
			<p>A partir desta tela, você consegue acessar e editar as informações dos arquivos de cada projeto.</p>
			<p>Cada linha corresponde a um arquivo com formatos variados (PDF, DOC, KMZ...).</p>
		</section>
		<section v-for="projeto in props.projetos" v-if="projeto.id == 6" class="projeto">
			<div class="nome">
				<h2>{{ projeto.nome }}</h2>
				<div class="shortcode_expand">
					<span>Shortcode do projeto <code>[tabel id=1/]</code></span>
				</div>
			</div>
			<input type="text" class="busca-arquivos" placeholder="Pesquisar arquivos">
			<Etapa v-for="etapa in etapasInput" :key="etapa.id" :props="props">
				<template slot="nomeEtapa">{{ etapa.nome }}</template>
			</Etapa>
			<button class="adicionarEtapa" @click="insereEtapa">+ Adicionar etapa</button>
		</section>
		<section class="acoes">
			<button>Cancelar</button>
			<button>Salvar</button>
		</section>
		<div class="luz" :class="{ apagada: apagaLuz }"></div>
		<!-- <Modal class="atencao">
			<template slot="header">Campos não preenchidos</template>
			<template slot="msg">Por favor, preencha todos os campos.</template>
		</Modal> -->
	</div>
</template>

<script>
import Etapa from '../components/Etapa.vue'
import Modal from '../components/Modal.vue'

export default {
	name: 'Projeto',
	props: [ 'props' ],
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
		apagaLuz() {
			return this.$store.state.apagaLuz
		}
	},
	components: {
		Etapa, Modal
	},
	mounted() {},
	updated() {},
	methods: {
		insereEtapa() {
			this.etapasInput.push({ index: this.etapaCounter })
			this.etapaCounter++
		},
		luzToggle() {
			this.$store.commit('luzToggle')
		}
	}
}
</script>

<style lang="scss">
div.app-projeto {
overflow: hidden;
h1 { font-weight: bold; }
section:not(.projeto) { margin: 2rem 0; p { color: #898989; } }
code { color: initial; background-color: rgba(0, 0, 0, .12); }
button, input, textarea { margin: 0; font-family: inherit; }

	section.projeto {
		h2, h3, h4, h5, h6 { margin: 0; }

		background-color: #FFF;
		padding: 8px 12px 12px 12px;
		border: 1px solid #DDD;
		box-shadow: 0 4px 4px rgba(0, 0, 0, .12);
		box-sizing: border-box;
		max-width: 1000px;

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
			margin: 8px 0 0 0;
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
		width: 100%;
		padding: 0 1rem;
		height: 40px;
		background: transparent;
		border: 1px dashed #BBB;
		border-radius: 20px;
		color: #BBB;
		cursor: pointer;
		transition: all .2s;

		&:hover {
			border: 1px solid #5b9dd9;
			color: #5b9dd9;
			box-shadow: 0 0 2px rgba(30,140,190,.8);
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
			position: relative;
			overflow: hidden;
			&::before {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 20px;
				display: block;
				background: transparent;
				content: '';
				transition: all ease-out .4s;
			}
			&:first-child { float: left; background-color: #FE4C4C; }
			&:last-child { float: right; background-color: #219653; }
			&.clicked::before {
				margin-left: 100%;
				background: rgba(255, 255, 255, .4);
			}
			&.disabled {
				opacity: .4;
				-moz-user-select: none;
				user-select: none;
				cursor: not-allowed;
			}
		}
	}

	div.luz {
		position: absolute;
		top: 0;
		left: -20px;
		width: calc(100% + 20px);
		height: 100vh;
		background-color: transparent;
		overflow: hidden;
		z-index: -1;
		transition: all .4s ease-in-out;
		&.apagada {
			background-color: rgba(0, 0, 0, .8);
			z-index: 1;
		}
	}
}
</style>