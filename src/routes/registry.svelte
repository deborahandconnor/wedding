<script>
    import PageTitle from '../components/PageTitle.svelte';
    import Fa from 'svelte-fa'
    import { faGifts } from '@fortawesome/free-solid-svg-icons'
</script>

<article class="vh-100 bg-secondary">
    <PageTitle title="Gift Registry" />
    <section class="container">
        <div class="row">
            <div class="col-12 text-center mb-5">
                <h2>
                    <Fa icon={faGifts} size="3x" />
                </h2>
                <p></p>
            </div>
            <div class="col">
                <div class="badge badge-light badge-pill text-center d-block">
                    <a href="https://amazon.com/wedding/share/connoranddeborah"
                        class="text-secondary btn btn-text btn-block" target="_blank">
                        <span>Amazon</span>
                    </a>
                </div>
            </div>
            <div class="col">
                <div class="badge badge-light badge-pill text-center d-block">
                    <a href="https://www.target.com/gift-registry/gift/connoranddeborah" target="_blank"
                        class="text-secondary btn btn-text btn-block">
                        <span>Target</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</article>

<style>
    .container {
        max-width: 800px;
    }
</style>