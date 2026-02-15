<script>
	let { open } = $props();
</script>

<div class="menu" class:is-open={open}>
	{#each ['Accueil', 'Projet', 'Contact'] as link}
		<a href="">
			{link}
		</a>
	{/each}
</div>

<style>
	.menu {
		display: none;
		flex-direction: column;
	}
	.is-open {
		display: flex;
	}
	@media (min-width: 768px) {
		.menu {
			display: flex;
			flex-direction: row;
			justify-content: center;
			border: solid 1px white;
			border-radius: 2rem;
			text-align: center;
			color: white;
			margin-top: 3rem;
			margin-bottom: 4rem;
		}
		.menu a {
			padding: 0.5rem 4rem 0.5rem 4rem;
			margin: 0.5rem;
			font-size: 1.25rem;
		}
	}

	a {
		cursor: pointer;
		width: max-content;
		margin: 1rem auto;
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: white;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
