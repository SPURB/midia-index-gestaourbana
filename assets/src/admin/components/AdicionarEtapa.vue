<template>
	<!-- <div class="AdicionarEtapa add-form" :class="{ fechado: !addEtapaBox }" ref="div"> -->
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
					@click="criar">Nova etapa</button>
			</div>


			<!-- <form>
				<table>
					<tr>
						<td><label for="novaetapa">Nome</label></td>
						<td><input 
								name="novaetapa" 
								type="text" 
								v-model="novaEtapaInput"
								v-validate="'required'"></td>
					</tr>
				</table>
			</form> -->
			<!-- <div class="actions">
				<SalvarCancelar
					:tipo="'cancelar'"
					:texto="'Cancelar'"
					:disabledState="false"
					:commitName="'etapas/DISPLAY'"
					:options="false"
					:inlinestyle="'font-size:13px; padding: 16px 24px;'">
				</SalvarCancelar>
				<SalvarCancelar 
					:tipo="'salvar'"
					:texto="'Adicionar'"
					:disabledState="isvalid"
					:action="action"
					:inlinestyle="'font-size:13px; padding: 16px 24px;'">
				</SalvarCancelar>
			</div> -->
		</div>
	</div>
</template>

<script>
// import SalvarCancelar from '../components/SalvarCancelar.vue'
// import { ptBr, validator } from '../mixins/formValidation'
import { mapState } from 'vuex'

export default {
	name: 'AdicionarEtapa',
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
		// etapasNomes() { return this.etapas.map(etapa => etapa.nome.toLowerCase()) },
		etapasFiltradas () {
			return this.etapas.filter(etapa =>etapa.nome.toLowerCase().indexOf(this.novaEtapaInput.toLowerCase()) >= 0)
		}
	},
	mounted(){ this.setFocusToInput() },
	methods:{
		setFocusToInput(){this.$refs.etapa.focus()},
		fechar() { },
		criar() { }
	}

	// mixins:[ validator ],
	// // components:{ SalvarCancelar },
	// data() {
	// 	return {
	// 		novaEtapaInput: '',
	// 		disabled: true,
	// 		action:{
	// 			name: 'etapas/postNovaEtapa',
	// 			toChange: undefined
	// 		}
	// 	}
	// },
	// computed: {
	// 	addEtapaBox() { return this.$store.state.etapas.addEtapaBox },
	// 	idNewEtapa() { return this.$store.state.etapas.idEtapa }, 
	// 	fetchError() { return this.$store.state.etapas.error },
	// 	isvalid() { return this.fields.novaetapa === undefined ? true : !this.fields.novaetapa.valid }
	// },
	// watch:{
	// 	novaEtapaInput(input){
	// 		switch (input) {
	// 			case '' : this.disabled = true
	// 			case ' ': this.disabled = true
	// 			default : this.disabled = false

	// 		}
	// 		this.action.toChange = input
	// 	}
	// }
}
</script>

<style lang="scss" scoped> 
@import "../scss/ADDFORM";

</style>