<script>
    const uri = 'https://weddingapi.herokuapp.com';
    let name = '', party = [], partyFound = false, hasError = false;
    let promise;
    $: guests = party.length;

    // Methods
    const respond = async () => {
        const names = name.split(' ')
        const res = await fetch(`${uri}/guests/find?first=${names[0]}&last=${names[1]}`)
        const json = await res.json();
        state = states.SEARCHING_PARTY;
        console.log('responded:', json);
        party = ['', '', ''];
        state = states.PARTY;
    };

    const updateGuest = ({ target: { name, value } }) => party
</script>

<article>
    <h2 class="h4">
        Please, tell us your <b>first and last name</b> so we can find your invitation.
    </h2>
    <section class="container-fluid">
        <div class="form-row">
            <div class="input-group mr-2 col input-group-lg">
                <input type="text" class="form-control" bind:value={name} placeholder="Example: John Smith">
            </div>
            <div class="col-auto">
                <button class="btn btn-secondary btn-lg" on:click={respond}>Continue</button>
            </div>
        </div>
    </section>
    {#if partyFound}
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
    {/if}
</article>

<style>
    section {
        margin-bottom: 24px;
    }

    h2 * {
        font-family: inherit;
    }
</style>