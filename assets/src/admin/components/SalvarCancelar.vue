<template>
	<div class="SalvarCancelar">
		<a  :class="[tipo, { disabled: disabledAndFetching }]"
			:style="inlinestyle"
			:disabled="disabledAndFetching"
			@click="commitOrAction">
			<span v-if="!fetching">{{ texto }}</span>
			<span v-if="fetching">Carregando</span></a>
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
		action:{
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
			toChange:{ 
				required: true
			}
		}
	},

	computed:{
		fetching(){ return this.$store.state.fetching },
		projetos(){ return this.$store.state.projetos },
		projeto(){ return this.$store.state.projeto },
		disabledAndFetching(){ return this.disabledState || this.$store.state.fetching ? true : false }
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
				this.$store.dispatch(this.action.name, this.action.toChange)
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
			pointer-events: none;
		}
	}
}
</style>