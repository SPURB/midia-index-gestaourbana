<template>
	<div class="Projeto">
		<h1>Arquivos GU</h1>
		<section class="cabecalho">
			<p>A partir desta tela, você consegue acessar e editar as informações dos arquivos de cada projeto.</p>
			<p>Cada linha corresponde a um arquivo com formatos variados (PDF, DOC, KMZ...).</p>
		</section>
		<section class="projeto">
			<div class="nome">
				<h2>{{ projeto.nome }}</h2>
				<div class="shortcode_expand">
					<span>Shortcode do projeto <code @click="copiaSlug($event)">[arquivos-gu-{{projeto.id}}]</code></span>
				</div>
			</div>
			<input type="text" class="busca-arquivos" placeholder="Pesquisar arquivos..." v-model="busca">
			<template v-for="etapa in projeto.etapas">
				<Etapa 
					:idEtapa="etapa.id" 
					:idProjeto="projeto.id"
					:busca="busca"
					>
				</Etapa>
			</template>
			<button class="adicionarEtapa" @click="insereEtapa()">+ Adicionar etapa</button>
		</section>

<!-- 		<section class="acoes">
			<router-link to='/' tag='a'>Cancelar</router-link>
			<a>Salvar</a>
		</section> -->

		<section class="acoes">
			<SalvarCancelar 
				:tipo="'cancelar'"
				:texto="'Cancelar'"
				:disabledState="false"
				:commitName="'RESET_PROJETO'">
			</SalvarCancelar>
			<SalvarCancelar 
				:tipo="'salvar'"
				:texto="'Salvar'"
				:disabledState="false"
				:actionName="{
					name: 'putProjeto',
					parameter: {}
				}">
			</SalvarCancelar>
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
import SalvarCancelar from '../components/SalvarCancelar.vue'
import trataSlug from '../mixins/trataSlug'

export default {
	name: 'Projeto',
	mixins:[ trataSlug ],
	data() {
		return {
			busca: ''
		};
	},
	computed: {
		projeto: {
			get(){ return this.$store.state.projeto }
			// , set(){ ... }
		},
		abreAdicionarEtapa: {
			get() { return this.$store.state.addEtapaBox },
			// , set(){ ... }
		}
	},
	components: {
		Etapa,
		AdicionarEtapa,
		Modal,
		SalvarCancelar
	},
	methods: {
		insereEtapa() {
			this.$store.commit('abreAdicionarEtapaBox')
			this.$store.commit('luzToggle')
		}
	}
}
</script>

<style lang="scss" scoped>
div.Projeto {
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
}
</style>