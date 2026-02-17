<script lang="ts">
    import type { PageData } from './$types';
    import Project from "$lib/component/Project.svelte";
    let { data }: { data: PageData } = $props();
</script>

 <Project data={data} />

