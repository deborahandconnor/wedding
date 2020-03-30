<script>
    export let title = 'Deborah ♥ Connor';
    export let hide = false;
</script>
<svelte:head>
    <title>{title}</title>
</svelte:head>

{#if !hide}
    <h1 class="display-2 text-center">
        {title}
    </h1>
{/if}

<style>
    h1 {
        padding: 32px 0 64px;
    }
</style>