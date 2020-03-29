<script>
	import { pages } from '../store';
	export let segment;

</script>

<style>
	nav {
		position: absolute;
		bottom: 0;
		z-index: 1000;
	}

	li.active {
		background: var(--light-f);
	}

	li:not(active) {
		background: var(--dark-f);
	}
</style>

<nav class="d-flex w-100 justify-content-center navbar">
	<ul class="list-group list-group-horizontal">
		{#each $pages as page}
			<li class="list-group-item border-0" 
				class:active="{segment === page.segment}">
				<a aria-current='{segment === page.segment ? "page" : undefined}' href={page.href}
					class:text-light="{segment !== page.segment}"
					class:text-dark="{segment === page.segment}">
					{page.text}
				</a>
			</li>
		{/each}
	</ul>
</nav>