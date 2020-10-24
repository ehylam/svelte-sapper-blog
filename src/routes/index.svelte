<script>
	import ThreeImage from '../components/three_image.svelte';
	import Hero from '../components/Hero.svelte';

	let title = "Lorem ipsum";
</script>

<svelte:head>
	<title>{title}- Home</title>
</svelte:head>


<section class="home">
	<Hero title={title} />
	<!-- <ThreeImage /> -->
</section>

<style>

</style>