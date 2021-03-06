<script>
    import { fade } from 'svelte/transition';
    import Fa from 'svelte-fa'
    import { faSquare, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
    import { onEnter } from '../utils.ts'

    const uri = 'https://deborahandconnorapi.herokuapp.com';
    let name = '', response = { group: [], message: '' }, fetching = false, done = false;
    $: guests = response.group.length;
    $: partyFound = response.group.length > 0;
    $: showError = response.message.length > 0;
    $: canSubmit = response.group.every(i => !!i.response)

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
        const mapNames = i => `${i.first} ${i.last}`;
        const body = JSON.stringify({
            responder: name,
            accept: response.group
                .filter(i => i.response === 'accepts')
                .map(mapNames),
            decline: response.group
                .filter(i => i.response === 'declines')
                .map(mapNames)
        })
        console.log('body:', body)
        const res = fetch(`${uri}/rsvp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        });
        fetching = true;
        const json = await (await res).text();
        console.log(json);
        if (json === 'OK') {
            done = true;
        }
        fetching = false;
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

    const updateGuest = i => {
        const guest = response.group[i];
        return ({ target: { value } }) => {
            const [first, last] = value
                .trim()
                .split(' ');
            response.group[i] = {
                ...guest,
                first,
                last,
                plusOne: true
            };
        }
    }
</script>

{#if done}
<article class="text-center">
    <h2 class="h4">
        Thank you. 
    </h2>
    <p>Your RSVP has been sent.</p>
</article>
{:else}
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
                <button class="btn btn-secondary btn-lg" disabled={fetching} on:click={findInvitation}>
                    {
                        fetching && !partyFound
                        ? 'Looking...'
                        : 'Continue'
                    }
                </button>
            </div>
        </div>
    </section>
    {#if partyFound}
        <h2 class="h4">
            We found {guests} { guests === 1 ? 'guest' : 'guests' } in your party. Who will be attending?
        </h2>
        {#each response.group as guest, i}
            <div class="input-group input-group-lg mb-2 col-12">
                <div class="mb-2" class:fetching>
                    {#if guest.plusOne || (!guest.first && !guest.last)}
                        <div class="mb-1">
                            <input type="text" class="form-control" bind:value={guest.name} 
                            on:change={updateGuest(i)} placeholder="Guest">
                        </div>
                    {:else}
                        <div class="font-weight-bold">
                            {guest.first} {guest.last}
                        </div>
                    {/if}
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
            </div>
        {/each}
        <div class="col mt-2">
            <hr>
            <button class="btn btn-secondary btn-lg" on:click={respond} disabled={!canSubmit || fetching}>
                {
                    fetching
                    ? 'Sending...'
                    : 'Send'
                }
            </button>
        </div>
    {:else if showError}
        <div class="alert alert-warning" transition:fade>
            {response.message}
        </div>
    {/if}
</article>
{/if}

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

    .fetching {
        opacity: 0.6;
    }

</style>