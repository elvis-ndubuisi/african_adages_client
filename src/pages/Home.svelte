<section class="landing">
    <section class="comp-wrapper">
        <div class="cta-text">
            <h1>African Adage</h1>
            <h2>The death of an elderly man is like a burning library.</h2>
            <p>
                The African Adage API a free to use JSON API that delivers african proverbs/adages unique to different african countries.
            </p>
            <p>
                The African Adage Community appretiates you contritubions to its community.
                Feel free to join and contribute to the project.
            </p>
        </div>
        <div>
            <ButtonPrimary><a href="/login" use:link>Add an Adage</a></ButtonPrimary>
        </div>
    </section>
</section>

<section class="endpoints comp-wrapper" id="endpoints">
    <aside>
        <h3>Endpoints</h3>
        <div>
            <ul>
                <li class="selected">adage of the day</li>
                <li>random adage</li>
                <li>adage by tag</li>
                <li>adage my country</li>
            </ul>
        </div>
    </aside>
    <main>
        <h4>Adage of the Day</h4>
        <div class="request">
            <span>GET</span>
            <code>https://afrianprober.com/api/adageoftheday</code>
            <ButtonSecondary>Send</ButtonSecondary>
        </div>
    </main>
</section>

<script>
    import {link} from 'svelte-spa-router'
    import ButtonPrimary from '../components/buttons/ButtonPrimary.svelte';
    import ButtonTartiary from '../components/buttons/ButtonTertiary.svelte';
    import ButtonSecondary from '../components/buttons/ButtonSecondary.svelte';
</script>

<style>
    .landing {
        height: 370px;
        background-color: hsl(var(--clr-primary));
        color: hsl(var(--clr-white));
        display: grid;
        place-items: center;
    }
    .landing .comp-wrapper {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
    }
    .landing .comp-wrapper > div {
        flex: 1 1 769px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
    }
    .cta-text{
        text-align: left;
    }
    h1 {
        font-size: 3rem;
        font-weight: var(--fw-600);
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
        border-right: solid 1px hsl(var(--clr-primary), 0.3);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem 0.5rem;
        color: hsl(var(--clr-dark));
    }
    aside > div {
        padding-left: 1rem;
        width: 100%;
    }
    .endpoints ul{
        display: inline-flex;
        width: inherit;
        flex-direction: column;
        align-items: left;
    }
    .endpoints li {
        list-style: none;
        text-transform: capitalize;
        cursor: pointer;
        font-weight: var(--fw-100);
        width: inherit;
        padding: 0.4rem;
        border-radius: 0.4rem;
    }
    .endpoints li:hover, .endpoints li:focus, .endpoints li.selected{
        background-color: hsl(var(--clr-secondary), 0.2);
        font-weight: var(--fw-200);
    }
    main{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem 0;
        color: hsl(var(--clr-dark));
        flex: 1;
    }

    .request {
        width: 100%;
        display: grid;
        grid-template-columns: min-content 1fr min-content;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem 1rem;
        background-color: hsl(var(--clr-dark));
        color: hsl(var(--clr-white));
    }
</style>