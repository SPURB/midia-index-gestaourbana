<template>
	<div class="AdicionarEtapa" :class="{ fechado: !fechaBox }" ref="div">
		<div class="cont">
			<div class="title">
				<h3>Adicionar etapa</h3>
			</div>
			<form action="">
				<table>
					<tr>
						<td>
							<label for="">Nome</label>
						</td>
						<td>
							 <!-- @keyup="charCount($event)" -->
							<input type="text" v-model="novaEtapaInput">
						</td>
					</tr>
				</table>
			</form>
			<div class="actions">
				<button class="cancelar" @click="fechar()">Cancelar</button>
				<button 
					:disabled="disabled" 
					class="adicionar" 
					@click="novaEtapa"
				>Adicionar</button>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'AdicionarEtapa',
	data() {
		return {
			novaEtapaInput: '',
			disabled: true,
		}
	},
	watch:{
		novaEtapaInput(name){
			switch (name) {
				case '': this.disabled = true
				case ' ': this.disabled = true
				default: this.disabled = false
			}
		}
	},
	computed: {
		fechaBox() {
			return this.$store.state.addEtapaBox
		},
	},
	created() {},
	methods: {
		fechar() {
			this.$store.commit('luzToggle')
			this.$store.commit('abreAdicionarEtapaBox')
		}, 
		novaEtapa(){
			this.$store.dispatch('postNovaEtapa', this.novaEtapaInput)
		}

	}
};
</script>

<style lang="scss" scoped> 
div.AdicionarEtapa {
	position: absolute;
	top: 0;
	left: -20px;
	width: calc(100% + 20px);
	height: calc(100vh - 32px);
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	transition: height ease-out .4s;

	&.fechado {
		height: 0;

		& > div.cont {
			transform: translateY(-80vh);
		}
	}

	div.cont {
		width: 720px;
		background-color: #FFF;
		border-radius: 4px;
		box-shadow: 0 4px 4px rgba(0, 0, 0, .48);
		z-index: 2;
		transform: translateY(0);
		animation: addEtp ease-in .4s;
		transition: transform ease-out .4s;

		@keyframes addEtp {
			from { transform: translateY(-80vh); }
			to { transform: translateY(0); }
		}

		div.title {
			background-color: #0073aa;
			position: relative;
			padding: 0 12px;
			border-radius: 2px 2px 0 0;

			h3 {
				line-height: 40px;
				margin: 0;
				color: #FFF;
			}
		}

		table {
			padding: 24px;
			border-spacing: 0;
			width: 100%;
			tr {
				td:first-child {
					max-width: min-content;
					max-width: -moz-min-content;
					padding-right: 8px;
				}
				td:last-child {
					width: 100%;
					input { width: 100%; }
				}
			}
		}

		div.actions {
			padding: 0 24px 24px 24px;
			display: flex;
			justify-content: space-between;

			button {
				border-width: 0;
				color: #FFF;
				padding: 16px 24px;
				border-radius: 2px;
				box-shadow: inset 0 -2px 2px rgba(0, 0, 0, .24);
				cursor: pointer;

				&.cancelar { background-color: #fe4c4c; }
				&.adicionar { 
					background-color: #219653; 
					&:disabled{ 
						background-color: #ececec;
						color: #bdbdbd;
						box-shadow: inset 0 -2px 2px rgba(222, 221, 221, 0.2)
					}
				}
			}
		}
	}
}
</style>