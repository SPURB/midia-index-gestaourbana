<template>
	<tr class="fonte">
		<td>
			<label for="fonte">Fonte</label>
		</td>
		<td>
			<input
				type="text"
				ref="fonte"
				id="fonte"
				name="Fonte"
				v-model="fonte"
				v-validate="'max:200'">
				<span v-if="!errors.has('Fonte')">{{ charNumber }}/200</span>
				<ErroSpan v-if="errors.has('Fonte')">{{ errors.first('Fonte') }}</ErroSpan>
		</td>
	</tr>
</template>
<script>
import { ptBr, validator } from '../mixins/formValidation'
import ErroSpan from '../components/ErroSpan.vue'
import { mapState } from 'vuex'

export default {
	name: 'Fonte',
	props: {
		idArquivo: {
			type: Number,
			required: true
		},
		novoArquivo: {
			type: Boolean,
			required: true
		}
	},
	computed:{
		...mapState('arquivos',{
			arquivos: state => state.arquivos
		}),
		
		fonte: {
			get () {
				if (!this.novoArquivo) {
					return this.arquivos.find(arquivo => arquivo.id === this.idArquivo).fonte
				}
				else return 'Inclua uma fonte'
			},
			set (fonte) {
				this.$store.commit('arquivos/UPDATE_ARQUIVO_CLICADO', { fonte: fonte, idArquivo: this.idArquivo })
			}
		},

		charNumber() { return this.fonte.length },
	},
	mixins:[ validator ],
	components: {
		ErroSpan
	}
}
</script>
