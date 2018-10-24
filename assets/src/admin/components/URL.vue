<template>
	<tr class="URL" :class="{ esconde: excluir }">
		<td><slot></slot></td>
		<td>
			<input type="text">
			<div>
				<span @click="extensaoBoxShow = !extensaoBoxShow">KML</span>
				<div class="arquivo_extensao-box" :class="{ display: extensaoBoxShow }" ref="extensaoBox">
					Selecione o tipo de arquivo <i @click="extensaoBoxShow = !extensaoBoxShow">&times;</i>
					<div class="opcoes">
						<span v-for="arquivo in tipoDeArquivo" @click="alteraTipoDeArq">{{ arquivo.extensao }}</span>
					</div>					
				</div>
			</div>
			<button class="excluirUrl" @click="deletaUrl($event)">&times;</button>
		</td>
	</tr>
</template>

<script>
	export default {
		name: 'URL',
		props: [ 'props' ],
		data() {
			return {
				extensaoBoxShow: false,
				tipoDeArquivo: [
					{ index: 0, extensao: 'KML' },
					{ index: 1, extensao: 'PDF' },
					{ index: 2, extensao: 'KML' },
					{ index: 3, extensao: 'SHP' },
					{ index: 4, extensao: 'DOC' }
				],
				excluir: false
			}
		},
		methods: {
			alteraTipoDeArq(evt) {
				this.extensaoBoxShow = false
				evt.target.parentNode.parentNode.parentNode.firstElementChild.innerText = evt.target.innerText
			},
			deletaUrl(evt) {
				// evt.target.parentNode.parentNode.firstElementChild.innerText.slice(4, this.length)
				this.excluir = true
			}
		}
	};
</script>

<style lang="scss">
tr.URL {
	transition: all ease-in-out .2s;

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
		& > div.opcoes span {
			margin: 4px 2px 0 2px;
			&:first-child { margin-left: 0; }
			&:last-child { margin-right: 0; }
		}
		&.display { transform: scale(1); }
	}

	td button.excluirUrl {
		display: none;
		background-color: #FE4C4C;
		border: 0;
		padding: 0;
		width: 20px;
		height: 18px;
		line-height: 18px;
		color: #FFF;
		border-radius: 100%;
		cursor: pointer;
		&:active { color: #FE4C4C; background-color: transparent; }
	}

	@keyframes abreNovaUrl {
		from { max-height: 0px; opacity: 0; }
		to { max-height: 100px; opacity: 1; }
	}

	&.animate {
		animation: abreNovaUrl .2s ease-in;
		td button.excluirUrl { display: block; }
	}

	&.esconde {
		transform: translateX(112%);
		height: 0px;
		opacity: 0;
	}
}
</style>