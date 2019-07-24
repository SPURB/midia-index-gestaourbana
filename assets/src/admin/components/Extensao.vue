<template>
	<div>
		<span 
			:class="{ extensao_fixa:extensaoFixa }" 
			@click="openBox"
			:disabled="extensaoFixa"
			>{{ extensao }} </span>
		<div 
			class="arquivo_extensao-box"
			:class="{ display: displayExtensaoBox }"
			v-show="displayExtensaoBox"
			ref="extensaoBox">Definir o tipo de arquivo
			<i @click="displayExtensaoBox = !displayExtensaoBox">&times;</i>
			<div class="opcoes">
				<span 
					v-for="(extensao, index) in tiposNomes" 
					@click="alteraTipoDeArq(extensao)"
					:key="index">{{ extensao }}</span>
			</div>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	name: 'Extensao',
	props: {
		input: {
			type: String,
			required: true
		},
		idExtensao: {
			type: Number,
			required: true
		},
		idArquivo: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			displayExtensao: true,
			displayExtensaoBox: false,
			extensaoFixa: false
		}
	},
	computed: {
		...mapState('urls', {
			tipos: state => state.tipos
		}),
		extensao: { 
			get() { return this.tipos.find(tipo => tipo.id === this.idExtensao).nome },
			set(extensao) {
				this.$store.commit('arquivos/UPDATE_ARQUIVO_CLICADO', { extensao: extensao, idArquivo: this.idArquivo })
			}
		},
		tiposNomes () { return this.tipos.map(tipo => tipo.nome) }
	},
	mounted() {
		this.setExtensaoFixa(this.extensao)
	},
	methods: {
		setExtensaoFixa (extensao) {
			const genericExtensions = [ 'RAR', 'ZIP', 'URL' ]
			const found = genericExtensions.find(ext => ext === extensao)

			if (found) this.extensaoFixa = false
			else this.extensaoFixa = true
		},

		// setExtensaoEditability(extension) {
		// },
		// setExtensaoSpanValue(value){
		// 	value = value.toUpperCase()
		// 	if(value === '...' || value != ''){
		// 		this.displayExtensao = true
		// 		this.displayExtensaoBox = false
		// 	}
		// 	else{
		// 		this.displayExtensao = false
		// 		this.displayExtensaoBox = false
		// 	}
		// },
		// checkExtensao(url){
		// 	const regexPattern = /\.([0-9a-z]+)(?:[\?#]|$)/i // extensão  = apenas texto após o último ponto
		// 	const ext = (url).match(regexPattern)
		// 	let extensao

		// 	if (ext != null){
		// 		extensao = (url).match(regexPattern)[1].toUpperCase()
		// 		extensao === 'RAR' || extensao === 'ZIP' ? extensao = "..." : extensao = extensao
		// 		extensao === '...' ? this.extensaoFixa = false : this.extensaoFixa = true
		// 	}
		// 	else{
		// 		extensao = 'URL'
		// 	}
		// 	return extensao
		// },
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


