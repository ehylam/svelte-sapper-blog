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

<svelte:head>
	<title>{post.title} | Eric's Thing</title>
</svelte:head>
<section class="article">
	<h1>{post.title}</h1>

	<div class="content">
		{@html post.html}
	</div>
</section>

<style type="text/scss">
	.article {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
		max-width: 968px;
		margin: 3vw auto;

		h1 {
			margin-bottom: 1.4em;
			flex-basis: 30%;
		}

		.content {
			flex-basis: 70%;

			// Issue, if element is not present in the code.. (pre-compile) then it won't be used
			// unless using :global()
			:global(p:first-child) {
				margin-top: 0;
			}

		}
	}


</style>
