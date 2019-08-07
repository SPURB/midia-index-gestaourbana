<template>
	<div class="Modal" :class="{ fechado: fechaModal }">
		<div class="modal-cont">
			<div class="modal-txt">
				<h4><slot name="header"></slot></h4>
				<slot name="msg"></slot>
			</div>
			<div class="modal-ok">
				<button @click="toggleModal">OK</button>
			</div>
		</div>
		<slot name="componente"></slot>
	</div>
</template>

<script>
export default {
	name: 'Modal',
	data() {
		return {
			fechaModal: false,
		}
	},
	methods:{
		toggleModal(){
			this.fechaModal = !this.fechaModal
			this.$store.commit('RESET_RESPONSES')
			this.$store.commit('etapas/RESET_RESPONSES')
		}
	}
}
</script>

<style lang="scss" scoped>
.Modal {
	box-sizing: border-box;
	position: fixed;
	top: 50px;
	left: 38px;
	width: 100%;
	height: calc(100vh - 32px);
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	padding: 40px 20px;
	overflow: hidden;
	z-index:10;

	&.fechado { display: none; }

	.modal-cont {
		display: flex;
		flex-flow: row nowrap;
		align-items: stretch;
		background-color: #FFF;
		border-radius: 2px;
		border-top-width: 2px;
		border-top-style: solid;
		box-shadow: 0 4px 4px rgba(0, 0, 0, .12);
		z-index: 2;
		transition: transform ease-out .4s, background-color ease-in .1s;
		animation: modal ease-in .8s;

		@keyframes modal {
			0% { transform: translateY(200px); background-color: #FFF; }
			49% { transform: translateY(0); background-color: #FFF; }
			50% { transform: translateY(0); background-color: #898989; }
			80% { transform: translateY(0); background-color: #FFF; }
		}

		.modal-txt {
			padding: 12px 16px;

			h4 {
				margin: 0;
				padding: 0;
				font-size: x-small;
				text-transform: uppercase;
				font-weight: bold;
			}
		}

		.modal-ok {
			button {
				width: 40px;
				height: 100%;
				border: 0;
				background-color: rgba(0, 0, 0, .04);

				&:active { background-color: rgba(0, 0, 0, .2); }
			}
		}
	}

	&.sucesso >	.modal-cont { border-top-color: #219653; h4 { color: #219653; } }
	&.erro >	.modal-cont { border-top-color: #FE4C4C; h4 { color: #FE4C4C; } }
	&.atencao > .modal-cont { border-top-color: #FFCC00; h4 { color: #FFCC00; } }

	&.componente {
		align-items: center;
		div.modal-cont { display: none; }
	}

	&:active > div.modal-cont { background-color: #898989; }
	&:hover { cursor: pointer }
}
</style>