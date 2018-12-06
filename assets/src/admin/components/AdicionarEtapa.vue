<template>
	<div class="AdicionarEtapa" :class="{ fechado: !addEtapaBox }" ref="div">
		<div class="cont">
			<div class="title">
				<h3>Adicionar etapa</h3>
			</div>
			<form action="">
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
			</form>
			<div class="actions">
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
			</div>
		</div>
	</div>
</template>

<script>
import SalvarCancelar from '../components/SalvarCancelar.vue'
import { ptBr, validator } from '../mixins/formValidation'

export default {
	name: 'AdicionarEtapa',
	mixins:[ validator ],
	components:{ SalvarCancelar },
	data() {
		return {
			novaEtapaInput: '',
			disabled: true,
			action:{
				name: 'etapas/postNovaEtapa',
				toChange: undefined
			}
		}
	},
	computed: {
		addEtapaBox() { return this.$store.state.etapas.addEtapaBox },
		idNewEtapa() { return this.$store.state.etapas.idEtapa }, 
		fetchError() { return this.$store.state.etapas.error },
		isvalid() { return this.fields.novaetapa === undefined ? true : !this.fields.novaetapa.valid }
	},
	watch:{
		novaEtapaInput(input){
			switch (input) {
				case '' : this.disabled = true
				case ' ': this.disabled = true
				default : this.disabled = false

			}
			this.action.toChange = input
		}, 
	}
};
</script>

<style lang="scss" scoped> 
div.AdicionarEtapa {
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
		animation: addEtp ease-in .4s;
		transition: transform ease-out .4s;

		@keyframes addEtp {
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

		table {
			padding: 24px;
			border-spacing: 0;
			width: 100%;
			tr {
				td:first-child {
					max-width: min-content;
					max-width: -moz-min-content;
					padding-right: 8px;
				}
				td:last-child {
					width: 100%;
					input { width: 100%; }
				}
			}
		}

		div.actions {
			padding: 0 24px 24px 24px;
			display: flex;
			justify-content: space-between;
		}
	}
}
</style>