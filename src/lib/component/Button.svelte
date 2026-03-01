<script lang="ts">
	import Button from '../../stories/Button.svelte';

	interface ButtonProps {
		content: string;
		link?: string;
		href?: string;
		onclick?: (event: MouseEvent) => void;
		target?: '_blank' | '_self' | '_parent' | '_top';
	}

	let { content, href, onclick, target = '_self' }: ButtonProps = $props();
</script>

{#if href}
	<a {href} {target} class="btn">
		{content}
	</a>
{:else}
	<button {onclick} class="btn">
		{content}
	</button>
{/if}

<style>
	.btn {
		background: #d9764c;
		background: linear-gradient(90deg, rgba(217, 118, 76, 1) 0%, rgba(255, 0, 0, 1) 100%);
		color: white;
		padding: 0.8rem 1.4rem 0.8rem 1.4rem;
		border-radius: 1.2rem;
		border: none;
		font-size: 0.9rem;
		margin-bottom: 3rem;
		margin-top: 1rem;
	}
	@media (min-width: 768px) {
		.btn {
			padding: 1rem 2rem 1rem 2rem;
			font-size: 1.2rem;
			margin-top: 0.5rem;
			margin-bottom: 0.5rem;
		}
	}
</style>
