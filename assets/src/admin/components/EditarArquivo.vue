<template>
	<div class="EditarArquivo form--arquivo" :class="{ fechado: !fechaBox }" ref="div">
		<div class="cont">
			<div class="title">
				<h3>Editar arquivo</h3>
			</div>
			<form>
				<table>
					<tr>
						<td>
							<label for="nome">Nome</label>
						</td>
						<td>
							<input
								type="text"
								ref="nome"
								id="nome"
								name="Nome público"
								v-model='nome'
								:placeholder="arquivoClicado.nome"
								v-validate="'required|max:330'">
								<span v-if="!errors.has('Nome público')">{{nomeCharNumber}}/330</span>
								<ErroSpan v-if="errors.has('Nome público')">{{ errors.first('Nome público') }}</ErroSpan>
						</td>
					</tr>
					<!-- <URL :idArquivo="arquivoClicado.id" :idEtapa="idEtapa"></URL> -->
					<URL :idArquivo="arquivoClicado.id" :idEtapa="idEtapa" v-on:url="salvarUrl"></URL>

									<!-- v-on:btn-action="salvar" -->

					<tr>
						<td></td>
						<td>
							<div class="dropdown-selector">
								<label for="SelecionarEtapas">Etapa</label>
								<SelecionarEtapas :arquivos="[arquivoClicado]" :idEtapa="idEtapa"></SelecionarEtapas>
							</div>
							<div class="dropdown-selector">
								<label for="SelecionarSubEtapas">Sub etapa</label>
								<SelecionarSubEtapa :idArquivo="arquivoClicado.id" :idSubEtapa="getSubEtapaId(arquivoClicado.idSubEtapa)"></SelecionarSubEtapa>
							</div>
						</td>
					</tr>
					<Fonte :idArquivo="arquivoClicado.id" :novoArquivo="false"></Fonte>
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
import { mapState, mapGetters } from 'vuex'
import ErroSpan from '../components/ErroSpan.vue'
import URL from '../components/URL.vue'
import SalvarCancelar from '../components/SalvarCancelar.vue'
import SelecionarEtapas from '../components/SelecionarEtapas.vue'
import SelecionarSubEtapa from '../components/SelecionarSubEtapa.vue'
import Fonte from '../components/Fonte.vue'
import { ptBr, validator } from '../mixins/formValidation'

export default {
	name: 'EditarArquivo',
	data() {
		return {
			nome: '',
			url:'',
			etapa: 0,
			subetapa: 0,
			fonte: ''
		}
	},
	props:{
		idEtapa: {
			type: Number,
			required: true
		}
	},
	components: {
		ErroSpan,
		URL,
		SalvarCancelar,
		SelecionarEtapas,
		SelecionarSubEtapa,
		Fonte
	},
	mixins:[  validator ],
	computed: {
		...mapState('arquivos', {
			arquivos: state => state.arquivos,
			fetchError: state => state.fetchError,
			fechaBox: state => state.editBox
		}),

		...mapGetters('arquivos', {
			arquivoClicado: 'arquivoClicado'
		}),

		enabled() {
			let formHaveErrors = this.$validator.errors.items.length > 0 // boolean 
			let formTouched = this.$validator.fields.items.filter(field => field.flags.changed).length > 0 
			return formHaveErrors + formTouched > 0 // true + false  1 -> true 
		},

		// arquivoClicado: {
		// 	get(){
		// 		return this.$store.getters['arquivos/arquivoClicado']
		// 	},
		// 	set(arquivo) {
		// 		console.log(arquivo)
		// 		this.$store.dispatch('arquivos/UPDATE_ARQUIVO_CLICADO', arquivo)
		// 	}
		// },
		nomeCharNumber() {return this.arquivoClicado.nome.length }
		
	},
	watch:{
		fetchError(status){ status ? console.log('errrou') : null },
	},
	methods: {
		salvarUrl(s) { console.log((s)) },
		getSubEtapaId (id) { return id ? id : 0 }
	},
	// created () {
	// 	this.nome = this.arquivoClicado.nome
	// }
}
</script>

<style lang="scss" scoped>
@import "../scss/FILEFORM.scss";
</style>