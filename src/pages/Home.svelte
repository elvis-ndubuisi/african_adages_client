<script>
    import {fade} from 'svelte/transition'
    import {link} from 'svelte-spa-router'
    import ButtonCTA from '../components/buttons/ButtonCTA.svelte';
    import ButtonSend from '../components/buttons/ButtonSend.svelte';

    $:queryWin = 'AOD';
</script>

<section class="landing">
    <section class="comp-wrapper">
        <section class="cta">
            <h2>African Adage</h2>
            <h1>The death of an elderly man is like a burning library.</h1>
            <p>
                The African Adage API a free to use JSON API that delivers african proverbs/adages unique to different african countries. The African Adage Community appretiates you contritubions to its community.
                Feel free to join and contribute to the project.
            </p>

            <section>
                <ButtonCTA><a href="/join" use:link><span>add your adage</span> <i class="fa-solid fa-circle-plus fa-lg"></i></a></ButtonCTA>
            </section>
        </section>
    </section>
</section>

<section class="endpoints comp-wrapper" id="endpoints">
    <aside>
        <h3>Endpoints</h3>
        <div>
            <ul>
                <li on:click={()=>queryWin="AOD"}>adage of the day</li>
                <li on:click={()=>queryWin="RNDA"}>random adage</li>
                <li on:click={()=>queryWin="AGT"}>adage by tag</li>
                <li on:click={()=>queryWin="AGC"}>adage by country</li>
            </ul>
        </div>
    </aside>
    <main>
        {#if queryWin === 'AGC'}
                <section in:fade>
                    <h4>Adage by Country</h4>
                    <section class="request">
                        <h4 class="method">GET</h4>
                        <code class="url">https://afrianadage.zeet.app/api/adageoftheday</code>
                        <ButtonSend><span>send</span> <i class="fa-solid fa-circle-arrow-right"></i></ButtonSend>
                    </section>
                    <section class="response"></section>
                </section>
            {:else if queryWin === 'RNDA'}
                <section in:fade>
                    <h4>Random Adage</h4>
                    <section class="request">
                        <h4 class="method">GET</h4>
                        <code class="url">https://afrianadage.zeet.app/api/adageoftheday</code>
                        <ButtonSend><span>send</span> <i class="fa-solid fa-circle-arrow-right"></i></ButtonSend>
                    </section>
                    <section class="response"></section>
                </section>
            {:else if queryWin === 'AGT'}
                <section in:fade>
                    <h4>Adage by Tag</h4>
                    <section class="request">
                        <h4 class="method">GET</h4>
                        <code class="url">https://afrianadage.zeet.app/api/adageoftheday</code>
                        <ButtonSend><span>send</span> <i class="fa-solid fa-circle-arrow-right"></i></ButtonSend>
                    </section>
                    <section class="response"></section>
                </section>
            {:else}
                <section in:fade>
                    <h4>Adage of the Day</h4>
                    <section class="request">
                        <h4 class="method">GET</h4>
                        <code class="url">https://afrianadage.zeet.app/api/adageoftheday</code>
                        <ButtonSend><span>send</span> <i class="fa-solid fa-circle-arrow-right"></i></ButtonSend>
                    </section>
                    <section class="response"></section>
                </section>
        {/if}
    </main>
</section>


<style>
    .landing {
        height: 370px;
        display: grid;
        place-items: center;
    }
    .cta {
        max-width: 800px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
    .cta h1 {
        font-size: 3rem;
        color: var(--clr-accent);
    }
    .cta p {
        text-align: justify;
        font-size: 0.9rem;
    }
   

    /* endpoints */
    .endpoints {
        display: flex;
        gap: 1rem;
        position: relative;
        min-height: 400px;
    }

    aside {
        min-width: 230px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem 0.5rem;
    }
    aside > div {
        padding-left: 1rem;
        width: 100%;
        border-left: solid 1px var(--clr-secondary);
    }
    .endpoints ul{
        display: inline-flex;
        width: inherit;
        flex-direction: column;
        align-items: left;
        gap: 0.5rem;
    }
    .endpoints li {
        list-style: none;
        text-transform: capitalize;
        cursor: pointer;
        font-weight: var(--fw-300);
        width: inherit;
        padding: 0.6rem;
        border-radius: 0.5rem;
        color: var(--clr-background);
        background-color: var(--clr-foreground);
        transition: all 0.3s ease-in-out;
    }
    .endpoints li:hover, .endpoints li:focus{
        opacity: 0.7;
    }
    main{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem 0;
        flex: 1;
    }
    main > section {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem 0;
        flex: 1;
    }
    main h4 {
        color: var(--clr-accent);
    }

    /* code */
    .request {
        width: 100%;
        display: grid;
        grid-template-columns: min-content 1fr min-content;
        align-items: center;
        gap: 1.2rem;
        padding: 0.5rem 1rem;
        border-bottom: solid 2px var(--clr-foreground);
        border-top: solid 2px var(--clr-foreground);
    }
    .request .method {
        font-weight: var(--fw-800);
        color: var(--clr-secondary);
    }
    .request .url {
        color: var(--clr-accent);
    }
    .response {
        background-color: var(--clr-foreground);
        color: var(--clr-background);
        padding: 0.5rem 1rem;
        min-height: 200px;
    }
</style>