<script>
	import Nav from '../components/Nav.svelte';

	export let segment;


</script>

<style type="text/scss" global>
	:global(body) {
		background-color: #edf7f5;
	}

</style>


<Nav {segment}/>

<main>
	<slot></slot>
</main>
