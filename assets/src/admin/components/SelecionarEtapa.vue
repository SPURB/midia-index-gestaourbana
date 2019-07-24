<template>
	<tr class="seletor--arquivos">
		<td>
			<label for="selectEtapa">Etapa</label>
		</td>
		<td>
			<select name="selectEtapa" class="seletor--arquivo-etapa" v-model="estaEtapa" :value="estaEtapa">
				<option v-for="(etapa, index) in etapas" :value="etapa" :key="index">{{ etapa.nome }}</option>
			</select>
			<div><!-- btn placeholder --></div>

		</td>
		
	</tr>
</template>
<script>
import { mapState } from 'vuex'
export default {
	name: 'SelecionarEtapa',
	props: {
		idArquivo: {
			type: Number,
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
				this.$store.commit('arquivos/UPDATE_ARQUIVO_CLICADO', {
					idEtapa: etapa.id,
					nomeEtapa: etapa.nome, 
					idArquivo: this.idArquivo
				})
			}
		},
	}
}
</script>
<style lang="scss" scoped>
.seletor--arquivo-etapa {
	width: inherit
}
</style>

