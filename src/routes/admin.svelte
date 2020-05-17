<script>
    import PageTitle from '../components/PageTitle.svelte';
    const uri = 'https://deborahandconnorapi.herokuapp.com';
    let secret = '';
    let results = null;
    $: authenticated = !!results && Array.isArray(results);
    $: acceptCount = authenticated && (results || []).reduce((acc, i) => acc + i.accept.length, 0);
    $: declineCount = authenticated && (results || []).reduce((acc, i) => acc + i.decline.length, 0);

    const authenticate = async () => results = await (
        await fetch(`${uri}/rsvp?secret=${secret}`)
    ).json();
    $: console.log(results);
    console.log('v1.1.0');
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
                        </tr>
                        {#each results as rsvp, i}
                            <tr>
                                <th scope="row">{rsvp.responder}</th>
                                <td>{rsvp.accept.join(', ')}</td>
                                <td>{rsvp.decline.join(', ')}</td>
                            </tr>
                        {/each}
                    </table>
                {:else}
                    <div class="form-group">
                        <input class="form-control" bind:value={secret} type="password" />
                    </div>
                    <button on:click={authenticate} class="btn btn-dark">
                        Submit
                    </button>
                {/if}
            </div>
        </div>
    </section>
</article>