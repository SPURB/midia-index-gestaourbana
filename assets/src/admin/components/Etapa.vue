<template>
	<div class="Etapa">
		<div class="h-etapa">
			<span>Etapa</span>
			<h3><slot name="nomeEtapa"></slot></h3>
			<div class="shortcode_expand">
				<span>Shortcode da etapa <code>[tabel id=1.1/]</code></span>
				<button @click="etapaCollapse($event)">&#9650;</button>
			</div>
		</div>
		<div class="arquivosTable">			
			<table>
				<thead>
					<th>Data de inclusão</th>
					<th>Nome</th>
					<th><img src="https://static.thenounproject.com/png/505631-200.png" style="height: 24px; width: 24px; vertical-align: bottom;" alt=""></th>
				</thead>
				<draggable v-model="arquivos" element="tbody" :options="{ draggable: '.tablerow', ghostClass: 'slot-vazio', animation: 50, scroll: true, scrollSensitivity: 80, scrollSpeed: 8 }">
					<tr v-for="arquivo in arquivos" class="tablerow">
						<td>{{ displayData(arquivo.inclusao) }}</td>
						<td><a href="">{{ arquivo.nome }}</a></td>
						<td><img src="https://www.materialui.co/materialIcons/action/reorder_black_192x192.png" style="height: 24px; width: 24px; vertical-align: bottom;" alt=""></td>
					</tr>
				</draggable>
			</table>
			<button class="adicionar-arquivo">+ Adicionar arquivo</button>
		</div>
	</div>
</template>

<script>
import Arquivo from '../components/Arquivo.vue'
import draggable from 'vuedraggable'
import AdicionarArquivo from '../components/AdicionarArquivo.vue'

export default {
	name: 'Etapa',
	props: [ 'props', 'etapaCounter' ],
	data() {
		return {
			arquivos: [
				{
					"id": 1,
					"nome": "Diagnóstico",
					"descricao": "Minuta de consulta pública para Programa de Interesse Público",
					"autoria": "devspurbanismo",
					"inclusao": "2018-08-21 18:37:28",
					"projetoId": 21,
					"projetoEtapa": 2,
					"etapaIndex": 1,
					destino: [
						{
							"urlid": 1,
							"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_V03.pdf",
							"extensao": "pdf"
						}
					]
				},
				{
					"id": 2,
					"nome": "Mapas",
					"descricao": "Mapas do Anexo I da Minuta de consulta pública",
					"autoria": "devspurbanismo",
					"inclusao": "2018-08-21 18:37:50",
					"projetoId": 21,
					"projetoEtapa": 2,
					"etapaIndex": 2,
					destino: [
						{
							"urlid": 1,
							"url": "http://minutapiuriobranco.gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/2016/04/PIU_RioBranco_ConsultaPublica_V03.pdf",
							"extensao": "pdf"
						}
					]
				},
				{
					"id": 3,
					"nome": "Ofício",
					"descricao": "Pedido de instauração de Projeto de Intervenção Urbana (PIU) relativo à área do Complexo Anhembi",
					"inclusao": "2018-08-21 19:11:38",
					"projetoId": 6,
					"projetoEtapa": 1,
					"etapaIndex": 1,
					destino: [
						{
							"urlid": 1,
							"url": "http://gestaourbana.prefeitura.sp.gov.br/wp-content/uploads/piu-monitoramento/ANH1_Oficio.pdf",
							"extensao": "pdf"
						}
					]
				}
			]
		}
	},
	components: {
		AdicionarArquivo, Arquivo, draggable
	},
	created() {},
	mounted() {
		let app = this
		for (let i = 0; i < this.$props.props.length; i++) {
			for (let j = 0; j < this.$props.props[i].etapas.length; j++) {
				for (let k = 0; k < this.$props.props[i].etapas[j].arquivos.length; k++) {
					this.$props.props[i].etapas[j].arquivos[k].nome
				}
			}
		}
	},
	updated() {},
	methods: {
		etapaCollapse(evt) {
			let divEtapa = evt.target.parentNode.parentNode.parentNode
			if (divEtapa.style.maxHeight != '40px') {
				divEtapa.style.maxHeight = '40px'
				evt.target.style.transform = 'rotate(180deg)'
			} else {
				divEtapa.style.maxHeight = '4000px'
				evt.target.style.transform = 'rotate(0deg)'
			}
		},
		displayData(data) {
			let aaaa = data.slice(0,4)
			let mm = data.slice(5,7)
			let dd = data.slice(8,10)
			let h = data.slice(11,16)
			return dd+'/'+mm+'/'+aaaa+' ('+h+')'
		}
	}
};
</script>

<style lang="scss">
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
		h3 {
			display: inline-block;
			color: #FFF;
		}
		& > div.shortcode_expand {
			display: inline-flex;
			align-items: center;
			float: right;
			height: 100%;
			color: rgba(255, 255, 255, .4);
			button {
				margin: 0 0 0 12px;
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
				a { text-decoration: none; }
			}
			tr:nth-child(even) td { background: #F8F8F8; }
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
			right: 20px;
			bottom: 20px;
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
		}
	}
}
</style>