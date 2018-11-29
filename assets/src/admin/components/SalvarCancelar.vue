<template>
	<section class="SalvarCancelar">
		<a v-show="cancelar.display">{{ cancelar.text }}</a>
		<a>{{ salvar.text  }}</a>
		<div v-if="isFetching">fetching</div>
	</section>
</template>
<script>

export default{
	name:"SalvarCancelar",
	props:{
		salvar: {
			type: Object,
			required: true,
			display:{
				type: Boolean,
				required: false,
				default: true
			},
			action: {
				type: Function,
				required: false
			},
			text: {
				required: true,
				type: String,
			}
		},
		cancelar: {
			type: Object,
			required: true,
			display:{
				type: Boolean,
				required: false,
				default: true
			},
			action: {
				type: Function,
				required: false
			},
			text: {
				required: false,
				type: String,
				default: 'Cancelar'
			}
		}
	},
	computed:{
		isFetching(){ return this.$store.state.fetching}
	}
}
</script>

<style lang="scss" scoped>
section.SalvarCancelar {
	width: 100%;
	a {
		text-decoration: none;
		margin: 0;
		font-family: inherit;
		font-size: large;
		border: 0;
		padding: 20px 32px;
		border-radius: 2px;
		cursor: pointer;
		color: #FFF;
		box-shadow: inset 0 -2px 2px rgba(0, 0, 0, .24);
		position: relative;
		overflow: hidden;
		&:first-child { float: left; background-color: #FE4C4C; }
		&:last-child { float: right; background-color: #219653; }

		&.disabled {
			opacity: .4;
			-moz-user-select: none;
			user-select: none;
			cursor: not-allowed;
		}
	}
}
</style>