<script>
	import Navbar from '../lib/component/Navbar.svelte';
	import { Hamburger } from 'svelte-hamburgers';
	let burgerOpen = $state(false);
</script>

<section class="navigation">
	<div class="burger-menu">
		<Hamburger bind:open={burgerOpen} />
	</div>
	<Navbar bind:open={burgerOpen} />
</section>

<section class="Home">
	<h1>Bonjour je m'appelle Elias Zerar et je suis</h1>
	<h2>Developpeur web</h2>
	<p>
		Actuellement en Alterancce à Radiofrance en tant que developpeur web pour la platoforme ici.fr
	</p>
	<p>
		<button> Contactez-moi </button>
	</p>
	<div class="introduction">
		<h3>lorem+</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore aliquid alias quia
			deleniti illo doloremque voluptatem, odio praesentium dolor rem accusantium numquam ipsum vel
			quasi corrupti doloribus debitis voluptatibus.
		</p>
		<p></p>
		<h3>lorem+</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore aliquid alias quia
			deleniti illo doloremque voluptatem, odio praesentium dolor rem accusantium numquam ipsum vel
			quasi corrupti doloribus debitis voluptatibus.
		</p>
		<p></p>
		<h3>lorem+</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem labore aliquid alias quia
			deleniti illo doloremque voluptatem, odio praesentium dolor rem accusantium numquam ipsum vel
			quasi corrupti doloribus debitis voluptatibus.
		</p>
	</div>
</section>

<style>
	* {
		box-sizing: border-box;
	}
	.introduction {
		p {
			display: flex;
			flex-direction: column;
			border: solid red 1px;
		}
	}
	.navigation {
		display: flex;
		flex-direction: column;
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
		p {
			flex-direction: row;
		}
	}
</style>
