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
					console.log("Async: Copying to clipboard was successful!");
				},
				function(err) {
					console.error("Async: Could not copy text: ", err);
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
				let msg = successful ? "successful" : "unsuccessful";
				console.log("Fallback: Copying text command was " + msg);
			} catch (err) {
				console.error("Fallback: Oops, unable to copy", err);
			}
			document.body.removeChild(textArea);
		}
	}	
}