<script>
	let { open } = $props();
</script>

<div class="menu" class:is-open={open}>
	{#each ['Accueil', 'Projet', 'Contact'] as link}
		<a href="/about">
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
			border: solid 1px red;
			border-radius: 2rem;
			text-align: center;
			margin: 0;
		}
		.menu a {
			padding: 0.5rem 4rem 0.5rem 4rem;
			margin: 0.5rem;
		}
	}

	a {
		cursor: pointer;
		width: max-content;
		margin: 1rem auto;
		display: flex;
		flex-direction: column;
		text-decoration: none;
		background-color: white;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
