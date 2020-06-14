<script>
	import { pages } from '../store';
	import Fa from 'svelte-fa'
	import { faBars } from '@fortawesome/free-solid-svg-icons'
	export let segment;
	let collapse = true;

	const toggle = () => {
		console.log('toggle')
		collapse = !collapse;
	}

	fetch('https://deborahandconnorapi.herokuapp.com/')
		.then(j => j.json())
		.then(console.log);
</script>

<a href="/wedding/admin" class="d-none">secrets</a>

<button on:click={toggle} class="btn menu" class:text-light="{!collapse || segment === 'pictures' || !segment }">
	<Fa icon={faBars} />
</button>
<nav class="d-flex w-100 justify-content-center navbar" class:collapse>
	<div class="d-flex w-100 justify-content-center">
		<ul class="list-group list-group-horizontal-lg" on:click={toggle}>
			{#each $pages as page}
				<a class="list-group-item border-0" class:active="{segment === page.segment}" aria-current='{segment === page.segment ? "page" : undefined}' href={page.href} class:text-light="{segment !== page.segment}" class:text-dark="{segment === page.segment}">
					{page.text}
				</a>
			{/each}
		</ul>
	</div>
</nav>


<style>

	@media (max-width: 992px) {
		.menu {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1200;
		}

		nav {
			position: absolute;
			bottom: 0;
			z-index: 1000;
			background: var(--dark);
			height: 100vh;
		}

		nav.d-flex {
			flex-direction: column;
		}

		nav ul {
			flex-grow: 1;
			width: 100vw;
		}

		nav.collapse {
			display: none!important;
		}
		
		a.active {
			background: var(--light);
		}
	}

	@media (min-width: 992px) {
		.menu {
			display: none;
		}

		nav {
			position: absolute;
			bottom: 0;
			z-index: 1000;
		}

		a.active {
			background: var(--light-f);
		}
	}


	a:not(active) {
		background: var(--dark-f);
	}
</style>