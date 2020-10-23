<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style type="text/scss">


</style>

<svelte:head>
	<title>{post.title} | Eric's Thing</title>
</svelte:head>

<h1>{post.title}</h1>

<div class="content">
	{@html post.html}
</div>
