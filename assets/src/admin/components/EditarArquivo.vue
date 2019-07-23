<template>
	<div class="EditarArquivo" :class="{ fechado: !fechaBox }" ref="div">
		<div class="cont">
			<div class="title">
				<h3>Editar arquivo</h3>
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
								v-model="arquivoClicado.nome"
								v-validate="'required|max:330'">
								<span v-if="!errors.has('Nome público')">{{nomeCharNumber}}/330</span>
								<ErroSpan :display="errors.has('Nome público')">{{ errors.first('Nome público') }}</ErroSpan>
						</td>
					</tr>
						<URL
							:idUrl='parseInt(arquivoClicado.id)'
							:idEtapa="idEtapa"
						></URL>
						<!-- <template v-for="(newUrl, index) in newUrls">
							<URLnova 
								:key="index + 1"
								:index="index">
							</URLnova>
						</template> -->
					<tr>
						<td colspan="2">
							<div class="addUrl" @click="addUrl">+ Adicionar URL</div>
						</td>
					</tr>
				</table>
			</form>
			<div class="actions">
				<SalvarCancelar
					:tipo="'cancelar'"
					:texto="'Cancelar'"
					:disabledState="false"
					:commitName="'arquivos/ABRE_EDIT_BOX'"
					:inlinestyle="'font-size:13px; padding: 16px 24px;'">
				</SalvarCancelar>
				<SalvarCancelar 
					:tipo="'salvar'"
					:texto="'Atualizar'"
					:disabledState="!enabled"
					:action="{
						name: 'arquivos/putArquivo',
						toChange: {
							id: arquivoClicado.id,
							nome: arquivoClicado.nome
						}
					}"
					:inlinestyle="'font-size:13px; padding: 16px 24px;'">
				</SalvarCancelar>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import ErroSpan from '../components/ErroSpan.vue'
import URL from '../components/URL.vue'
import URLnova from '../components/URLnova.vue'
import SalvarCancelar from '../components/SalvarCancelar.vue'
import { ptBr, validator } from '../mixins/formValidation'

export default {
	name: 'EditarArquivo',
	props:{
		idEtapa: {
			type: Number,
			required: true
		}
	},
	components: {
		ErroSpan,
		URL,
		URLnova,
		SalvarCancelar
	},
	mixins:[  validator  ],
	methods: {
		addUrl() { 
			this.newUrls.push({
				url: undefined,
				extensao: undefined
		})},
	},
	computed: {
		newUrls:{
			get(){ return this.$store.state.urls.urlsNovas },
			set(value) { this.$store.commit('urls/SET') }
		},
		enabled() {
			let formHaveErrors = this.$validator.errors.items.length > 0 // boolean 
			let formTouched = this.$validator.fields.items.filter(field => field.flags.changed).length > 0 
			return formHaveErrors + formTouched > 0 // true + true === 2 -> true 
		},

		arquivoClicado: {
			get(){
				return this.$store.state.arquivos.arquivos
					.find(arquivo => parseInt(arquivo.id) === parseInt(this.$store.state.arquivos.clieckedArquivoId))
			},
			// set(value){
 			// 	this.$store.commit('UPDATE_ARQUIVO_CLICADO', value)
			// }
			set(arquivo) {
				this.$store.commit('arquivos/UPDATE_ARQUIVO_CLICADO', arquivo)
			}
		},
		fetchError(){ return this.$store.state.arquivos.error },
		fechaBox() { return this.$store.state.arquivos.editBox },
		nomeCharNumber() {return this.arquivoClicado.nome.length },
		
	},
	watch:{
		fetchError(status){ status ? console.log('errrou') : null },
	}
}
</script>

<style lang="scss">
div.EditarArquivo {
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
						width: 100%;

						input[type=text], textarea {
							width: 520px;
							padding: 4px 6px;
						}
						input.error{
							width: 379px
						}

						& > span {
							margin-left: 8px;

							&.charCounter {
								width: 50px;
								display: inline-flex;
								align-items: flex-end;
								justify-content: flex-end;
								color: #898989;
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

@media (max-width: 720px) {
	div.EditarArquivo {
		div.cont {
			width: 100%
		}
	}
}

</style>