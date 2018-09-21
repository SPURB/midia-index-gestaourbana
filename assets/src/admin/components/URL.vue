<template>
	<tr class="URL">
		<td><slot></slot></td>
		<td>
			<input type="text">
			<div>
				<span @click="extensaoBoxShow = !extensaoBoxShow">KML</span>
				<div class="arquivo_extensao-box" :class="{ display: extensaoBoxShow }" ref="extensaoBox">
					Selecione o tipo de arquivo <i @click="extensaoBoxShow = !extensaoBoxShow">&times;</i>
					<form name="arquivo" ref="form" @click="alteraTipoDeArq">
						<label for="arquivo_kmz" @click="extensaoBoxShow = !extensaoBoxShow">KMZ</label>
						<input type="radio" name="arquivo" value="KMZ" id="arquivo_kmz">
						<label for="arquivo_pdf" @click="extensaoBoxShow = !extensaoBoxShow">PDF</label>
						<input type="radio" name="arquivo" value="PDF" id="arquivo_pdf">
						<label for="arquivo_kml" @click="extensaoBoxShow = !extensaoBoxShow">KML</label>
						<input type="radio" name="arquivo" value="KML" id="arquivo_kml" checked>
						<label for="arquivo_shp" @click="extensaoBoxShow = !extensaoBoxShow">SHP</label>
						<input type="radio" name="arquivo" value="SHP" id="arquivo_shp">
						<label for="arquivo_doc" @click="extensaoBoxShow = !extensaoBoxShow">DOC</label>
						<input type="radio" name="arquivo" value="DOC" id="arquivo_doc">
					</form>
				</div>
			</div>
			<button class="excluirUrl" @click="deletaUrl">&times;</button>
		</td>
	</tr>
</template>

<script>
	export default {
		name: 'URL',
		data() {
			return {
				extensaoBoxShow: false,
			}
		},
		methods: {
			alteraTipoDeArq(evt) {
				console.log(this.$el)
				// this.$refs.visor.innerText = document.querySelector('input[name=arquivo]:checked').value
			},
			deletaUrl() { this.$el.remove() }
		}
	};
</script>

<style lang="scss">
tr.URL {
	transition: all ease-out .2s;

	td button.excluirUrl {
		display: none;
		background-color: #FE4C4C;
		border: 0;
		padding: 0;
		width: 12px;
		height: 12px;
		line-height: 0;
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
}
</style>