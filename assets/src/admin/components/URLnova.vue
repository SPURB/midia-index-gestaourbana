<template>
	<tr class="UrlNova">
		<td>URL</td>
		<td>
			<input type="text" name="url" v-model="input">
			<div v-if="displayExtensao"> 
				<span 
					:class="{ extensao_fixa:extensaoFixa }" 
					@click="openBox()"
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
							v-for="extensao in tiposDeArquivo" 
							@click="alteraTipoDeArq(extensao)"
						>{{ extensao }}</span>
					</div>
				</div>
			</div>
			<a v-if="displayExtensao" class="excluirUrl" @click="deletaUrl($event)"><span>&times;</span></a>
		</td>
	</tr>
</template>

<script>
	export default {
		name: 'UrlNova',
		props:{
			index: {
				type: Number,
				required: true 
			}
		},
		data() {
			return {
				input:'',
				displayExtensao: false,
				displayExtensaoBox: false,
				extensao:'',
				extensaoFixa: true
			}
		},
		watch:{
			input(value){ 
				this.extensao = this.checkExtensao(value.replace(/ /g,'')) // remove espaços
			},
			extensao(value){ 
				value = value.toUpperCase()
				if(value === '...' || value != ''){
					this.displayExtensao = true
					this.displayExtensaoBox = false
				}
				else{
					this.displayExtensao = false
					this.displayExtensaoBox = false
				}
			}

		},
		computed: {
			tiposDeArquivo() { return this.$store.state.tiposDeArquivo },
		},
		methods:{
			deletaUrl(evt){
				console.log(evt)
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
				console.log(ext)
				this.displayExtensaoBox = false
				this.extensao = ext
			},
			openBox(){
				this.extensaoFixa ? this.displayExtensaoBox = false : this.displayExtensaoBox = true 
			}
		},
	};
</script>

<style lang="scss" scoped>
@import "../scss/URL"
</style>