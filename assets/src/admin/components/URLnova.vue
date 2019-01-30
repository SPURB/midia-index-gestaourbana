<script>
import { ptBr, validator } from '../mixins/formValidation'
import url from '../mixins/url' // o template está no mixin e se aplica também ao URL.vue

export default {
	name: 'UrlNova',
	props:{
		index: {
			type: Number,
			required: true 
		}
	},
	mixins:[ validator, url ],
	watch:{
        input(value){
            if(value){
                this.extensao = this.checkExtensao(value.replace(/ /g,'')) // remove espaços
                this.$store.commit('urls/SET_URL',{
                    url: value,
                    index: this.index
                })
            }
		},
        extensao(value){
            if(value){
				this.setExtensaoSpanValue(value)
                this.$store.commit('urls/SET_EXTENSAO',{
                    extensao: value,
                    index: this.index
                })
            }
        }
	},
	methods:{
		deletaUrl(){ 
			this.$store.commit('urls/RESET', { reset: this.index})
			if(this.urlNova !== undefined){
				this.input = this.urlNova.url
				this.extensao = this.urlNova.extensao
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/URL"
</style>