<script>
    import PageTitle from '../components/PageTitle.svelte';
    import { onEnter, rsvpHelper } from '../utils.ts'
    import moment from 'moment';

    const uri = 'https://deborahandconnorapi.herokuapp.com';
    let secret = '';
    let results = null;
    $: authenticated = !!results && Array.isArray(results);
    $: acceptCount = authenticated && rsvpHelper.getUnique(results || []).reduce((acc, i) => acc + i.accept.length, 0);
    $: declineCount = authenticated && rsvpHelper.getUnique(results || []).reduce((acc, i) => acc + i.decline.length, 0);

    const authenticate = async () => results = await (
        await fetch(`${uri}/rsvp?secret=${secret}`)
    ).json();
    console.log('v1.1.1');
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
                                <th scope="row">{rsvp.responder}</th>
                                <td>{rsvp.accept.join(', ')}</td>
                                <td>{rsvp.decline.join(', ')}</td>
                                <td>{moment(rsvp.date).format('MMMM DD [at] HH:mm A')}</td>
                            </tr>
                        {/each}
                    </table>
                {:else}
                    <div class="form-group">
                        <input class="form-control" bind:value={secret} type="password" on:keydown={onEnter(authenticate)}/>
                    </div>
                    <button class="btn btn-dark"
                        on:click={authenticate} >
                        Submit
                    </button>
                {/if}
            </div>
        </div>
    </section>
</article>