import ErroSpan from '../components/ErroSpan.vue'

export default {
	template: `<tr> 
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
	</tr>`,
	data() {
		return {
			input:'',
			displayExtensao: false,
			displayExtensaoBox: false,
			extensao:'',
			extensaoFixa: true
		}
	},
	components:{ ErroSpan },
	computed:{
		tiposDeArquivo() { return this.$store.state.urls.tiposDeArquivo },
	},
	methods:{
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