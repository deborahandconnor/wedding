<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>


<main>
	<slot></slot>
</main>

<Nav {segment} />

<style lang="scss" global>
	@import "../styles.scss";
</style>