<script>
	import Home from '$lib/component/Home.svelte';
	import About from '$lib/component/About.svelte';
	import Cards from '$lib/component/Cards.svelte';
	import Navbar from '$lib/component/Navbar.svelte';
	import Footer from '$lib/component/Footer.svelte';
</script>

<a href="#main-content" class="skip-link">Aller au contenu principal</a>
<Navbar />
<main id="main-content" role="main" class="portfolio">
	<Home />
	<About />
	<Cards />
	<Footer />
</main>

<style>
	* {
		box-sizing: border-box;
	}
	:global(body) {
		background-color: #111010;
		color: white;
		margin: 0;
	}

	.portfolio {
		overflow: hidden;
	}
	.skip-link {
		padding: 0;
		width: fit-content;
		background-color: white;
		display: flex;
		align-items: center;
		text-decoration: none;
		overflow: hidden;
		flex-direction: column;
		height: 0;

		&:focus-within {
			height: auto;
		}

		@media (min-width: 768px) {
			flex-direction: row;
		}
	}
</style>
