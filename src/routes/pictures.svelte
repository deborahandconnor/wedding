<script>
    import PageTitle from '../components/PageTitle.svelte';
    import { createUrl } from '../utils';
    const images = (() => {
        const result = [];
        let i = 1;
        do {
            result.push(createUrl(`${i}.jpg`));
        } while (i++ < 14);
        return result;
    })()
</script>


<article class="overflow-auto bg-dark text-light">
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
        overflow: auto;
    }

</style>