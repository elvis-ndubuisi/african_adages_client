<script>
    import axios from '../utilities/axios';
    import {onMount} from 'svelte';
    import {link} from 'svelte-spa-router';
    import ButtonCTA from '../components/buttons/ButtonCTA.svelte';
    import ButtonCtaDark from '../components/buttons/ButtonCTA_Dark.svelte';
    import JSONtree from 'svelte-json-tree';

    $: adage = "";

    onMount(async () => {
        // request for new 'Adage of the Day' from api IF adage is absent in sessionStorage.
        const cachedAdage = sessionStorage.getItem('adage');
        if(cachedAdage){
            try {
                const response = await axios.get('/adage/aod');
                if(response.status === 200) {
                    adage = response.data;
                    sessionStorage.setItem('adage', response.data);
                }
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
                The African Heritage API a free to use JSON API that delivers african proverbs/adages unique to different african countries.
                Feel free to submit and contribute to the project.
            </p>

            <section class="home-button">
                <!-- <ButtonCTA><a href="/login" use:link><i class="fa-solid fa-circle-plus fa-lg"></i> <span>add your adage</span></a></ButtonCTA> -->
                <ButtonCTA><a href="https://www.linkedin.com/in/simplyelvis"><i class="fa-brands fa-linkedin fa-lg"></i> <span>linkedIn</span></a></ButtonCTA>
                <ButtonCtaDark><a href="https://github.com/elvis-ndubuisi/african_heritage_api" target="_blank"><i class="fa-brands fa-github fa-lg"></i> <span>Source Code </span></a></ButtonCtaDark>
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
                        <!-- <li> <a href="#QRY">search adage</a></li> -->
                        <li> <a href="#AOD">adage of the day</a></li>
                    </ul>
                </div>
            </section>
        </div>
    </aside>
    <main>
        <h3>Adage</h3>
        <small class="note"><b>NB:</b> Requests are rate-limited to 4 requests per minute</small>
        <section id="RNDA">
            <p>Random adage on every request</p>
            <section class="request">
                <span class="method">GET</span>
                <code class="url">https://africanheritage.up.railway.app/adage/</code>
                <!-- <span class="clip" on:click={copyToClip}><i class="fa-solid fa-clone"></i></span> -->
            </section>
            <!-- <section class="response">
                <pre style="--json-tree-font-family: inherit; --json-tree-font-size: inherit;">
                    <JSONtree {value}/>
                </pre>
            </section> -->
        </section>

        <!-- <section id="QRY">
            <p>Random adage that matches specified params on every request</p>
            <small class="note"><b>NB:</b> An empty object is returned if no adage matches specified query</small>
            <section class="request">
                <span class="method">GET</span>
                <code class="url">https://afrianadage.railway.app/api/adageoftheday</code>
                <span class="clip" on:click={copyToClip}><i class="fa-solid fa-clone"></i></span>
            </section>
            <section class="response">
                <pre></pre>
            </section>
        </section> -->

        <section id="AOD">
            <p>Adage of the Day</p>
            <small class="note"><b>NB:</b> Adage is renewed every 23rd hour</small>
            <section class="request">
                <span class="method">GET</span>
                <code class="url">https://africanheritage.up.railway.app/adage/aod</code>
                <!-- <span class="clip" on:click={copyToClip}><i class="fa-solid fa-clone"></i></span> -->
            </section>
            <!-- <section class="response">
                <pre></pre>
            </section> -->
        </section>
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
    .cta h1::first-letter {
        text-transform: capitalize;
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
        padding: 1rem 0;
        flex-direction: column;
        padding: 1rem 0;
        flex: 1;
    }
    main > section {
        margin: 1.5rem 0;
    }
    main > section > p:first-child {
        margin-bottom: 1rem;
    }
    main h3 {
        color: var(--clr-accent);
        margin-bottom: 0.5rem;
    }

    /* code */
    .request {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.2rem;
        padding: 0.5rem 1rem;
        margin-top: 0.5rem;
        border-bottom: solid 2px var(--clr-foreground);
        border-top: solid 2px var(--clr-foreground);
    }
    .request .method {
        font-weight: var(--fw-800);
        color: var(--clr-secondary);
    }
    .request .url {
        flex-basis: 100%;
        color: var(--clr-accent);
    }
    .request .clip {
        color: var(--clr-foreground);
        cursor: pointer;
        font-size: 1.2rem;
    }
    .clip:hover, .clip:focus {
        color: var(--clr-accent);
    }
    .response {
        background-color: var(--clr-foreground);
        color: var(--clr-background);
        padding: 0.5rem 1rem;
        min-height: 40px;
        border-radius: 0 0 0.5rem 0.5rem;
    }
    .note {
        font-style: italic;
        font-size: 0.8rem;
        display: block;
    }
</style>