<template>
	<span v-if="display" class="ErroMensagem"><slot></slot></span>
</template>

<script>
export default {
	name: 'ErroMensagem',
	props: { 
		display: {
			required: true,
			type: Boolean
		}
	}
}
</script>
<style lang="scss" scoped>
span.ErroMensagem{
	background-color: #fe4c4c;
	color: #fff;
	padding: .5rem;
	border-radius: 18px;
}
</style>