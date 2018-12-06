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
	data(){
		return {
			camposValidados: false
		}
	},
	methods:{
		validateAll() {
			this.$validator.validateAll()
				.then((result) =>  this.camposValidados = result)
		}
	}
}
export { ptBr, validator }