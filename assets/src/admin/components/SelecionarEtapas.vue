<template>
	<select name="SelecionarEtapas" class="seletor--arquivo-etapa" v-model="estaEtapa" :value="estaEtapa">
		<option v-for="(etapa, index) in etapas" :value="etapa" :key="index">{{ etapa.nome }}</option>
	</select>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'SelecionarEtapas',
	props: {
		arquivos: {
			type: Array,
			required: true
		},
		idEtapa: {
			type: Number,
			required: true
		}
	},
	computed: { 
		...mapState('etapas', {
			etapas: state => state.etapas
		}),
		estaEtapa: {
			get() { return this.etapas.find(etapa => etapa.id === this.idEtapa) },
			set(etapa) {
				console.log(`atualizar arquivos ${this.arquivos.map(arquivo => arquivo.id)}. Nome nova etapa: ${etapa.nome}, id nova etapa: ${etapa.id}`)
			}
		},
	}
}
</script>
<style lang="scss" scoped>
.seletor--arquivo-etapa {
	// width: inherit
}

.h-etapa .seletor--arquivo-etapa {
	color: #FFF;
	background-color: transparent;
	font-size: 13px;
	border: unset;
	box-shadow: unset;
	transition: background-color ease-in-out .2s;
	&:hover{
		background-color:#04415f;
		cursor: pointer;
	}
}
</style>

