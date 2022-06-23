<script>
    import axios from '../utilities/axios';
    import {onMount} from 'svelte';
    import {link} from 'svelte-spa-router';
    import ButtonCTA from '../components/buttons/ButtonCTA.svelte';
    import ButtonCtaDark from '../components/buttons/ButtonCTA_Dark.svelte';

    $: adage = "";

    onMount(async () => {
        // request for new 'Adage of the Day' from api IF adage is absent in sessionStorage.
        const cachedAdage = sessionStorage.getItem('adage');
        if(!cachedAdage){
            try {
                const response = await axios.get('/adage/aod');
                if(response.status === 200) {
                    adage = response.data.adage;
                    sessionStorage.setItem('adage', response.data.adage);
                }else {
                    adage = 'The death of an elderly man is like a burning library';
                }
                // console.log(response);
            } catch (err) {
                console.log('there was an error')
            }
        }
    })
</script>

<section class="landing">
    <section class="comp-wrapper">
        <section class="cta">
            <h2>African Heritage</h2>
            <h1>{adage}</h1>
            <p>
                The African Adage API a free to use JSON API that delivers african proverbs/adages unique to different african countries.
                Feel free to join and contribute to the project.
            </p>

            <section class="home-button">
                <ButtonCTA><a href="/login" use:link><i class="fa-solid fa-circle-plus fa-lg"></i> <span>add your adage</span></a></ButtonCTA>
                <ButtonCtaDark><a href="https://twitter.com/elvis__ndubuisi" target="_blank"><span>Say Hi! </span> <i class="fa-brands fa-twitter fa-lg"></i></a></ButtonCtaDark>
            </section>
        </section>
    </section>
</section>

<section class="endpoints comp-wrapper" id="endpoints">
    <aside>
        <div class="panel">
            <section>
                <h4>Adage Endpoints</h4>
                <div id="lks">
                    <ul>
                        <li> <a href="#RNDA">random adage</a></li>
                        <li> <a href="#QRY">random adage</a></li>
                        <li> <a href="#AOD">random adage by filter</a></li>
                    </ul>
                </div>
            </section>
        </div>
    </aside>
    <main>
        <section id="RNDA">
            <h3>Random Adage</h3>
            <p>Returns a random adage on every request</p>
            <small class="note"><b>NB:</b> requests are cached every ooo mins</small>
            <section class="request">
                <span class="method">GET</span>
                <code class="url">https://afrianadage.zeet.app/api/adageoftheday</code>
                <!-- <ButtonSend><span>send</span> <i class="fa-solid fa-circle-arrow-right"></i></ButtonSend> -->
            </section>
            <section class="response">
                <pre>
                    <code></code>
                </pre>
            </section>
        </section>

        <section id="QRY">
            <h3>Filtered Random Adage</h3>
            <p>Returns a random adage that matches specified filter parameter</p>
            <small class="note"><b>NB:</b> An empty object is returned if no adage matches specified query</small>
            <section class="request">
                <span class="method">GET</span>
                <code class="url">https://afrianadage.zeet.app/api/adageoftheday</code>
                <!-- <ButtonSend><span>send</span> <i class="fa-solid fa-circle-arrow-right"></i></ButtonSend> -->
            </section>
            <section class="response">
                <pre></pre>
            </section>
        </section>

        <section id="AOD">
            <h3>Adage of the day</h3>
            <p>adage of the day</p>
            <small class="note"><b>NB:</b> noted</small>
            <section class="request">
                <span class="method">GET</span>
                <code class="url">https://afrianadage.zeet.app/api/adageoftheday</code>
                <!-- <ButtonSend><span>send</span> <i class="fa-solid fa-circle-arrow-right"></i></ButtonSend> -->
            </section>
            <section class="response">
                <pre></pre>
            </section>
        </section>
    </main>
</section>


<style>
    code {
        /* overflow-x: hidden; */
        /* word-wrap: break-word; */
    }
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
    @media screen and (max-width: 768px){
        .landing {
            height: auto;
            padding: 1rem 0;
        }
        .cta h2 {
            font-size: 1.2rem;
        }
        .cta h1 {
            font-size: 2rem;
        }
    }
    .home-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

    /* endpoints */
    .endpoints {
        display: flex;
        gap: 1rem;
        flex-direction: row-reverse;
        position: relative;
        min-height: 400px;
    }
    @media (max-width: 768px){
        .endpoints {
            flex-direction: column;
        }
    }

    aside {
        min-width: 230px;
        padding: 1rem 0.5rem;
        position: relative;
    }
    @media screen  and (max-width: 768px){
        aside {
            display: none;
        }
    }
    aside .panel {
        position: sticky;
        top: 0;
        left: 0;
        width: inherit;
        padding-top: 1em;
    }
    aside section {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2em;
    }
    aside #lks {
        width: 100%;
    }
    .endpoints ul{
        display: inline-flex;
        width: inherit;
        flex-direction: column;
        align-items: left;
        gap: 0.5rem;
    }
    @media (max-width: 768px){
        .endpoints ul{
            flex-direction: row;
        }
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
    main h3 {
        color: var(--clr-accent);
    }

    /* code */
    .request {
        width: 100%;
        display: grid;
        grid-template-columns: min-content 1fr;
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
        border-radius: 0.5rem;
    }
    .note {
        font-style: italic;
        font-size: 0.8rem;
    }
</style>