<script>
	import ThreeImage from '../components/three_image.svelte';
	import Hero from '../components/Hero.svelte';
	import Content from '../components/Content.svelte'
	let title = "Lorem ipsum";
	let contentHeading = 'Something goes here...';
	let content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
</script>

<svelte:head>
	<title>{title}- Home</title>
</svelte:head>


<section class="home">
	<Hero title={title} />
	<!-- <ThreeImage /> -->
	<Content heading={contentHeading} content={content}/>
</section>

<section class="art">

</section>

<style>
	section {

	}
</style>