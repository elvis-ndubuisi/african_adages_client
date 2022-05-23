<section class="landing">
    <section class="comp-wrapper">
        <h1>African Adage</h1>
        <p>
            The African Adage API a free to use JSON API that delivers african proverbs/adages unique to different african countries. It can generate over 2 thousand random african proverbs/adages.
        </p>
        <p>
            The African Adage Community appretiates you contritubions to its community.
            Feel free to join and contribute to the project.
        </p>
        <div>
            <ButtonPrimary>Add an Adage</ButtonPrimary>
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
    import ButtonPrimary from '../components/ButtonPrimary.svelte';
    import ButtonTartiary from '../components/ButtonTertiary.svelte';
    import ButtonSecondary from '../components/ButtonSecondary.svelte';
</script>

<style>
    .landing {
        height: 330px;
        background-color: hsl(var(--clr-primary));
        color: hsl(var(--clr-white));
        display: grid;
        place-items: center;
    }
    .landing .comp-wrapper {
        display: flex;
        flex-direction: column;
        align-content: center;
        gap: 1rem;
    }
    h1 {
        font-size: 3rem;
        font-weight: var(--fw-600);
        text-align: center;
    }
    p{
        max-width: 40rem;
        text-align: justify;
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