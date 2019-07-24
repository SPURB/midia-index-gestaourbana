<template>
	<div class="Etapa" v-if="existeArquivos">
		<div class="h-etapa">
			<span>Etapa</span>
			<input type="text" name="nome" v-model="nomeEtapa">
			<div class="shortcode_expand">
				<span>Shortcode da etapa <code @click="copiaSlug($event)">[arquivos-gu-{{ idProjeto }}.{{ idEtapa }}]</code></span>
				<button @click="etapaCollapse($event)">&#9650;</button>
			</div>
		</div>
		<div class="arquivosTable">
			<table>
				<thead>
					<th>Última modificação</th>
					<th>Sub etapa</th>
					<th>Nome</th>
					<th>
					<svg width="20" height="20" style="vertical-align: bottom" alt="arquivos" viewBox="0.14 841.445 24 24"><path d="M23.14 849.69l-5.491-5.056-5.491 5.056 1.496 1.62 2.892-2.669v12.519h2.206v-12.519l2.892 2.669zM7.734 858.25v-12.52H5.528v12.52l-2.892-2.669L1.14 857.2l5.491 5.057 5.492-5.057-1.497-1.619z"/></svg>
					</th>
				</thead>
				<draggable 
					v-model="arquivos"
					tag="tbody" 
					@end="etapaAlterada" 
					draggable=".tablerow" 
					ghostClass="slot-vazio" 
					animation="50" 
					scroll="true" 
					scrollSensitivity="80"
					scrollSpeed="8"
					>
					<tr 
						v-for="(arquivo, index) in arquivosFiltrados" 
						class="tablerow" 
						:key="index">
						<td>{{ displayData(arquivo.atualizacao) }}</td>
						<td>{{ displaySubetapa(arquivo.id_subetapa) }}</td>
						<td><a 
								@click="abreEditArquivoBox(arquivo)"
								:id="arquivo.id"
								>{{ arquivo.nome }}</a></td>
						<td>
						<a><svg 
							class="draggableIcon" 
							width="24" 
							height="24" 
							viewBox="0 0 24 24" 
							alt="reordenar" 
							style=" vertical-align: bottom"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/></svg></a>
						</td>
					</tr>
				</draggable>
			</table>
			<transition	name="adicionarArquivoFade">
				<button v-show="!collapsed" class="adicionar-arquivo" @click="novoArquivo">+ Adicionar arquivo</button>
			</transition>
		</div>


		<EditarArquivo 
			v-if="editarArquivo"
			:idEtapa="idEtapa"
		>
		</EditarArquivo>
		<AdicionarArquivo 
			v-if="abreNovoArquivo"
			:idEtapa="idEtapa">
		</AdicionarArquivo>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import draggable from 'vuedraggable'
import AdicionarArquivo from '../components/AdicionarArquivo.vue'
import EditarArquivo from '../components/EditarArquivo.vue'
import trataSlug from '../mixins/trataSlug'
import { async } from 'q';

export default {
	name: 'Etapa',
	mixins:[ trataSlug ],
	props: {
		idEtapa: {
			type: Number,
			required: true
		},
		idProjeto: {
			type: Number,
			required: true
		}, 
		busca:{
			type: String,
			required: true,
			default: ''
		}
	},
	data(){
		return {
			collapsed: false,
			existeArquivos: true
		}
	},
	components: {
		EditarArquivo,
		AdicionarArquivo,
		draggable
	},
	computed: {
		...mapState('arquivos', {
			editarArquivo: state => state.editBox,
			abreNovoArquivo: state => state.box,
			novoArquivoResponse: state => state.response
		}),

		...mapState('subetapas', {
			subetapas: state => state.subetapas
		}),

		arquivos: {
			get () {
				return this.$store.state.arquivos.arquivos
					.filter(arquivo => {
						if(parseInt(arquivo.id_etapa) === parseInt(this.idEtapa)) return arquivo
					})
					.sort((arquivoA, arquivoB) => arquivoA.posicao - arquivoB.posicao)
			},
			set (arquivos) {
				const ordered = arquivos.map(arquivo => {
					const index = arquivos.indexOf(arquivo)
					arquivo.posicao = index + 1
					return arquivo
				})

				this.$store.commit('arquivos/REORDER', {
					arquivos: arquivos
				})
			}

		},
		arquivosFiltrados(){
			const app = this
			const output = this.arquivos
				.filter(arquivo => arquivo.nome.toLowerCase().indexOf(app.busca.toLowerCase()) >= 0)

			return output
		},
		nomeEtapa: {
			get () {
				return this.$store.state.etapas.etapas[this.indexEtapas(this.idEtapa)].nome
			},
			set(value){
				this.$store.commit('etapas/UPDATE_ETAPA_NOME', {
					index: this.indexEtapas(this.idEtapa),
					nome: value
				})
				this.$store.commit('etapas/ETAPA_NOME_MUTATED', true)
			}
		},
	},
	watch: {
		arquivosFiltrados(val) {
			if (val.length) this.existeArquivos = true
			else this.existeArquivos = false
		},
		novoArquivoResponse(state) {
			if(state){
				this.$store.dispatch('urls/setNovasUrls', { id: state, idEtapa: this.idEtapa })
				this.$store.commit('arquivos/RESET_RESPONSE')
			}
		}
	},
	methods: {
		displaySubetapa(id) {
			if(this.subetapas.length) {
				try { return this.subetapas.find(subetapa => parseInt(subetapa.id) === parseInt(id)).nome }
				catch { return `Subetapa indefinida id: ${id}` }
			}
			else id
		},
		etapaAlterada () {
			this.$store.commit('etapas/SET_ETAPAS_ALTERADAS', this.idEtapa)
		},
		indexEtapas (idEtapa) { return this.$store.state.etapas.etapas.findIndex(i => i.id === idEtapa)},
		etapaCollapse(evt) {
			let divEtapa = evt.target.parentNode.parentNode.parentNode
			if (divEtapa.style.maxHeight != '40px') {
				divEtapa.style.maxHeight = '40px'
				evt.target.style.transform = 'rotate(180deg)'
			} else {
				divEtapa.style.maxHeight = '1000px'
				evt.target.style.transform = 'rotate(0deg)'
			}
			this.collapsed = !this.collapsed
		},
		displayData (data) {
			let aaaa = data.slice(0,4)
			let mm = data.slice(5,7)
			let dd = data.slice(8,10)
			let h = data.slice(11,16)
			return dd+'/'+mm+'/'+aaaa+' ('+h+')'
		},
		novoArquivo () {
			this.$store.commit('arquivos/SET_ID_ETAPA', { idEtapa: this.idEtapa })
			this.$store.commit('ui/LUZ_TOGGLE')
			this.$store.commit('arquivos/ABRE_BOX')
		},
		abreEditArquivoBox (arquivo) {
			if(arquivo.itemNovo === true){
				this.$store.dispatch('infoProjeto/getNovoArquivo', { idArquivo: arquivo.id })
			}
			this.$store.commit('ui/LUZ_TOGGLE')
			this.$store.commit('arquivos/ABRE_EDIT_BOX', arquivo.id)
		}
	}
}
</script>

