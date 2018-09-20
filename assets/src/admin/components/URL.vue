<template>
	<tr class="URL">
		<td><slot></slot></td>
		<td>
			<input type="text">
			<div>
				<span @click="extensaoBoxShow = !extensaoBoxShow" ref="visorTipoDeArq">KML</span>
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
		</td>
	</tr>
</template>

<script>
	export default {
		name: 'Arquivo',
		data() {
			return {
				extensaoBoxShow: false,
			}
		},
		methods: {
			alteraTipoDeArq() {
				this.$refs.visorTipoDeArq.innerText = document.querySelector('input[name=arquivo]:checked').value
			}
		}
	};
</script>