<template>
	<div class="btn btn--salvar">
		<a  
			:class="['salvar', { disabled: disabledState }]"
			:disabled="disabledState"
			@click="$emit('btn-action', $event)">
			<span v-if="!fetching">{{ texto }}</span>
			<span v-if="fetching">Carregando</span></a>
	</div>
</template>
<script>
export default {
	name: "BtnSalvar",
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
.salvar { float: right; background-color: #219653; }
</style>

