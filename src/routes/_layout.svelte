<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<!-- <Nav {segment} /> -->

<main class="bg-dark">
	<slot></slot>
</main>

<style lang="scss" global>
	@import "../styles.scss";
</style>