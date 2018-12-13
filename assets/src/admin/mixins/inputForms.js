export default {
	data(){
	},
	props:{
		idEtapa: {
			type: Number,
			required: true
		} 
	},
	methods:{
		// removeUrl(index){
		// 	this.newUrls = []
		// },
		addUrl() {
			this.newUrls.push({})
		},
		charCount(evt) {
			let txt = evt.target.value
			let counter = evt.target.parentNode.lastElementChild
			counter.innerText = txt.length + '/330'
			if (txt.length > 330) {
				counter.style.color = "#FE4C4C"
				evt.target.style.borderColor = "#FE4C4C"
			} else if (txt.length < 330) {
				counter.style.color = "#898989"
				evt.target.style.borderColor = "#DDD"
			}
		},
	}
}