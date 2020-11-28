<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`projects/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { project: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let project;
</script>

<svelte:head>
	<title>{project.title} | Eric's Thing</title>
</svelte:head>
<section class="article">
	<h1>{project.title}</h1>

	<div class="content">
		{@html project.html}
	</div>
</section>

<style type="text/scss">
	.article {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
		max-width: 1024px;
		margin: 3vw auto;
		padding: 0 20px;
		h1 {
			margin-bottom: 1.4em;
			@media (min-width: 1024px) {
				flex-basis: 30%;
			}
		}

		.content {
			@media (min-width:1024px) {
				flex-basis: 70%;
			}
			// Issue, if element is not present in the code.. (pre-compile) then it won't be used
			// unless using :global()
			:global(p:first-child) {
				margin-top: 0;
			}

		}
	}


</style>
