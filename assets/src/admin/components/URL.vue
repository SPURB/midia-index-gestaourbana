<template>
	<tr class="URL">
		<td>URL</td>
		<td>
			<input type="text" name="url" v-model="urlArquivoClicado.url">
			<div v-if="displayExtensao(urlArquivoClicado)">
				<span @click="extensaoBoxShow.state = !extensaoBoxShow.state">{{ extensaoBoxShow.text }}</span>
				<div 
					class="arquivo_extensao-box" 
					:class="{ display: extensaoBoxShow.state }" 
					ref="extensaoBox">
					Selecione a extensão do arquivo 
					<i @click="extensaoBoxShow.state = !extensaoBoxShow.state">&times;</i>
					<div class="opcoes">
						<span v-for="extensao in tiposDeArquivo" @click="alteraTipoDeArq(extensao)">{{ extensao }}</span>
					</div>
				</div>
			</div>
			<div v-else>
				<span class="extensao_fixa">{{ checkExtensao(urlArquivoClicado.url) }}</span>
			</div>
				<a class="excluirUrl" @click="deletaUrl($event)"><span>&times;</span></a>
		</td>
	</tr>
</template>

<script>
	export default {
		name: 'URL',
		props:{
			idUrl: {
				type: Number,
				required: true
			},
			idEtapa: {
				type: Number,
				required: true
			},
		},
		data() {
			return {
				extensaoBoxShow: { 
					state: false,
					text: '...' 
				}
			}
		},
		computed: {
			tiposDeArquivo() { return this.$store.state.urls.tiposDeArquivo },
			urlArquivoClicado: {
				get(){ 
					const urls = this.$store.state.arquivoClicado.urls
					return urls[this.getIndex(urls, this.idUrl)]
				}
			}
		},
		methods: {
			deletaUrl(evt){
				console.log(evt)
			},
			displayExtensao(arquivo){
				const extensaoFromUrl = this.checkExtensao(arquivo.url.replace(/ /g,''))
				const extensaoState = arquivo.extensao

				if(extensaoFromUrl === 'ZIP' || extensaoFromUrl === 'RAR') { 
					if(extensaoState != false){
						this.extensaoBoxShow.text = extensaoState
					}
					return true
				}
				else { return false }
			}, 
			checkExtensao(url){
				const regexPattern = /\.([0-9a-z]+)(?:[\?#]|$)/i
				const ext = (url).match(regexPattern)
				let extensao

				if (ext != null){
					extensao = (url).match(regexPattern)[1].toUpperCase()
				}
				else{
					extensao = 'URL'
				}
				return extensao
			},
			getIndex(arr, fileId){
				return arr.findIndex(item => parseInt(item.id) === fileId)
			},
			alteraTipoDeArq(ext) {
				this.extensaoBoxShow.state = false
				this.extensaoBoxShow.text = ext
				this.$store.commit('SET_ARQUIVO_EXTENSION', {
					idUrl: this.idUrl,
					extensao: ext
				})
			},
		}
	};
</script>

<style lang="scss" scoped>
@import "../scss/URL"
</style>