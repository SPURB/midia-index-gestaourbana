<template>
	<div class="AdicionarArquivo form--arquivo" :class="{ fechado: !fechaBox }" ref="div">
		<div class="cont">
			<div class="title">
				<h3>Adicionar arquivo</h3>
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
								v-model="action.toChange.nome"
								v-validate="'required|max:330'">
								<span v-if="!errors.has('Nome público')">{{nomeCharNumber}}/330</span>
								<ErroSpan v-if="errors.has('Nome público')">{{ errors.first('Nome público') }}</ErroSpan>
						</td>
					</tr>
					<URL :idArquivo="0" :idEtapa="idEtapa"></URL>
					<!-- <tr>
						<td colspan="2">
							<div class="addUrl" @click="addUrl">+ Adicionar URL</div>
						</td>
					</tr> -->
					<!-- <tr>
						<td>
							<label for="descricao">Descrição</label>
						</td>
						<td>
							<textarea 
								type="text"
								name="Descrição" 
								id="descricao" 
								v-model="action.toChange.descricao"
								v-validate="'required|max:330'">
							</textarea>
							<span class="contador" v-if="!errors.has('Descrição')">{{descricaoCharNumber}}/330</span>
							<ErroSpan v-if="errors.has('Descrição')">{{ errors.first('Descrição') }}</ErroSpan>
						</td>
					</tr> -->
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
// import URLnova from '../components/URLnova.vue'
import URL from '../components/URL.vue'
import SalvarCancelar from '../components/SalvarCancelar.vue'
import { ptBr, validator } from '../mixins/formValidation'
import { mapState } from 'vuex'


export default {
	name: 'AdicionarArquivo',
	data(){
		return {
			action:{
				name: 'arquivos/postNovoArquivo',
				toChange: { 
					nome:'', 
					descricao: ''
				}
			},
			disabledNome: true,
			disabledDescricao: true
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
		SalvarCancelar
	},
	mixins:[  validator  ],
	methods:{
		// addUrl() {
		// 	this.newUrls.push({
		// 		url: undefined,
		// 		extensao: undefined
		// 	})
		// },
	},
	computed: {
		// ...mapState('arquivos', {
		// 	arquivos: state => state.arquivos
		// }),

		// arquivoClicado: {
		// 	get(){
		// 		return this.arquivos.find(arquivo => arquivo.id === this.clieckedArquivoId)
		// 	},
		// 	set(arquivo) {
		// 		this.$store.commit('arquivos/UPDATE_ARQUIVO_CLICADO', arquivo)
		// 	}
		// },

		// newUrls:{ 
		// 	get(){ return this.$store.state.urls.urlsNovas },
		// 	set(value) { this.$store.commit('urls/SET') }
		// },
		fetchError(){ return this.$store.state.arquivos.error },
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
	},

}
</script>

<style lang="scss" scoped>
@import "../scss/FILEFORM";
</style>