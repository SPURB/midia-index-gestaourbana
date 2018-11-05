<template>
	<div class="Modal" :class="{ fechado: fechaModal }">
		<div class="modal-cont">
			<div class="modal-txt">
				<h4><slot name="header"></slot></h4>
				<slot name="msg"></slot>
			</div>
			<div class="modal-ok">
				<button @click="fechaModal = !fechaModal">OK</button>
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
		};
	},
	components: {},
	mounted() {},
	updated() {},
	methods: {}
}
</script>

<style lang="scss">
div.Modal {
	box-sizing: border-box;
	position: absolute;
	top: 20px;
	left: -20px;
	width: 100%;
	height: calc(100vh - 32px);
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding: 40px;
	overflow: hidden;
	animation: modal ease-in .4s;

	@keyframes modal {
		from { transform: translateY(-100vh); }
		to { transform: translateY(0); }
	}

	&.fechado { display: none; }

	div.modal-cont {
		display: flex;
		flex-flow: row nowrap;
		align-items: stretch;
		background-color: #FFF;
		border-radius: 2px;
		border-top-width: 2px;
		border-top-style: solid;
		box-shadow: 0 4px 4px rgba(0, 0, 0, .12);
		z-index: 2;

		div.modal-txt {
			padding: 12px 16px;
			h4 {
				margin: 0;
				padding: 0;
				font-size: x-small;
				text-transform: uppercase;
				font-weight: bold;
			}
		}

		div.modal-ok {
			button {
				width: 40px;
				height: 100%;
				border: 0;
				background-color: rgba(0, 0, 0, .04);

				&:active { background-color: rgba(0, 0, 0, .2); }
			}
		}
	}

	&.sucesso > div.modal-cont { border-top-color: #219653; h4 { color: #219653; } }
	&.erro > div.modal-cont { border-top-color: #FE4C4C; h4 { color: #FE4C4C; } }
	&.atencao > div.modal-cont { border-top-color: #FFCC00; h4 { color: #FFCC00; } }

	&.componente {
		align-items: center;
		div.modal-cont { display: none; }
	}
}
</style>