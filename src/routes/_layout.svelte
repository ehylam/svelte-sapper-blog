<script>
	import Nav from '../components/Nav.svelte';
	export let segment;


</script>

<style type="text/scss" global>
	@import '../styles/main';

</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>