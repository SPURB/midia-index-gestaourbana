<template>
	<tr> 
		<td>URL</td>
		<td>
			<input
				type="text" 
				name="url" 
				v-model="input"
				v-validate="'required|url'"
				:class="{'input': true, 'error': errors.has('url') }">
				<ErroSpan :display="errors.first('url')!==undefined">{{ errors.first('url') }}</ErroSpan>

			<div v-if="displayExtensao">
				<span 
					:class="{ extensao_fixa:extensaoFixa }" 
					@click="openBox"
					:disabled="extensaoFixa"
					>{{ extensao }} </span>
				<div 
					class="arquivo_extensao-box"
					:class="{ display: displayExtensaoBox }" 
					v-show="displayExtensaoBox"
					ref="extensaoBox">Selecione a extensão do arquivo
					<i @click="displayExtensaoBox = !displayExtensaoBox">&times;</i>
					<div class="opcoes">
						<span 
							v-for="(extensao, index) in tiposDeArquivo" 
							@click="alteraTipoDeArq(extensao)"
							:key="index">{{ extensao }}</span>
					</div>
				</div>
			</div>
			<a
				class="excluirUrl" 
				@click="deletaUrl"
				><span>&times;</span></a>
		</td>
	</tr>
</template>

<script>
import ErroSpan from '../components/ErroSpan.vue'
import { ptBr, validator } from '../mixins/formValidation'

// import url from '../mixins/url' // o template está no mixin e se aplica também ao URLnova.vue

export default {
	name: 'URL',
	data(){
		return {
			input:'',
			displayExtensao: false,
			displayExtensaoBox: false,
			extensao:'',
			extensaoFixa: true
		}
	},
	props:{
		idUrl: {
			type: Number,
			required: true
		},
		idEtapa: {
			type: Number,
			required: true
		}
	},
	mixins:[
		validator
		// url
	],

	components:{ ErroSpan },
	computed:{
		tiposDeArquivo() { return this.$store.state.urls.tiposDeArquivo },
	},
	watch:{
		input(value){
			if(value){
				this.$store.commit('urls/CHANGE_URL',{
					id: this.idUrl,
					isValid: this.isValid,
					isTouched: this.isTouched
				})
			}
		},
		extensao(value){
			if(value){
				this.setExtensaoSpanValue(value)
			}
		}
	},
	computed: {
		isValid(){ return this.$validator.errors.items.length === 0 }, 
		isTouched(){ return this.$validator.fields.items.filter( field => field.flags.changed ).length > 0  }, 
		arquivoClicado: {
			get(){
				this.$store.state.arquivos.arquivos.find(arquivo => arquivo.id === this.idUrl)
			}
		}
	},
	// mounted(){
	// 	this.input = this.arquivoClicado.url
	// },
	methods: {
		deletaUrl(evt){
			console.log(evt)
		},
		getIndex(arr, fileId){
			return arr.findIndex(item => parseInt(item.id) === fileId)
		},

// from mixins
		setExtensaoSpanValue(value){
			value = value.toUpperCase()
			if(value === '...' || value != ''){
				this.displayExtensao = true
				this.displayExtensaoBox = false
			}
			else{
				this.displayExtensao = false
				this.displayExtensaoBox = false
			}
		},
		checkExtensao(url){
			const regexPattern = /\.([0-9a-z]+)(?:[\?#]|$)/i // extensão  = apenas texto após o último ponto
			const ext = (url).match(regexPattern)
			let extensao

			if (ext != null){
				extensao = (url).match(regexPattern)[1].toUpperCase()
				extensao === 'RAR' || extensao === 'ZIP' ? extensao = "..." : extensao = extensao 
				extensao === '...' ? this.extensaoFixa = false : this.extensaoFixa = true
			}
			else{
				extensao = 'URL'
			}
			return extensao
		},
		alteraTipoDeArq(ext) {
			this.displayExtensaoBox = false
			this.extensao = ext
		},
		openBox(){
			this.extensaoFixa ? this.displayExtensaoBox = false : this.displayExtensaoBox = true 
		}

	}
}
</script>

<style lang="scss" scoped>
@import "../scss/URL"
</style>