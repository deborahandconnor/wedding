<script>
    import PageTitle from '../components/PageTitle.svelte';
    const uri = 'http://deborahandconnorapi.herokuapp.com';
    let secret = '';
    let results = null;
    $: authenticated = !!results && Array.isArray(results);
    $: acceptCount = (results || []).reduce((acc, i) => acc + i.accept.length, 0);
    $: declineCount = (results || []).reduce((acc, i) => acc + i.decline.length, 0);

    const authenticate = async () => results = await fetch(`${uri}/rsvp`);
</script>

<article class="vh-100 bg-light">
    <PageTitle title="Admin" />

    <section class="container">
        <div class="row justify-content-center">
            <div class="col">
                {#if authenticated}
                    <div class="mb-2">
                        <div class="badge badge-success">{acceptCount} joyfully accepted</div>
                        <div class="badge badge-danger">{declineCount} regretfully declined</div>
                    </div>
                    <table class="table table-sm">
                        <tr>
                            <th scope="col">Respondent</th>
                            <th scope="col">Accepted</th>
                            <th scope="col">Declined</th>
                            <th scope="col">Date</th>
                        </tr>
                        {#each results as rsvp, i}
                            <tr>
                                <th scope="row">{rsvp.respondent}</th>
                                <td>{rsvp.accept.join(', ')}</td>
                                <td>{rsvp.decline.join(', ')}</td>
                                <td>{rsvp.date}</td>
                            </tr>
                        {/each}
                    </table>
                {:else}
                    <div class="form-group">
                        <input class="form-control" bind:value={secret} />
                    </div>
                    <button on:click={authenticate} class="btn btn-dark">
                        Submit
                    </button>
                {/if}
            </div>
        </div>
    </section>
</article>