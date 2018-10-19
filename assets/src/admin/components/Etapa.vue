<template>
	<div class="etapa">
		<div class="h-etapa">
			<h3><slot></slot></h3>
			<div class="shortcode_expand">
				<span>Shortcode da etapa <code>[tabel id=1.1/]</code></span>
				<button @click="etapaCollapse($event)">&#9650;</button>
			</div>
		</div>
		<div class="arquivo-cont" v-for="n in nArquivos.slice().sort(function(a, b) { return a.pos - b.pos })">
			<Arquivo :nArquivos="nArquivos" :key="n.pos">				
				<div class="acoes">
					<h6>Mover</h6>
					<button class="mover" @click="mover('cima', $event)">&uarr;</button>
					<button class="mover" @click="mover('baixo', $event)">&darr;</button>
					<button class="excluir">Excluir</button>
				</div>
			</Arquivo>
			<button @click="insereArquivo($event)">Inserir um arquivo aqui</button>
		</div>
	</div>
</template>

<script>
import Arquivo from '../components/Arquivo.vue'

export default {
	name: 'Etapa',
	props: [ 'etapaCounter' ],
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
	mounted() {},
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
			console.log(this.nArquivos[this.arqCounter-1].pos)
		}
	}
};
</script>

<style lang="scss">
</style>