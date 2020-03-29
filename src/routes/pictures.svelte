<script>
    import PageTitle from '../components/PageTitle.svelte';
    import { createUrl } from '../utils';
    const images = [
        createUrl('1.jpg'),
        createUrl('10.jpg'),
        createUrl('26.jpg'),
        createUrl('34.jpg'),
        createUrl('42.jpg'),
        createUrl('63.jpg'),
        createUrl('69.jpg'),
        createUrl('70.jpg'),
        createUrl('73.jpg'),
        createUrl('78.jpg')
    ];
</script>


<article class="overflow-auto py-2 bg-dark text-light">
    <PageTitle title="Photos" />
    <section class="container">
        <div class="row">
            {#each images as image}
                <div class="col-12 col-lg-6 p-2">
                    <img src={image} alt="♥" class="img-fluid card">
                </div>
            {/each}
        </div>
    </section>
</article>

<style>
    article {
        max-height: 100vh;
    }

</style>