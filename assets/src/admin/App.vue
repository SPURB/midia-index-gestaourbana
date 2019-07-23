<template>
	<div id="vue-backend-app">
		<router-view/>
		<div ref="luz" class="luz" :class="{ apagada: LUZ_TOGGLE }"></div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'App',
	computed: {
		...mapState('ui',{
			LUZ_TOGGLE: state => state.apagaLuz
		})
	},
	created() { this.$store.dispatch('fetchProjetos') },
	watch:{
		'$route'(to){
			this.$store.dispatch('fetchInfoProjeto', to.params.id)
		},
		LUZ_TOGGLE(state){ 
			if(state){ this.$refs.luz.scrollIntoView({behavior:"smooth"})}
		}
	}
}
</script>

<style lang="scss">
div#vue-backend-app {
	*[class] h1 { font-weight: bold; }

	button, input, textarea { margin: 0; font-family: inherit; }
	code {
		color: initial;
		position: relative;
		transition: all ease-in-out .2s;

		&::after {
			content: "Copiar";
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			background-color: rgba(0, 0, 0, .8);
			color: #FFF;
			text-transform: uppercase;
			font-size: smaller;
			opacity: 0;
			transition: all ease-in-out .2s;
		}

		&:hover {
			cursor: pointer;
			&::after { opacity: 1; }
		}

		&:active::after {
			content: 'Copiado!';
			background-color: #FFF;
			color: initial;
			transition: none;
		}
	}

	div.luz {
		position: absolute;
		top: 0;
		bottom: 0;
		left: -20px;
		width: calc(100% + 20px);
		background-color: transparent;
		overflow: hidden;
		z-index: -1;
		transition: all .4s ease-in-out;
		
		&.apagada {
			background-color: rgba(0, 0, 0, .8);
			z-index: 1;
		}
	}
}
</style>