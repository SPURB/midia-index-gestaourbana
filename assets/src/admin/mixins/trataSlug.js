export default {
	methods:{
		copiaSlug(evt) {
			let text = evt.target.innerText
			if (!navigator.clipboard) {
				this.copiaSlugFallback(text);
				return;
			}
			navigator.clipboard.writeText(text).then(
				function() {
					console.log("Async: Cópia para o clipboard realizada com sucesso");					
				},
				function(err) {
					console.error("Async: Não foi possível copiar o texto: ", err);
				}
			)
		},
		copiaSlugFallback(text){
			let textArea = document.createElement("textarea");
			textArea.value = text;
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();
	
			try {
				let successful = document.execCommand("copy");
				let msg = successful ? "sucesso" : "erro";
				console.log("Fallback: Cópia do texto realizado com " + msg);
			} catch (err) {
				console.error("Fallback: Oops, não foi possível copiar", err);
			}
			document.body.removeChild(textArea);
		}
	}	
}