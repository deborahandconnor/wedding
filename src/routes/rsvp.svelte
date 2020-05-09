<script>
    import PageTitle from '../components/PageTitle.svelte';
    import RsvpForm from '../components/RsvpForm.svelte';

</script>

<article class="vh-100 bg-light">
    <PageTitle title="R.S.V.P." />

    <section class="container">
        <div class="row justify-content-center">
            <div class="col form">
                <RsvpForm />
            </div>
        </div>
    </section>
</article>

<style>
    .form {
        max-width: 800px;
    }
</style>