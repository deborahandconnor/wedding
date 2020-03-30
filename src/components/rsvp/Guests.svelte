<script>
    import { form, rsvp } from '../../store';

    let party, error;
    $: rsvp.subscribe(v => party = v.party);
    $: form.subscribe(v => error = v.error);
    $: guests = !!party ? party.length : 0;

    const respond = () => console.log('respond');
</script>

<h2 class="h4">
    We found {guests} { guests === 1 ? 'guest' : 'guests' } in your party. Who will be attending?
</h2>
<section class="container-fluid">
    <div class="form-row">
        {#each party as guest, i}
            <div class="input-group input-group-lg mb-2 col-12">
                <input type="text" class="form-control" value={guest}>
            </div>
        {/each}
        <div class="col d-flex mt-2">
            <button class="btn btn-secondary btn-lg" on:click={respond}>Send</button>
        </div>
    </div>
</section>