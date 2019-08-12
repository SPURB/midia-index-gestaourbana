<template>
	<div class="btn btn--cancelar">
		<a  
			:class="['cancelar', { disabled: disabledState }]"
			:disabled="disabledState"
			@click="$emit('btn-action', $event)">
			<span v-if="!fetching">{{ texto }}</span>
			<span v-if="fetching">Carregando</span></a>
	</div>
</template>
<script>
export default {
	name: "BtnCancelar",
	props: {
		fetching: {
			required: true,
			type: Boolean
		},
		texto: {
			required: true,
			type: String
		},
		disabledState:{
			required: false,
			type: Boolean,
			deafault: true
		},
	},
	methods:{
	}
}
</script>
<style lang="scss">
@import "../scss/BTN";
.cancelar { float: left; background-color: #FE4C4C; }
</style>

