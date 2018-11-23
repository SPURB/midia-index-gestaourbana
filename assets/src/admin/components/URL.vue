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
					Selecione a extensão do arquivo <i @click="extensaoBoxShow.state = !extensaoBoxShow.state">&times;</i>
					<div class="opcoes">
						<span v-for="extensao in tiposDeArquivo" @click="alteraTipoDeArq(extensao)">{{ extensao }}</span>
					</div>					
				</div>
			</div>
			<div v-else>
				<span class="extensao_fixa">{{ extensao(urlArquivoClicado.url) }}</span>
			</div>
			<button class="excluirUrl" @click="deletaUrl($event)">&times;</button>
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
			tiposDeArquivo() { return this.$store.state.tiposDeArquivo },
			urlArquivoClicado: {
				get(){ 
					const urls = this.$store.state.arquivoClicado.urls
					return urls[this.getIndex(urls, this.idUrl)]
				}
			}
		},
		methods: {
			displayExtensao(arquivo){
				const extensaoFromUrl = this.extensao(arquivo.url)
				const extensaoState = arquivo.extensao

				if(extensaoFromUrl === 'ZIP' || extensaoFromUrl === 'RAR') { 
					if(extensaoState != false){
						this.extensaoBoxShow.text = extensaoState
					}
					return true
				}
				else { return false }
			}, 
			extensao(url){
				const regexPattern = /\.([0-9a-z]+)(?:[\?#]|$)/i
				const ext = (url).match(regexPattern)
				let extensao

				if (ext != null){
					extensao = (url).match(regexPattern)[1].toUpperCase()
					// if(extensao === 'ZIP' || extensao === 'RAR'){
						// set this.urlArquivoClicado.urls
					// }
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
				// console.log(ext)
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
tr.URL {
	position: relative;

	td div span {
		display: inline-flex;
		background-color: #bbb;
		padding: 4px 8px;
		margin-left: 8px;
		font-weight: 700;
		color: #fff;
		border-radius: 2px;
		box-shadow: inset 0 -2px 2px rgba(0,0,0,.12);
		user-select: none;
		-moz-user-select: none;
		cursor: pointer;
		height: 100%;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		&:active { color: rgba(255, 255, 255, .4); }
		&.extensao_fixa{
			background-color: #219653;
			cursor: unset;
		}
	}

	div.arquivo_extensao-box {
		position: absolute;
		right: 0;
		top: 0;
		background-color: #898989;
		width: intrinsic;
		width: max-content;
		width: -moz-max-content;
		padding: 8px 12px 12px 12px;
		color: #FFF;
		border-radius: 2px;
		box-shadow: 0 4px 4px rgba(0, 0, 0, .24);
		transform: scale(0);
		transform-origin: right top;
		transition: all ease-in .1s;
		z-index: 2;
		& > i {
			position: absolute;
			top: 0px;
			right: 0px;
			display: inline-block;
			text-align: center;
			width: 16px;
			height: 16px;
			border-radius: 0 2px 0 0;
			line-height: 14px;
			transition: all ease-in .1s;
			background-color: transparent;
			cursor: pointer;
			font-style: normal;
			&:hover { background-color: #FE4C4C; }
			&:active { background-color: #FFF; color: #FE4C4C; }
		}
		& > div.opcoes span {
			margin: 4px 2px 0 2px;
			&:first-child { margin-left: 0; }
			&:last-child { margin-right: 0; }
		}
		&.display { transform: scale(1); }
	}

	td button.excluirUrl {
		display: none;
		background-color: #FE4C4C;
		border: 0;
		padding: 0;
		width: 20px;
		height: 18px;
		line-height: 18px;
		color: #FFF;
		border-radius: 100%;
		cursor: pointer;
		&:active { color: #FE4C4C; background-color: transparent; }
	}
}
</style>