<template>
	<select name="selectSubEtapa" class="seletor--arquivo-subetapa" v-model="estaSubEtapa" :value="estaSubEtapa">
		<option v-for="(subetapa, index) in subetapas" :value="subetapa" :key="index">{{ subetapa.nome }}</option>
	</select>
</template>
<script>
import { mapState } from 'vuex'
export default {
	name: 'SelecionarSubEtapa',
	props: {
		idArquivo: {
			type: Number,
			required: true
		},
		idSubEtapa: {
			type: Number,
			required: true
		}
	},
	computed: { 
		...mapState('subetapas', {
			subetapas: state => state.subetapas
		}),
		estaSubEtapa: { 
			get() { return this.subetapas.find(subetapa => subetapa.id === this.idSubEtapa) },
			set(subetapa) {
				this.$store.commit('arquivos/UPDATE_ARQUIVO_CLICADO', {
					idEtapa: subetapa.id,
					nomeSubEtapa: subetapa.nome, 
					idArquivo: this.idArquivo
				})
			}
		},
	}
}
</script>

