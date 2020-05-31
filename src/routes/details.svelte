<script>
    import PageTitle from '../components/PageTitle.svelte';
</script>

<article class="vh-100 bg-info">
    <PageTitle title="Wedding Details" />
    <div class="container">
        <div class="row">
            <div class="col d-flex flex-column justify-content-center center-children">
                <div class="presentation">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="name">
                            <h4>Mr. & Mrs. Keon</h4>
                            <h4>Hong</h4>
                        </div>
                        <div class="mx-4">
                            along with
                        </div>
                        <div class="name">
                            <h4>Mr. & Mrs. James</h4>
                            <h4>Low</h4>
                        </div>
                    </div>
                    <div>
                        <div>joyfully invite you to the wedding of their children,</div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="name">
                            <h2>Deborah</h2>
                            <div>Youn-Joo Hong</div>
                        </div>
                        <h2 class="mx-4">
                            &
                        </h2>
                        <div class="name">
                            <h2>Connor</h2>
                            <div>James Low</div>
                        </div>
                    </div>
                </div>
                <hr>
                <div>Saturday, August 8th, 2020 | 7:00PM</div>
                <div>Ceremony at Christ’s Church Federal Way</div>
                <div>941 S Dash Point Rd</div>
                <div>Federal Way, WA 98003</div>
                <div>Dessert reception to follow</div>
                <div>Kindly RSVP by July 13th</div>
            </div>
        </div>
    </div>
</article>

<style>
    .container {
        max-width: 640px;
    }

    .center-children div {
        text-align: center;
        margin-bottom: 8px;
    }


    .name h2 {
        text-transform: uppercase;
        letter-spacing: 8px;
    }

    .name div {
        text-transform: uppercase;
        letter-spacing: 4px;
        text-align: center;
    }

    * {
        font-family: "Cormorant Garamond", serif;
    }

    @media (max-width: 768px) {
        .d-flex {
            flex-direction: column;
        }
    }

    article {
        overflow: auto
    }
</style>