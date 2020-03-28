<script>
    import { onMount } from 'svelte';
    import { countdown } from '../utils';
    $: days = countdown('days');
</script>

<section class="d-flex feature-image flex-column justify-content-center text-center text-light">
    <!-- <img src="" alt=""> -->
    <h1 class="display-1">
        Deborah Hong & Connor Low
    </h1>
    <small class="display-4 d-flex justify-content-center align-baseline">
        August 8th, 2020 <span class="mx-4">♥</span> {days} days to go.
    </small>
</section>

<style>
    section {
        height: 100vh;
        background-image: linear-gradient(160deg, transparent, var(--dark-s), transparent), url("/images/B.jpg");
        background-position: center;
        background-size: cover;
        padding: 64px 16px;
    }

    h1,
    small {
        margin-bottom: 24px;
        display: block;
    }
</style>