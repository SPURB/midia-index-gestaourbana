<template>
	<div class="SalvarCancelar">
		<a  :class="[tipo, { disabled: disabledState }]"
			:style="inlinestyle"
			:disabled="disabledState"
			@click="commitOrAction"
			>{{ texto }}</a>
		<div v-if="isFetching">fetching</div>
	</div>
</template>
<script>

export default{
	name:"SalvarCancelar",
	props:{
		tipo:{
			required: true,
			type: String, 
			validator: valido =>  [
				'salvar', 
				'cancelar'
			].indexOf(valido) !== -1  // strings válidas para cancelar ou salvar
		},
		texto: {
			required: true,
			type: String
		},
		disabledState:{
			required: false,
			type: Boolean,
			deafault: true
		},
		inlinestyle:{
			required: false,
			type: String,
			default:''
		},
		commitName: {
			required: false,
			type: String,
			validator: valido =>  [ // ver commits em store/store.js
				'RESET_PROJETOS',
				'RESET_PROJETO'
			].indexOf(valido) !== -1  
		},
		actionName:{
			required: false,
			type: Object,
			name: {
				required: true,
				type: undefined,
				validator: valido =>  [ // ver actions em store/store.js
					'putProjetos', 
					'putProjeto', 
				].indexOf(valido) !== -1  
			},
			parameter:{ 
				required: true
			}
		}
	},
	computed:{
		isFetching(){ return this.$store.state.fetching},
		projetos(){ return this.$store.state.projetos }
	},
	methods:{
		commitOrAction(){
			if(this.commitName){
				this.$store.commit(this.commitName) 
				if(this.commitName == 'RESET_PROJETO'){
					 this.$router.push({ path:'/' })
				}
			}
			else{
				this.$store.dispatch(this.actionName.name, this.actionName.parameter)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
div.SalvarCancelar {
	width: 100%;
	a {
		text-decoration: none;
		margin: 0;
		font-family: inherit;
		font-size: large;
		border: 0;
		padding: 20px 32px;
		border-radius: 2px;
		cursor: pointer;
		color: #FFF;
		box-shadow: inset 0 -2px 2px rgba(0, 0, 0, .24);
		position: relative;
		overflow: hidden;
		transition: opacity ease-in-out .2s;
		&.cancelar { float: left; background-color: #FE4C4C; }
		&.salvar { float: right; background-color: #219653; }
		&:hover { opacity: 0.85 }
		&.disabled {
			background-color: grey;
			opacity: .4;
			-moz-user-select: none;
			user-select: none;
			cursor: not-allowed;
		}
	}
}
</style>