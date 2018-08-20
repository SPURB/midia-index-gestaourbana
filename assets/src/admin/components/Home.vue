<template>
    <div class="home">
        <span>{{ msg }}</span>
        <button @click='post'>teste Post</button>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            msg: 'Olar Home'
        }
    }, 
    methods:{
    	post(){
    		console.log('olar')
    	}
    }
}
</script>

<style scoped>

</style>
