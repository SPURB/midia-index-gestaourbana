<template>
	<tr class="UrlNova">
		<td>URL</td>
		<td>
			<input type="text" name="url" v-model="output.url">
		</td>
	</tr>
</template>

<script>
	export default {
		name: 'UrlNova',
		props:{
			index: {
				required: true		
			}
		},
		data() {
			return {
				output:{
					url: '',
					extensao: false,
				}
			}
		},
	};
</script>

<style lang="scss" scoped>
</style>