<script>
    import PageTitle from '../components/PageTitle.svelte';
    import Name from '../components/rsvp/Name.svelte';
    import Guests from '../components/rsvp/Guests.svelte';
    import { form } from '../store';

    // Subscribe to steps
    let step = 0;
    $: form.subscribe(v => step = v.step);
</script>

<article class="vh-100 bg-light">
    <PageTitle title="R.S.V.P." />

    <section class="container">
        <div class="row justify-content-center">
            <div class="col form">
                <div class="part">
                    <Name />
                </div>
                {#if step > 1}
                    <div class="part">
                        <Guests />
                    </div>
                {/if}
            </div>
        </div>
    </section>
</article>

<style>
    .form {
        max-width: 800px;
    }

    .part {
        margin-bottom: 24px;
    }
</style>