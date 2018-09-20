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
					<URL>URL 1</URL>
				</tbody>
				<tr>
					<td colspan="2">
						<button @click="insereUrl">Inserir mais uma URL</button>
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
		<button>Incluir um arquivo aqui</button>
	</div>
</template>

<script>
import URL from '../components/URL.vue'

export default {
	name: 'Arquivo',
	data() {
		return {
			i: 2,
		}
	},
	components: {
		URL,
	},
	created() {},
	mounted() {},
	updated() {},
	methods: {
		charCount(txt, dest) { dest.innerText = txt.length },
		insereUrl() {
			let base = this.$refs.urls.lastChild
			let clone = base.cloneNode(true)
			clone.firstElementChild.innerText = "URL " + this.i
			this.$refs.urls.appendChild(clone)
			this.i++
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

	& > button {
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
		bottom: -1px;
		background: #0073aa;
		border: 0;
		border-radius: 2px 2px 0 0;
		color: #FFF;
		font-weight: bold;
		cursor: pointer;
		font-size: xx-small;
		text-transform: uppercase;
		padding: 0 4px;
		&:active { color: rgba(255, 255, 255, .4); }
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
			button {
				margin: 0 0 .4rem 0;
				border: 1px solid #DDD;
				border-radius: 2px;
				font-size: smaller;
				text-transform: uppercase;
				font-weight: normal;
				color: #CCC;
				background-color: transparent;
				padding: 4px 8px;
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
				div.arquivo_extensao-box {
					position: absolute;
					right: 0;
					top: 30px;
					background-color: #898989;
					width: intrinsic;
					width: max-content;
					width: -moz-max-content;
					padding: 8px 12px 12px 12px;
					color: #FFF;
					border-radius: 2px;
					box-shadow: 0 4px 4px rgba(0, 0, 0, .24);
					transform: scale(0);
					transform-origin: right top;
					transition: all ease-in .1s;
					z-index: 2;
					& > i {
						position: absolute;
						top: 0px;
						right: 0px;
						display: inline-block;
						text-align: center;
						width: 16px;
						height: 16px;
						border-radius: 0 2px 0 0;
						line-height: 14px;
						transition: all ease-in .1s;
						background-color: transparent;
						cursor: pointer;
						&:hover { background-color: #FE4C4C; }
						&:active { background-color: #FFF; color: #FE4C4C; }
					}
					& > form {
						margin-top: 8px;
						input[type=radio] { display: none; }
						label {
							display: inline-block;
							height: 100%;
							background-color: #BBB;
							padding: 4px 8px;
							font-weight: bold;
							border-radius: 2px;
							box-shadow: inset 0 -2px 2px rgba(0, 0, 0, .12);
							&:active { color: rgba(255, 255, 255, .4); background-color: #777; }
						}
					}
					&.display { transform: scale(1); }
				}
			}
		}
	}
}
</style>