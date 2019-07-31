<template>
	<select name="SelecionarEtapas" class="seletor--arquivo-etapa select-css" v-model="estaEtapa" :value="estaEtapa.nome">
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
		}
	}
}
</script>
