<script>
    import { fade } from 'svelte/transition';
    import Fa from 'svelte-fa'
    import { faSquare, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
    import { onEnter } from '../utils.ts'

    const uri = location.hostname === 'localhost'
        ? 'http://deborahandconnordev.herokuapp.com'
        : 'http://weddingapi.herokuapp.com';
    let name = 'carson low', response = { group: [], message: '' }, fetching = false;
    $: guests = response.group.length;
    $: partyFound = response.group.length > 0;
    $: showError = response.message.length > 0;

    // Methods
    const findInvitation = async () => {
        console.log('hello there');
        response.message = '';
        // Split the user input to get the first and last name
        const [first, last] = name
            .trim()
            .split(' ');

        // Find the invitation
        const res = fetch(`${uri}/guests/find?first=${first}&last=${last}`);
        fetching = true;

        // Update response
        response = await (await res).json();
        fetching = false;
        console.log(response.message)
    }

    const respond = async () => {
        const [first, last] = name.split(' ')
        const res = await fetch(`${uri}/guests/find?first=${names[0]}&last=${names[1]}`)
        const json = await res.json();
        state = states.SEARCHING_PARTY;
        console.log('responded:', json);
        party = ['', '', ''];
        state = states.PARTY;
    };

    $: declines = i => () => {
        const { group } = response;
        group[i].response = 'declines'
        response = {
            ...response,
            group
        }
    }
    $: accepts = i => () => {
        const { group } = response;
        group[i].response = 'accepts'
        response = {
            ...response,
            group
        }
    }
</script>

<article>
    <h2 class="h4">
        Please, tell us your <b>first and last name</b> so we can find your invitation.
    </h2>
    <section class="container-fluid">
        <div class="form-row">
            <div class="input-group mr-2 col input-group-lg">
                <input type="text" class="form-control" bind:value={name} placeholder="Example: John Smith"
                    on:keydown={onEnter(findInvitation)}>
            </div>
            <div class="col-auto">
                <button class="btn btn-secondary btn-lg" on:click={findInvitation}>Continue</button>
            </div>
        </div>
    </section>
    {#if partyFound}
        <h2 class="h4">
            We found {guests} { guests === 1 ? 'guest' : 'guests' } in your party. Who will be attending?
        </h2>
        {#each response.group as guest, i}
            <div class="input-group input-group-lg mb-2 col-12">
                {#if !guest.first && !guest.last}
                    <input type="text" class="form-control" bind:value={guest.name}>
                {:else}
                    <div class="mb-2">
                        <div class="font-weight-bold">
                            {guest.first} {guest.last}
                        </div>
                        <div class="d-flex spread">
                            <button class="btn btn-sm" class:btn-success={guest.response === 'accepts'} on:click={accepts(i)}>
                                <Fa icon="{ guest.response === 'accepts' ? faHeart : faSquare }" />
                                {' '}
                                <span>Joyfully accepts</span>
                            </button>
                            <button class="btn btn-sm" class:btn-danger={guest.response === 'declines'} on:click={declines(i)}>
                                <Fa icon="{ guest.response === 'declines' ? faHeartBroken : faSquare }" />
                                {' '}
                                <span>Regretfully declines</span>
                            </button>
                        </div>
                    </div>
                {/if}
            </div>
        {/each}
        <div class="col mt-2">
            <hr>
            <button class="btn btn-secondary btn-lg" on:click={respond}>Send</button>
        </div>
    {:else if showError}
        <div class="alert alert-warning" transition:fade>
            {response.message}
        </div>
    {/if}
</article>

<style>
    section {
        margin-bottom: 24px;
    }

    h2 * {
        font-family: inherit;
    }

    .spread button {
        margin-right: 8px;
    }
</style>