<template>
	<tr> 
		<td>URL</td>
		<td>
			<input
				type="text"
				name="url"
				v-model="input"
				v-validate="'required|url'"
				:class="{'input': true, 'error': errors.has('url') }">
				<ErroSpan v-if="errors.first('url')!==undefined">{{ errors.first('url') }}</ErroSpan>
				<Extensao :input="input" :idExtensao="idExtensao" :idArquivo="idArquivo"></Extensao>
		</td>
	</tr>
</template>

<script>
import ErroSpan from '../components/ErroSpan.vue'
import Extensao from '../components/Extensao.vue'
import { ptBr, validator } from '../mixins/formValidation'
import { mapState } from 'vuex'

export default {
	name: 'URL',
	data () {
		return {
			input: '',
			initial: ''
		}
	},
	created() {
		this.initial = this.url
		this.input = this.url
	},
	watch: {
		input (val) {
			if (this.isValid && this.isTouched) this.url = val
		}
	},
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
	mixins:[ validator ],
	components:{ ErroSpan, Extensao },
	computed: {
		...mapState('urls', {
			tiposDeArquivo: state => state.tipos
		}),

		...mapState('arquivos', {
			arquivos: state => state.arquivos
		}),

		url: {
			get () {
				return this.arquivos.find(arquivo => parseInt(arquivo.id) === this.idArquivo).url
			},
			set (url) {
				this.$store.commit('arquivos/UPDATE_ARQUIVO_CLICADO',{
					url: url,
					idArquivo: this.idArquivo
				})
			}
		},
		idExtensao () { return parseInt(this.arquivos.find(arquivo => parseInt(arquivo.id) === this.idArquivo).id_extensao) },
		isValid () { return this.errors.items.length === 0 },
		isTouched () { return this.$validator.fields.items.filter( field => field.flags.changed ).length > 0  }, 
	}
}
</script>

<style lang="scss" scoped>
@import "../scss/URL"
</style>