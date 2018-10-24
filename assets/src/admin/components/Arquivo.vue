<template>
	<div class="Arquivo">
		<slot></slot>
		<div class="informacoes">
			<table>
				<tr>
					<td width="10%">Nome público</td>
					<td width="90%">
						<input type="text" @keyup="charCount($event.target.value, $refs.urlCharCount)" placeholder="Flávia">						
						<span ref="urlCharCount" class="charCount">0/330</span>
					</td>
				</tr>
				<tbody ref="urls">
					<URL v-for="url in urlsInput" class="animate" :key="url.index" :props="props">URL {{ url.index+1 }}</URL>
				</tbody>
				<tr>
					<td colspan="2">
						<div class="addUrl" @click="insereUrl">
							Adicionar URL <button>+</button>
						</div>
					</td>
				</tr>
				<tr>
					<td>Descrição</td>
					<td>
						<textarea name="descricao" @keyup="charCount($event.target.value, $refs.descricaoCharCount)"></textarea>
						<span ref="descricaoCharCount" class="charCount">0/330</span>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
import URL from '../components/URL.vue'

export default {
	name: 'Arquivo',
	props: [ 'props', 'nArquivos' ],
	data() {
		return {
			urlsInput: [
				{ index: 0, endereco: '', tipo: '' }
			],
			idUrl: 0,
		}
	},
	components: {
		URL
	},
	created() {},
	mounted() {
		this.$refs.urls.firstElementChild.classList.remove("animate")
	},
	updated() {
	},
	methods: {
		mover(dir, evt) {
			let app = this
			// let pai = evt.target.parentNode.parentNode.parentNode.parentNode
			// let esteFilho = evt.target.parentNode.parentNode.parentNode
			// let irmaoAnterior = evt.target.parentNode.parentNode.parentNode.previousSibling
			// let irmaoPosterior = evt.target.parentNode.parentNode.parentNode.nextSibling
			// console.log([pai, esteFilho, irmaoAnterior, irmaoPosterior])
			// if (dir == 'cima') {
			// 	pai.insertBefore(esteFilho, irmaoAnterior)
			// console.log(this.$props.index)
			// } else if (dir == 'baixo') {
			// 	pai.insertBefore(esteFilho, irmaoPosterior)
			// } else { return false }
			// console.log(this.$props.index[this.$props.index.length-1].pos)
			// let temp = this.$props.index[this.$props.index.length-2]
			// this.$props.index[this.$props.index.length-2] = this.$props.index[this.$props.index.length-1]
			// this.$props.index[this.$props.index.length-1] = temp
			// if (dir == 'baixo') {
			// 	let temp = app.$el.parentNode.nextSibling.attributes.pos.value
			// 	app.$el.parentNode.nextSibling.attributes.pos.value = app.$el.parentNode.attributes.pos.value
			// 	app.$el.parentNode.attributes.pos.value = temp
			// } else if (dir == 'cima') {
			// 	let temp = app.$el.parentNode.previousSibling.attributes.pos.value
			// 	app.$el.parentNode.previousSibling.attributes.pos.value = app.$el.parentNode.attributes.pos.value
			// 	app.$el.parentNode.attributes.pos.value = temp
			// }
			// this.$el.parentNode.style.order = this.$el.parentNode.attributes.pos.value
			// this.$el.parentNode.nextSibling.style.order = this.$el.parentNode.nextSibling.attributes.pos.value
			console.log(this.$props.nArquivos)
		},
		charCount(txt, dest) {
			dest.innerText = txt.length + '/330'
			if (txt.length > 330) { dest.parentNode.firstElementChild.style.backgroundColor = '#FE4C4C'; dest.style.color = '#FE4C4C' }
			else { dest.style.color = "#BBB" }
		},
		insereUrl() {
			// let base = this.$refs.urls.lastChild
			// let clone = base.cloneNode(true)
			// clone.style.animation = "abreNovaUrl .2s ease-in"
			// clone.lastChild.lastElementChild.style.display = "block"
			// clone.firstElementChild.innerText = "URL " + this.i
			// this.$refs.urls.appendChild(clone)
			// this.i++
			this.urlsInput.push({ index: this.idUrl+1, endereco: '', tipo: ''})
			this.idUrl++
		}
	}
};
</script>

<style lang="scss">
div.Arquivo {
	display: flex;
	position: relative;
	column-gap: 36px;
	padding: 1rem 1rem 2rem 1rem;
	border-bottom: 2px solid #0073aa;

	div.acoes {
		display: flex;
		flex-flow: column nowrap;
		h6 {
			text-transform: uppercase;
			text-align: center;
			color: #898989;
			margin: 0;
		}
		button {
			border: none;
			padding: 8px 12px;
			border-radius: 2px;
			box-shadow: inset 0 -2px 2px rgba(0, 0, 0, .24);
			cursor: pointer;
			margin-top: 4px;
			background-color: #FFF;
			&:active { box-shadow: inset 0 0 2px rgba(0, 0, 0, .12); }
		}
		button.excluir {
			margin-top: 1rem;
			color: #FFF;
			font-weight: bold;
			background-color: #FE4C4C;
		}
	}
}

div.informacoes {
	width: 100%;
	input, textarea { width: 100%; margin: 0; padding: 4px 6px; }
	table {
		width: 100%;
		border-spacing: 0;
		tr {
			display: flex;
			flex-flow: row nowrap;
			align-items: center;
		}
		tr td {
			margin-bottom: 8px;
			span.charCount {
				align-self: flex-end;
				color: #BBB;
			}
		}
		tr td:first-child {
			text-align: right;
			padding-right: 12px;
			font-weight: bold;
			vertical-align: text-top;
			width: 80px;
		}
		tr td[colspan] {
			display: table-cell !important;
			padding-right: 0;

			div.addUrl {
				font-weight: normal;
				color: #888;
				display: inline-block;
				cursor: pointer;

				& > button {
					border: 1px solid transparent;
					border-radius: 100%;
					font-size: large;
					font-weight: bold;
					font-family: inherit;
					color: #FFF;
					background-color: #CCC;
					width: 24px;
					height: 24px;
					padding: 0 0 2px 0;
					display: inline-flex;
					justify-content: center;
					align-items: center;
					cursor: pointer;
				}

				&:active {
					opacity: .4;

					button {
						background-color: transparent;
						color: #CCC;
						border-color: #CCC;
						opacity: 1;
					}
				}
			}
		}
		tr td:last-child {
			display: flex;
			align-items: center;
			justify-content: space-between;
			column-gap: .4rem;
			width: 100%;
			input { width: 100%; }
			& > div {
				position: relative;
				& > * { box-sizing: border-box; }
				span {
					display: inline-block;
					height: 100%;
					background-color: #BBB;
					padding: 4px 8px;
					font-weight: bold;
					color: #FFF;
					border-radius: 2px;
					box-shadow: inset 0 -2px 2px rgba(0, 0, 0, .12);
					user-select: none;
					cursor: pointer;
					&:active { color: rgba(255, 255, 255, .4); }
				}
			}
		}
	}
}
</style>