<style lang="scss" scoped>
div.Etapa {
	display: flex;
	flex-flow: column nowrap;
	margin: 12px 0 0 0;
	border: 1px solid #DDD;
	border-radius: 4px 4px 2px 2px;
	min-height: 40px;
	max-height: unset;
	overflow: hidden;
	transition: all ease-in-out .2s;

	div.h-etapa {
		padding: 8px 12px;
		box-sizing: border-box;
		border-bottom: 1px solid #DDD;
		background-color: #0073aa;

		& > span {
			color: rgba(255, 255, 255, .4);
			margin-right: 4px;
		}

		input {
			color: #FFF;
			background-color:#066898;
			font-size: 13px;
			font-weight: 700;
			border: unset;
			box-shadow: unset;
			transition: background-color ease-in-out .2s;
			&:hover{
				background-color:#04415f;
				cursor: pointer;
			}
		}

		& > div.shortcode_expand {
			display: inline-flex;
			align-items: center;
			float: right;
			height: 100%;
			color: rgba(255, 255, 255, .4);

			button {
				margin: 0 0 0 12px !important;
				padding: 0;
				border: 0;
				background-color: transparent;
				color: rgba(255, 255, 255, .4);
				transition: all ease-out .2s;
				cursor: pointer;
				transform-origin: center 61%;
				&:hover { color: initial; }
			}

			code { color: #FFF; }
		}
	}

	div.arquivosTable {
		position: relative;

		table {
			width: 100%;
			border-collapse: collapse;

			thead { box-shadow: 0 2px 2px rgba(0, 0, 0, .12); }

			thead th {
				text-align: left;
				font-weight: normal;
				padding: 8px 0 8px 12px;
				border-bottom: 1px solid #DDD;
				&:first-child { width: 10%; min-width: 120px; }
				&:last-child { width: 1px; padding-right: 12px; }
				color: #898989;
			}

			tbody tr.tablerow td {
				padding: 8px 0 8px 12px;
				transition: all .2s;

				&:first-child { width: 10%; min-width: 120px; }

				&:last-child {
					width: 1px;
					padding-right: 12px;

					i, img { cursor: move; }
				}

				& > * {	user-select: none; -moz-user-select: none; }

				a {
					text-decoration: none;
					cursor: pointer;
					&::after {
						content: 'Editar';
						font-size: 10px;
						text-transform: uppercase;
						vertical-align: top;
						background-color: rgba(0, 0, 0, .4);
						color: #FFF;
						padding: 0 4px;
						border-radius: 2px;
						margin-left: 8px;
						display: none;
					}
					&:hover::after { display: inline-block; }
				}
			}

			tr:nth-child(even) td { background: #F9F9F9; }
			tr:hover td { background: #EEE; }

			tr:active td, tr.slot-vazio td {
				background: #5b9dd9;
				color: #FFF;
				a { color: #FFF; }
			}

			& > * {
				user-select: none;
				-moz-user-select: none;
			}
		}

		button.adicionar-arquivo {
			position: absolute;
			right: 40px;
			bottom: 7px;
			height: 40px;
			border-radius: 20px;
			border: 0;
			padding: 0 16px;
			color: #FFF;
			background-color: #fe4c4c;
			box-shadow: 0 4px 4px rgba(0, 0, 0, .24);
			cursor: pointer;
			transition: all ease-in-out .2s;

			&:hover {
				box-shadow: 0 8px 8px rgba(0, 0, 0, .24);
				transform: translateY(-4px);
			}

			&:active {
				background-color: #FFF;
				color: #fe4c4c;
			}
			/* 
			vue cria estas classes entre os elementos da 
			diretiva <transition name="adicionarArquivoFade"> */
			// .adicionarArquivoFade-enter-active, 
			&.adicionarArquivoFade-leave-active {
				transition: opacity .1s;
			}
			// .adicionarArquivoFade-enter, // 
			&.adicionarArquivoFade-leave-to {
				opacity: 0;
			}

		}
	}
}
</style>