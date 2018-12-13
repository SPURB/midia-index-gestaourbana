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
		inlinestyle:{ // exemplo <.. :inlinestyle="'background-color:purple'">
			required: false,
			type: String,
			default:''
		},
		commitName: {
			required: false,
			type: String,
			validator: valido =>  [ // ver commits em store/store.js
				'RESET_PROJETOS',
				'RESET_PROJETO',
				'arquivos/ABRE_BOX',
				'etapas/DISPLAY'
			].indexOf(valido) !== -1  
		},
		options:{ 
			required: false,
			default: undefined
		},
		action:{
			required: false,
			type: Object,
			name: {
				required: true,
				type: String,
				validator: valido =>  [ // ver actions em store/store.js
					'statusProjetos/put', 
					'etapas/postNovaEtapa',
					'arquivos/postNovoArquivo',
					'putProjeto' 
				].indexOf(valido) !== -1  
			},
			toChange:{ 
				required: true
			}
		},
	},

	computed:{
		fetching(){ return this.$store.state.fetching },
		disabledAndFetching(){ return this.disabledState || this.$store.state.fetching ? true : false },
	},

	methods:{
		commitOrAction(){
			if(this.commitName){
				switch(this.commitName){
					case 'etapas/DISPLAY': this.$store.commit('luzToggle'); break;
					case 'arquivos/ABRE_BOX' : 
						this.$store.commit('luzToggle')
						this.$store.commit('urls/RESET_ALL')
						break;
					case 'RESET_PROJETO' : this.$router.push({ path:'/' }); break;
					default : this.$store.commit(this.commitName) 
				}
				if(this.options !== undefined){
					this.$store.commit(this.commitName, this.options) 
				}
				else{
					this.$store.commit(this.commitName) 
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