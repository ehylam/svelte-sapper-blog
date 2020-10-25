<script>
	import { onMount } from 'svelte';
	import { currentTime } from '../stores.js';
	export let segment;

	let navState = false;



	onMount(() => {
		if($currentTime > 17) {
			toggleTheme();
		}

	})

	function toggleTheme() {
		window.document.body.classList.toggle('dark');
	}

</script>

<header>
	<div class="theme" on:click={toggleTheme}></div>
	<a href="/"><h3>Eric's thing</h3></a>


	<div class="burger{navState ? ' active' : ''}" on:click={() => navState = !navState}>
		<div class="burger_wrap">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
</header>
<nav class="navigation{navState ? ' active' : ''}">
	<ul on:click={() => navState = !navState}>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="projects">Projects</a></li>
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">Blog</a></li>
		<li><a aria-current="{segment === 'threejs' ? 'page' : undefined}" href="threejs">Three.js fun</a></li>
	</ul>
</nav>

<style lang="scss">
	$dark: #222222;
	$light: #edf7f5;
	:global(body) {
		&.dark {
			.burger span, header .theme {
				background-color: $light;
			}

			nav {
				background-color: $dark;

				a {
					color: $light;
				}
			}
		}

	}
	header {
		position: fixed;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: 30px auto;
		width: 100%;

		.theme {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			z-index: 9;
			cursor: pointer;
			left: 30px;
			width: 20px;
			height: 20px;
			background-color: black;
			border-radius: 100%;
			@media (min-width: 768px) {
				left: 50px;
			}
		}
		a {
			display: inline-block;
			text-decoration: none;
			h3 {
				margin: 0;
			}
		}
		.burger {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			z-index: 9;
			cursor: pointer;
			right: 30px;
			@media (min-width: 768px) {
				right: 50px;
			}


			&_wrap {
				position: relative;
				width: 30px;
				height: 20px;
				span {
					position: absolute;
					height: 2px;
					width: 100%;
					background-color: rgb(17, 8, 37);
					top: 50%;
					left: 0;
					transform: translateY(-50%);
					transition: all 0.25s ease;
					&:first-child {
						top: 0;
					}

					&:last-child {
						top: 100%;
					}

				}
			}

			&.active {
				span {
					left: 50%;
					top: 50%;

					&:first-child {
						transform: translate(-50%) rotate(45deg);
					}
					&:nth-child(2) {
						opacity: 0;
						left: 0;
						width: 0;
					}

					&:last-child {
						transform: translate(-50%) rotate(-45deg);
					}

				}

			}
		}

	}

	nav {
		position: fixed;
		z-index: 8;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #edf7f5;
		display: flex;
		justify-content: center;
		align-items: center;
		pointer-events: none;
		opacity: 0;
		transition: all 0.25s ease;

		&.active {
			opacity: 1;
			pointer-events: unset;

		}

		ul {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			margin: 0;
			padding: 0;
			max-width: 500px;

				li {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-basis: 50%;
					list-style: none;
					@media (min-width: 1024px) {
						padding: 20px 0px;
					}
					a {
						position: relative;
						z-index: 10;
						text-align: center;
						text-decoration: none;
						transition: all 0.25s ease;
						@media (min-width: 1024px) {
							font-size: 30px;
						}

						&:hover {
							opacity: 0.8;
						}
					}
				}
		}
	}

</style>
