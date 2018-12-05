import ptBr from 'vee-validate/dist/locale/pt_BR'

const validator = {
	$_veeValidate: {
		validator: 'new' // give me my own validator scope.
	},
	mounted(){
		this.$validator.localize('ptBr', {
			messages: ptBr.messages
		})
	},
	computed:{
		statusBotao(){
			if(this.fields.nome){ // fazer validacao aqui
				return this.fields.nome.pristine ? this.fields.nome.valid : false
			}
			else if(this.fields.novaetapa){
				return this.fields.novaetapa.pristine ? this.fields.novaetapa.valid : false
			}
			else{ return false }
		}
	}
}
export { ptBr, validator }