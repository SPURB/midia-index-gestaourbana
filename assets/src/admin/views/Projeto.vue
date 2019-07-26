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
					<ErroSpan v-if="errors.first('nome')!==undefined">{{ errors.first('nome') }}</ErroSpan>
				<div class="shortcode_expand">
					<span>Shortcode do projeto <code @click="copiaSlug($event)">[arquivos-gu-{{projeto.id}}]</code></span>
				</div>
			</div>
			<input type="text" class="busca-arquivos" placeholder="Pesquisar arquivos..." v-model="busca">
			<template v-for="(etapa, index) in etapasFiltradas">
				<Etapa
					v-if="etapasFiltradas && projeto.id"
					:key="index"
					:idEtapa="etapa.id"
					:idProjeto="projeto.id"
					:busca="busca">
				</Etapa>
			</template>
			<button class="adicionarEtapa" @click="insereEtapa">+ Adicionar etapa</button>
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

		<Modal class="erro" v-if='errorEtapas'>
			<template slot="header">Erro ao alterar etapas!</template>
			<template slot="msg">{{ errorEtapasMessage }}</template>
		</Modal>
		<Modal class="erro" v-if="errorProjeto" >
			<template slot="header">Erro ao alterar projeto!</template>
			<template slot="msg">{{ errorProjeto.response.data }}</template>
		</Modal>
		<Modal class="erro" v-if="errorArquivos > 0" >
			<template slot="header">Erro ao alterar ordenação de arquivos!</template>
			<template slot="msg">Erro ao atualizar ordenação</template>
		</Modal>

		<Modal class="sucesso" v-if="fetchSucceded" >
			<template slot="header">Sucesso!</template>
			<template slot="msg">Projeto atualizado com sucesso.</template>
		</Modal>

		<AdicionarEtapa v-if="abreAdicionarEtapa" :projeto="projeto"></AdicionarEtapa>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { ptBr, validator } from '../mixins/formValidation'
import Etapa from '../components/Etapa.vue'
import AdicionarEtapa from '../components/AdicionarEtapa.vue'
import Modal from '../components/Modal.vue'
import SalvarCancelar from '../components/SalvarCancelar.vue'
import ErroSpan from '../components/ErroSpan.vue'
import trataSlug from '../mixins/trataSlug'

export default {
	name: 'Projeto',
	mixins:[ trataSlug, validator ],
	data() {
		return {
			busca: '', 
			action: {
				name: 'putProjeto',
				toChange: {} 
			}, 
			statusBotao: true,
			fetchError: false,
		}
	},
	computed: {
		etapasFiltradas () {
			const ids = this.arquivos.map(arquivo => arquivo.id_etapa)
			const uniqueids = [...new Set(ids)]
			return uniqueids.map(id => this.etapas.find(etapa => etapa.id === id))
		},

		...mapState({
			projeto: state => state.projeto,
			serverResponse: state => state.serverResponse,
			serverError: state => state.serverError
		}),

		...mapState('etapas', {
			etapas: state => state.etapas,
			errorEtapas: state => state.error,
			errorEtapasMessage: state => state.response,
			abreAdicionarEtapa: state => state.addEtapaBox,
			novaEtapa: state => state.idEtapa,
			etapasMutated: state => state.etapaNomeMutated,
		}),

		...mapState('arquivos', {
			errorArquivos: state => state.errors,
			novoArquivoId: state => state.response,
			arquivos: state => state.arquivos
		}),

		fetchSucceded(){
			if(	this.serverResponse !== false &&
				this.serverError === false ){
				return true
			}
			else if( this.errorEtapasMessage !== false &&
			 		 this.errorEtapas === false){
				return true
			}
			else { return false }
		},

		errorProjeto (){ return this.serverError },

		projetoNome: {
			get(){ return this.$store.state.projeto.nome },
			set(value) { this.$store.commit('UPDATE_PROJETO_NOME',  value )}
		},

		untouchedNome(){
			if(this.fields.nome){ // fazer validacao com fields.nome para habilitar botão de salvar
				return this.fields.nome.pristine ? this.fields.nome.valid : false
			}
			else { return false }
		},
	},
	watch: {
		projeto(projetoIsSet) {
			if (projetoIsSet) {
				this.getArquivos()
			}
		},
		errorEtapas(status){ if(status) this.fetchError = true },
		untouchedNome(status){ this.statusBotao = status },
		etapasMutated(status){ this.statusBotao = !status },
		novaEtapa(value){ 
			if(value !== undefined){ this.$store.dispatch('etapas/getNovaEtapa', value)}
		},
		novoArquivoId(value){
			if(value !== undefined && value){ this.$store.dispatch('arquivos/fetchNovoArquivo', { id: value }) }
		}
	},
	components: {
		Etapa,
		AdicionarEtapa,
		Modal,
		SalvarCancelar,
		ErroSpan
	},
	created () {
		this.getEtapas()
		this.setTiposDeArquivos()
		this.getSubEtapas()
	},
	methods: {
		insereEtapa() {
			this.$store.commit('etapas/DISPLAY', true)
			this.$store.commit('ui/LUZ_TOGGLE')
		},

		...mapActions('etapas', [
			'getEtapas'
		]),

		...mapActions('subetapas', [
			'getSubEtapas'
		]),

		...mapActions('arquivos', [
			'getArquivos'
		]),

		...mapActions('urls', [
			'setTiposDeArquivos'
		])
	},
}
</script>

<style lang="scss" scoped>
section.projeto {
	min-height: 50vh
}

.Projeto {
	overflow: hidden;
	section:not(.projeto) { margin: 2rem 0; p { color: #898989; } }
	section.projeto {
		h2, h3, h4, h5, h6 { margin: 0; }

		background-color: #FFF;
		padding: 8px 12px 12px 12px;
		border: 1px solid #DDD;
		box-shadow: 0 4px 4px rgba(0, 0, 0, .12);
		box-sizing: border-box;

		.nome {
			height: 40px;
			margin: .8em 0 1em;
				input {
				min-width: 50%;
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