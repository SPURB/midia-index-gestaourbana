<template>
	<div class="etapa">
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
				<tr draggable="true">
					<td>34/05/2018 (18:11)</td>
					<td><a href="">Nome do arquivo</a></td>
					<td><img src="https://www.materialui.co/materialIcons/action/reorder_black_192x192.png" style="height: 24px; width: 24px; vertical-align: bottom;" alt=""></td>
				</tr>
				<tr draggable="true">
					<td>34/05/2018 (18:11)</td>
					<td><a href="">Nome do arquivo</a></td>
					<td><img src="https://www.materialui.co/materialIcons/action/reorder_black_192x192.png" style="height: 24px; width: 24px; vertical-align: bottom;" alt=""></td>
				</tr>
				<tr draggable="true">
					<td>34/05/2018 (18:11)</td>
					<td><a href="">Nome do arquivo</a></td>
					<td><img src="https://www.materialui.co/materialIcons/action/reorder_black_192x192.png" style="height: 24px; width: 24px; vertical-align: bottom;" alt=""></td>
				</tr>
				<tr draggable="true">
					<td>34/05/2018 (18:11)</td>
					<td><a href="">Nome do arquivo</a></td>
					<td><img src="https://www.materialui.co/materialIcons/action/reorder_black_192x192.png" style="height: 24px; width: 24px; vertical-align: bottom;" alt=""></td>
				</tr>
				<tr draggable="true">
					<td>34/05/2018 (18:11)</td>
					<td><a href="">Nome do arquivo</a></td>
					<td><img src="https://www.materialui.co/materialIcons/action/reorder_black_192x192.png" style="height: 24px; width: 24px; vertical-align: bottom;" alt=""></td>
				</tr>
				<tr draggable="true">
					<td>34/05/2018 (18:11)</td>
					<td><a href="">Nome do arquivo</a></td>
					<td><img src="https://www.materialui.co/materialIcons/action/reorder_black_192x192.png" style="height: 24px; width: 24px; vertical-align: bottom;" alt=""></td>
				</tr>
				<tr draggable="true">
					<td>34/05/2018 (18:11)</td>
					<td><a href="">Nome do arquivo</a></td>
					<td><img src="https://www.materialui.co/materialIcons/action/reorder_black_192x192.png" style="height: 24px; width: 24px; vertical-align: bottom;" alt=""></td>
				</tr>
				<tr draggable="true">
					<td>34/05/2018 (18:11)</td>
					<td><a href="">Nome do arquivo</a></td>
					<td><img src="https://www.materialui.co/materialIcons/action/reorder_black_192x192.png" style="height: 24px; width: 24px; vertical-align: bottom;" alt=""></td>
				</tr>
			</table>
		</div>
		<!-- <div class="arquivo-cont" v-for="n in nArquivos.slice().sort(function(a, b) { return a.pos - b.pos })">
			<Arquivo :nArquivos="nArquivos" :key="n.pos" :props="props">
				<div class="acoes">
					<h6>Mover</h6>
					<button class="mover" @click="mover('cima', $event)">&uarr;</button>
					<button class="mover" @click="mover('baixo', $event)">&darr;</button>
					<button class="excluir">Excluir</button>
				</div>
			</Arquivo>
			<button @click="insereArquivo($event)">Inserir um arquivo aqui</button>
		</div> -->
	</div>
</template>

<script>
import Arquivo from '../components/Arquivo.vue'

export default {
	name: 'Etapa',
	props: [ 'props', 'etapaCounter' ],
	data() {
		return {
			nArquivos: [ { pos: 1 } ],
			arqCounter: 1,
		}
	},
	components: {
		Arquivo
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
		insereArquivo(evt) {
			this.arqCounter++
			this.nArquivos.push({ pos: this.arqCounter })
		},
		mover(dir, evt) {
			console.log(this.nArquivos[this.evt.target.parentNode].pos)
		}
	}
};
</script>

<style lang="scss">
</style>