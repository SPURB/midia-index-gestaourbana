<template>
	<div class="AdicionarEtapa add-form">
		<div class="cont">
			<div class="title">
				<h3>Adicionar etapa</h3>
			</div>
			<div class="conteudo">
				<p>Adicione ou selecione uma etapa. Verifique se a etapa já foi criada.</p>
				<form>
					<fieldset>
						<input
							ref="etapa"
							@keyup.esc="fechar"
							name="novaetapa"
							type="text"
							id="novaetapa"
							v-validate="'required|min:3'"
							placeholder="Digite o nome da etapa"
							v-model="novaEtapaInput"
						/>
					</fieldset>
				</form>
				<p class="mensagem-erro" v-if="message">{{ message }}</p>
				<p class="mensagem-erro" v-else-if="etapasError">{{ etapasError }}</p>
				<!-- <p v-else>Sucesso</p> -->
				<ul class="lista">
					<li class="lista--item" v-for="(etapa, index) in etapasFiltradas" :key="index">
						<button :class="addBotaoClass(etapa.id)" @click="seleciona(etapa)">{{ etapa.nome }}</button>
					</li>
				</ul>
			</div>
			<div class="actions">
				<button
					class="cancelar"
					@click="fechar"
					>Cancelar</button>
				<button
					:disabled="disabled"
					class="adicionar"
					@click="cria">Criar etapa</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { ptBr, validator } from '../mixins/formValidation'

export default {
	name: 'AdicionarEtapa',
	props: {
		projeto: {
			required: true,
			type: Object
		},
		etapasExistentes: {
			required: true,
			type: Array
		}
	},
	data() {
		return {
			novaEtapaInput: '',
			disabled: true,
			message: false
		}
	},
	computed: {
		...mapState('etapas', {
			etapasError: state => state.error,
			etapas: state => state.etapas,
			etapasFetching: state => state.fetching
		}),

		etapasFiltradas () {
			return this.etapas.filter(etapa =>etapa.nome.toLowerCase().indexOf(this.novaEtapaInput.toLowerCase()) >= 0)
		},
		buttonDisabled () {
			if (!this.etapasFiltradas.length && !this.errors.items.length) return false
			else return true
		},
		...mapGetters([
			'dataFormatada'
		])
	},
	watch: {
		buttonDisabled (status) { this.disabled = status }
	},
	mounted(){ this.setFocusToInput() },
	mixins:[  validator ],
	methods:{
		...mapMutations('etapas',[
			'DISPLAY'
		]),

		...mapMutations('arquivos',[
			'ADD_ARQUIVO',
			'ABRE_BOX',
			'SET_ID_ETAPA'
		]),

		...mapMutations('ui',[
			'LUZ_TOGGLE'
		]),

		...mapActions('etapas', [
			'postNovaEtapa'
		]),

		setFocusToInput(){ this.$refs.etapa.focus() },
		fechar() {
			this.DISPLAY(false)
			this.LUZ_TOGGLE()
		},
		cria () {
			this.postNovaEtapa({
				idProjeto: this.projeto.id,
				nome: this.novaEtapaInput
			})
		},
		seleciona (etapa) {
				this.ADD_ARQUIVO({
					atualizacao: this.dataFormatada,
					fonte:"Gestão Urbana",
					id: 0,
					idEtapa: etapa.id,
					idExtensao: 0,
					idProjeto: this.projeto.id,
					idSubetapa: 0,
					nome: "Edite este novo Arquivo",
					posicao: 1,
				})
				this.fechar()
		},
		addBotaoClass(id) {
			if(this.etapasExistentes.find(etapaId => etapaId === id)) return 'botao botao--existente'
			else return 'botao'
		}
	},
}
</script>

<style lang="scss" scoped>
.botao {
	background: #219653;
	opacity: 0.8;
	border: 0;
	padding: 0.5rem;
	border-radius: 13px;
	font-weight: 500;
	color: white;
	cursor: pointer;
}
.botao:hover{
	opacity: 1;
}
.botao--existente {
	background: #0073aa;
}


@import "../scss/ADDFORM";

</style>