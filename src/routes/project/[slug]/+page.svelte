<script lang="ts">
	import type { PageData } from './$types';
	import Project from '$lib/component/Project.svelte';
	import Footer from '$lib/component/Footer.svelte';
	import favicon from '$lib/assets/favicon.svg';
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Projects Elias Zerar</title>
</svelte:head>
<Project {data} />
<Footer />
