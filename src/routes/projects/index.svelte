<script context="module">
	export function preload() {
		return this.fetch(`projects.json`).then(r => r.json()).then(projects => {
			return { projects };
		});
	}
</script>

<script>
	export let projects;
</script>

<svelte:head>
	<title>Eric's Thing</title>
</svelte:head>


<section class="articles">
	{#each projects as project}
		<article class="articles_post">
			<a rel="prefetch" href="projects/{project.slug}">{project.title}</a>
		</article>
	{/each}
</section>

<style lang="scss">
	.articles {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		max-width: 1024px;
		margin: 0 auto;
        padding: 40px 20px;
        @media (min-width: 1024px) {
            padding: 60px 0;
        }
		&_post {
			display: flex;
			justify-content: center;
			flex-basis: calc(100% / 3);
			padding: 1.5em 0;
			a {
				text-align: center;
				@media (min-width: 1024px) {
					font-size: 24px;
					line-height: 24px;
					text-decoration: none;
				}
			}
		}
	}
</style>
