<template>
	<div class="AdicionarEtapa add-form">
		<div class="cont">
			<div class="title">
				<h3>Adicionar etapa</h3>
			</div>
			<div class="conteudo">
				<p>Adicione uma nova etapa. Verifique se a etapa já foi criada.</p>
				<form>
					<fieldset>
						<input
							ref="etapa"
							@keyup.esc="fechaNovoProjetoBox"
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
				<p class="mensagem-erro" v-if="serverError">{{ serverError }}</p>
				<ul class="lista">
					<li class="lista--item" v-for="(etapa, index) in etapasFiltradas" :key="index">{{ etapa.nome }}</li>
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
					@click="criar">Adicionar</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { ptBr, validator } from '../mixins/formValidation'

export default {
	name: 'AdicionarEtapa',
	props: {
		projeto: {
			required: true,
			type: Object
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
			error: state => state.error,
			serverError: state => state.error,
			etapas: state => state.etapas
		}),
		etapasFiltradas () {
			return this.etapas.filter(etapa =>etapa.nome.toLowerCase().indexOf(this.novaEtapaInput.toLowerCase()) >= 0)
		},
		buttonDisabled () {
			if (!this.etapasFiltradas.length && !this.errors.items.length) return false
			else return true
		}
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
		criar() {
			this.postNovaEtapa({
				idProjeto: this.projeto.id,
				nome: this.novaEtapaInput
			})
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/ADDFORM";

</style>