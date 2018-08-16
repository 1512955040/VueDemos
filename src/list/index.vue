<template>
	<div id="list">
		<Index father-component="list"></Index>
	</div>
</template>

<script>
	import Index from "../components/one.vue";
	export default{
		name:"list",
		components:{
			Index
		}
	}
</script>

<style>
</style>