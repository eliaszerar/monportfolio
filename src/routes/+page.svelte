<script>
	import Home from '$lib/component/Home.svelte';
	import About from '$lib/component/About.svelte';
	import Cards from '$lib/component/Cards.svelte';
    import Navbar from "$lib/component/Navbar.svelte";
    import Footer from "$lib/component/Footer.svelte";
</script>

    <Navbar />
<main id="main-content" class="portfolio">
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
</style>
