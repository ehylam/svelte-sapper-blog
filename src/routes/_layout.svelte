<script>
	import Nav from '../components/Nav.svelte';

	export let segment;


</script>

<style type="text/scss" global>
	$dark: #222222;
	$light: #edf7f5;
	@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap');


	:global(body) {
//  is there a more efficent way...?
		:global(h1),:global(h2), :global(h3), :global(h4), :global(h5), :global(h6), :global(p), :global(span), :global(input),:global(a),:global(label) {
			color: $dark;
			font-family: 'Playfair Display', serif;
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

	:global(main) {
		padding-top: 82px;
	}

</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
