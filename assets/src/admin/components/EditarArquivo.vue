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
								@keyup="charCount($event)" 
								ref="nome" 
								v-model="arquivoClicado.nome">
							<span class="charCounter">0/330</span>
						</td>
					</tr>
						<template v-for="(url, index) in arquivoClicado.urls">
							<URL 
								:key="index"
								:idUrl='parseInt(url.id)'
								:idEtapa="idEtapa"
							></URL>
						</template>
						<template v-for="(newUrl, index) in newUrls">
							<URLnova 
								:key="index"
								:index="index"></URLnova>
						</template>
					<tr>
						<td colspan="2">
							<div class="addUrl" @click="addUrl">+ Adicionar URL</div>
						</td>
					</tr>
					<tr>
						<td>
							<label for="descricao">Descrição</label>
						</td>
						<td>
							<textarea @keyup="charCount($event)" ref="descricao" v-model="arquivoClicado.descricao"></textarea>
							<span class="charCounter">0/330</span>
						</td>
					</tr>
				</table>
			</form>
			<div class="actions">
				<button class="cancelar" @click="cancelar()">Cancelar</button>
				<button class="adicionar">Salvar</button>
			</div>
		</div>
	</div>
</template>

<script>
import URL from '../components/URL.vue'
import URLnova from '../components/URLnova.vue'
import inputForms from '../mixins/inputForms'

export default {
	name: 'EditarArquivo',
	data(){
		return {
			newUrls: []
		}
	}, 
	components: {
		URL,
		URLnova
	},
	mixins:[ inputForms ],
	computed: {
		arquivoClicado:{ 
			get(){ return this.$store.state.arquivoClicado },
			set(value){ this.$store.commit('UPDATE_ARQUIVO_CLICADO', value)}
		},
		fechaBox() {
			return this.$store.state.editArquivoBox
		}
	},
	methods: {
		cancelar() {
			this.$store.commit('LUZ_TOGGLE')
			this.$store.commit('ABRE_ARQUIVO_BOX')
		}
	}
};
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
						justify-content: space-between;
						width: 100%;

						input[type=text], textarea {
							width: 520px;
							padding: 4px 6px;
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
				};
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