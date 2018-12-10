<template>
	<div class="AdicionarArquivo" :class="{ fechado: !fechaBox }" ref="div">
		<div class="cont">
			<div class="title">
				<h3>Adicionar arquivo</h3>
			</div>
			<form>
				<table>
					<tr>
						<td>
							<label for="nome">Nome público</label>
						</td>
						<td>
							<input 
								type="text" 
								ref="nome" 
								id="nome"
								name="Nome público"
								v-model="action.toChange.nome"
								v-validate="'required|max:330'">
								<span v-if="!errors.has('Nome público')">{{nomeCharNumber}}/330</span>
								<ErroSpan :display="errors.has('Nome público')">{{ errors.first('Nome público') }}</ErroSpan>
						</td>
					</tr>
						<template v-for="(newUrl, index) in newUrls">
							<URLnova 
								:index="index"
								v-on:removerurls="removeUrl(index)"
							></URLnova>
						</template>
					<tr>
						<td colspan="2">
							<div class="addUrl" @click="addUrl()">+ Adicionar URL</div>
						</td>
					</tr>
					<tr>
						<td>
							<label for="descricao">Descrição</label>
						</td>
						<td>
							<textarea 
								type="text"
								name="Descrição" 
								id="descricao" 
								v-model="action.toChange.descricao"
								v-validate="'required|max:330'"></textarea>
								<span class="contador" v-if="!errors.has('Descrição')">{{descricaoCharNumber}}/330</span>
								<ErroSpan :display="errors.has('Descrição')">{{ errors.first('Descrição') }}</ErroSpan>
						</td>
					</tr>
				</table>
			</form>

			<div class="actions">
				<SalvarCancelar
					:tipo="'cancelar'"
					:texto="'Cancelar'"
					:disabledState="false"
					:commitName="'arquivos/ABRE_BOX'"
					:inlinestyle="'font-size:13px; padding: 16px 24px;'">
				</SalvarCancelar>
				<SalvarCancelar 
					:tipo="'salvar'"
					:texto="'Adicionar'"
					:disabledState="disabled"
					:action="action"
					:inlinestyle="'font-size:13px; padding: 16px 24px;'">
				</SalvarCancelar>
			</div>
		</div>
	</div>
</template>

<script>
import ErroSpan from '../components/ErroSpan.vue'
import URLnova from '../components/URLnova.vue'
import SalvarCancelar from '../components/SalvarCancelar.vue'
import inputForms from '../mixins/inputForms'
import { ptBr, validator } from '../mixins/formValidation'

export default {
	name: 'AdicionarArquivo',
	data(){
		return {
			action:{
				name: 'arquivos/postNovoArquivo',
				toChange: { 
					nome:'', 
					descricao: '',
				}
			},
			newUrls: [{}],
			disabledNome: true,
			disabledDescricao: true, 
		}
	},
	components: {
		ErroSpan,
		URLnova,
		SalvarCancelar
	},
	mixins:[ inputForms, validator  ],
	computed: {
		fetching(){ return this.$store.state.fetching },
		fetchError(){ return this.$store.state.arquivos.error },
		fetchResponse(){ return this.$store.state.arquivos.response },
		fechaBox() { return this.$store.state.arquivos.box },
		nomeCharNumber() {return this.action.toChange.nome.length },
		descricaoCharNumber() {return this.action.toChange.descricao.length },
		disabled() { 
			if( this.disabledNome || this.disabledDescricao ) { return true } 
			else { return false }
		}
	},
	watch:{
		nomeCharNumber(value) { value > 1 ? this.disabledNome = false :  this.disabledNome = true },
		descricaoCharNumber(value) { value > 1 ? this.disabledDescricao = false :  this.disabledDescricao = true },
		fetchError(status){ status ? console.log('errrou') : null },
		fetchResponse(oldStatus, newStatus){
			if(newStatus !== undefined || !this.fetching || !this.fetchError){
				console.log('fetchResponse: '+this.fetchResponse)
			}
		}
	},

}
</script>

<style lang="scss">
div.AdicionarArquivo {
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
		animation: addArq ease-in .4s;
		transition: transform ease-out .4s;

		@keyframes addArq {
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

			tr {

				td {
					vertical-align: baseline;
					margin-bottom: 8px !important;

					label { vertical-align: baseline; }

					&:first-child:not(:last-child) {
						padding-right: 8px;
						text-align: right;
					}

					&:nth-child(2) {
						display: inline-flex;
						justify-content: space-between;
						width: 100%;

						input[type=text], textarea {
							width: 520px;
							padding: 4px 6px;
							transition: width ease .2s
						}
						input.error{
							width: 379px
						}

						& > span {
							margin-left: 8px;
							display: inline-flex;
							align-items: center;
							justify-content: flex-end;
							&.contador{
								align-items: flex-end;
							}
						}
					}

					div.addUrl {
						display: inline;
						float: right;
						background-color: transparent;
						color: #DDD;
						height: 32px;
						line-height: 32px;
						border: 1px solid #DDD;
						border-radius: 16px;
						padding: 0 12px;
						transition: all .2s;
						cursor: pointer;

						&:hover {
							background: #0073aa;
							border-color: #0073aa;
							color: #FFF;
						}
					}
				}

				&:last-child td {
					margin: 8px 0 0 0;
				}
			}
		}

		div.actions {
			padding: 0 24px 24px 24px;
			display: flex;
			justify-content: space-between;

			button {
				border-width: 0;
				color: #FFF;
				padding: 16px 24px;
				border-radius: 2px;
				box-shadow: inset 0 -2px 2px rgba(0, 0, 0, .24);
				cursor: pointer;

				&.cancelar { background-color: #fe4c4c; }
				&.adicionar { background-color: #219653; }
			}
		}
	}
}
</style>