<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
	console.log('v1.0.0');
</script>


<main>
	<slot></slot>
</main>

<Nav {segment} />

<style lang="scss" global>
	@import "../styles.scss";
</style>