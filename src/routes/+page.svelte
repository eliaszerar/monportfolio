<script>
	import Navbar from '../lib/component/Navbar.svelte';
	import { Hamburger } from 'svelte-hamburgers';
	import Home from '$lib/component/Home.svelte';
	import About from '$lib/component/About.svelte';
	let burgerOpen = $state(false);
</script>
<section class="portfolio">
<section class="navigation">
	<div class="burger-menu">
		<Hamburger bind:open={burgerOpen} className="hamburger" />
	</div>
	<Navbar open={burgerOpen} />
</section>

<Home />
<About />
</section>
<style>
	* {
		box-sizing: border-box;
	}
	:global(body) {
		background-color: #111010;
		color: white;
		margin: 0;
	}

	.navigation {
		display: flex;
		flex-direction: column;
	}

	.burger-menu :global(.hamburger-inner),
	.burger-menu :global(.hamburger-inner::before),
	.burger-menu :global(.hamburger-inner::after),
	.burger-menu :global(.is-active .hamburger-inner),
	.burger-menu :global(.is-active .hamburger-inner::before),
	.burger-menu :global(.is-active .hamburger-inner::after) {
		background-color: white !important;
		width: 2rem;
	}
	.burger-menu {
		margin-top: 3rem;
		width: 3rem;
	}
	@media (min-width: 768px) {
		:global(.burger-menu) {
			display: none;
		}
		.navigation {
			display: flex;
			justify-content: center;
			flex-direction: row;
		}
	}
    .portfolio {
        overflow: hidden;
    }
</style>
