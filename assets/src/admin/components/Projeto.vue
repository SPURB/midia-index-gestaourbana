<template>
	<div class="Projeto">
		<h1>Arquivos GU</h1>
		<section class="cabecalho">
			<p>A partir desta tela, você consegue acessar e editar as informações dos arquivos de cada projeto.</p>
			<p>Cada linha corresponde a um arquivo com formatos variados (PDF, DOC, KMZ...).</p>
		</section>
		<section class="projeto">
			<div class="nome">
				<input 
					:class="{ invalid: errors.first('nome') }"
					type="text" 
					name="nome"
					v-model='projetoNome'
					v-validate="'required'">
					<ErroSpan 
						:display="errors.first('nome')!==undefined">{{ errors.first('nome') }}</ErroSpan>
				<div class="shortcode_expand">
					<span>Shortcode do projeto <code @click="copiaSlug($event)">[arquivos-gu-{{projeto.id}}]</code></span>
				</div>
			</div>
			<input type="text" class="busca-arquivos" placeholder="Pesquisar arquivos..." v-model="busca">
			<template v-for="etapa in projeto.etapas">
				<Etapa 
					:idEtapa="etapa.id" 
					:idProjeto="projeto.id"
					:busca="busca">
				</Etapa>
			</template>
			<button class="adicionarEtapa" @click="insereEtapa()">+ Adicionar etapa</button>
		</section>

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
				:disabledState="statusBotao"
				:action="action">
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
import ErroSpan from '../components/ErroSpan.vue'
import trataSlug from '../mixins/trataSlug'
import { ptBr, validator } from '../mixins/formValidation'

export default {
	name: 'Projeto',
	mixins:[ trataSlug, validator ],
	data() {
		return {
			busca: '', 
			action: {
				name: 'putProjeto',
				toChange: {
					nome: false,
					etapas:[]
				} 
			}
		};
	},
	computed: {
		projeto() { 
			return {
				id: this.$store.state.projeto.id,
				etapas: this.$store.state.projeto.etapas
			}
		},
		projetoNome: { 
			get(){ return this.$store.state.projeto.nome },
			set(value) { this.$store.commit('UPDATE_PROJETO_NOME',  value )}
		},
		abreAdicionarEtapa(){ return this.$store.state.etapas.addEtapaBox },
		newEtapa(){ return this.$store.state.etapas.idEtapa }
	},
	watch: {
		newEtapa(value){ 
			if(value !== undefined){ this.$store.dispatch('etapas/getNovaEtapa', value)}
		}
	},
	components: {
		Etapa,
		AdicionarEtapa,
		Modal,
		SalvarCancelar,
		ErroSpan
	},

	methods: {
		insereEtapa() {
			this.$store.commit('etapas/DISPLAY', true)
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
			margin: .8em 0 1em;
				input {
				padding-left: .5em;
				display: inline-block;
				font-size: x-large;
				line-height: 40px;
				border: 1px solid #fff;
				background-color: rgba(0,0,0,.1);
				font-weight: 600;
				border-radius: 10px;
				transition: all ease-in-out .15s;
				&:hover{
					border: 1px solid  #ddd;
					color:#000;
					background-color: #fff;
					cursor: pointer;
				}
				&:focus{
					color:#000;
					background-color: #fff;
					border: 1px solid  #ddd
				}
				&.invalid{
					border: 1px solid  #fe4c4c;
					background-color:#fff;
					box-shadow:  1px 1px 2px 2px #ddd;
				}
			}
			& > div.shortcode_expand {
				display: inline-flex;
				align-items: center;
				height: 100%;
				float: right;
				span { color: #515151; }
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