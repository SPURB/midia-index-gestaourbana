<script>
import { ptBr, validator } from '../mixins/formValidation'
import url from '../mixins/url' // o template está no mixin e se aplica também ao URLnova.vue

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
		}
	},
	mixins:[ validator, url ],
	watch:{
		input(value){
			if(value){
				// this.extensao = this.checkExtensao(value.replace(/ /g,'')) // remove espaços
				this.$store.commit('urls/CHANGE_URL',{
					// url: value,
					id: this.idUrl,
					// extensao: this.extensao,
					// idArquivo: this.urlArquivoClicado.idArquivo,
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
		urlArquivoClicado: {
			get(){ 
				const urls = this.$store.state.arquivoClicado.urls
				return urls[this.getIndex(urls, this.idUrl)]
			}
		}
	},
	mounted(){
		this.input = this.urlArquivoClicado.url
	},
	methods: {
		deletaUrl(evt){
			console.log(evt)
		},
		getIndex(arr, fileId){
			return arr.findIndex(item => parseInt(item.id) === fileId)
		},
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/URL"
</style>