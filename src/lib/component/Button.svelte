<script lang="ts">
    interface ButtonProps {
        content: string;
        link?: string;
        href?: string;
        onclick?: (event: MouseEvent) => void;
    }

    let { content, href, onclick }: ButtonProps = $props();
</script>

{#if href}
    <a {href} class="btn">
        {content}
    </a>
{:else}
    <button {onclick} class="btn">
        {content}
    </button>
{/if}

<style>
	.btn {
		background-color: orangered;
		color: white;
		padding: 0.8rem 1.4rem 0.8rem 1.4rem;
		border-radius: 1.2rem;
		border: none;
		font-size: 0.9rem;
		margin-bottom: 1rem;
        margin-top: 1rem;
	}
</style>
