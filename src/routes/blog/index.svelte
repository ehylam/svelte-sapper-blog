<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style lang="scss">
</style>

<svelte:head>
	<title>Eric's Thing</title>
</svelte:head>

<!-- Hero here -->

<section class="articles">
	{#each posts as post}
		<article class="articles_post">
			<a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
		</article>
	{/each}
</section>
