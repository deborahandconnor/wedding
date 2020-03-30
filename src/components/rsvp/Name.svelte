<script>
    import { rsvp } from '../../store';
    let name = '';
    const respond = () => rsvp.setRespondent(name);
</script>

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

<style>
    h2 b {
        font-family: inherit;
    }
</style>