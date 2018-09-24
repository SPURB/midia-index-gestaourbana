<template>
	<div class="Arquivo">
		<div class="acoes">
			<h6>Mover</h6>
			<button class="mover">&uarr;</button>
			<button class="mover">&darr;</button>
			<button class="excluir">Excluir</button>
		</div>
		<div class="informacoes">
			<table>
				<tr>
					<td width="10%">Nome público</td>
					<td width="90%">
						<input type="text" @keyup="charCount($event.target.value, $refs.urlCharCount)">						
						<span ref="urlCharCount" class="charCount">0</span>
					</td>
				</tr>
				<tbody ref="urls">
					<URL v-for="url in urlsInput" class="animate" :key="url.index">URL {{ url.index+1 }}</URL>
				</tbody>
				<tr>
					<td colspan="2">
						Adicionar URL <button @click="insereUrl">+</button>
					</td>
				</tr>
				<tr>
					<td>Descrição</td>
					<td>
						<textarea name="descricao" @keyup="charCount($event.target.value, $refs.descricaoCharCount)"></textarea>
						<span ref="descricaoCharCount" class="charCount">0</span>
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
	data() {
		return {
			urlsInput: [
				{ index: 0, endereco: '', tipo: '' }
			],
			idUrl: 0,
			nUrl: 2,
		}
	},
	components: {
		URL
	},
	created() {},
	mounted() {
		this.$refs.urls.firstElementChild.classList.remove("animate")
	},
	updated() {},
	methods: {
		charCount(txt, dest) { dest.innerText = txt.length },
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
			font-weight: normal;
			color: #888;

			button {
				margin: 0 0 1rem 0;
				border: 1px solid transparent;
				border-radius: 100%;
				font-size: large;
				font-weight: bold;
				font-family: inherit;
				color: #FFF;
				background-color: #CCC;
				width: 24px;
				height: 24px;
				cursor: pointer;
				padding: 0 0 2px 0;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				&:active { background-color: transparent; color: #CCC; border-color: #CCC; }
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