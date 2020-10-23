<script>
	import Nav from '../components/Nav.svelte';

	export let segment;


</script>

<style type="text/scss" global>
$dark: #222222;
$light: #edf7f5;


	:global(body) {
//  is there a more efficent way...?
		:global(h1),:global(h2), :global(h3), :global(h4), :global(h5), :global(h6), :global(p), :global(span), :global(input),:global(a),:global(label) {
			color: $dark;
		}
	}

	:global(body) {
		background-color: $light;
	}



	:global(body) {
		&.dark {
			background-color: $dark;

			//  is there a more efficent way...?
			:global(h1),:global(h2), :global(h3), :global(h4), :global(h5), :global(h6), :global(p), :global(span), :global(input),:global(a) {
				color: $light;
			}
		}


	}

</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
