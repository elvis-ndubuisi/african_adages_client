<script>
    import {location, link} from 'svelte-spa-router';
    // import { link } from 'svelte-routing';
    import AdageLogo from './AdageLogo.svelte';
</script>   

<nav>
    <div class="comp-wrapper">
        <AdageLogo/>
        <ul class="nav_list">
            {#if $location === "/"}
                <li><a href="#endpoints">endpoints</a></li>
            {/if}
            <li><a href="/register" use:link>Sign-in</a></li>
            <li><a href="https://github.com/elvis-ndubuisi/african_proverb_api" tooltip="visit repo"><i class="fa-brands fa-github fa-xl"></i></a></li>
        </ul>
    </div>
</nav>



<style>
    nav {
        height: var(--nav-height);
    }
    .comp-wrapper {
        height: inherit;
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    ul, li {
        display: inline-flex;
        align-items: stretch;
        text-transform: capitalize;
        font-weight: var(--fw-200);
        gap: 1rem;
    }
    a {
        Padding: 0.3rem 0.5rem;
        color: inherit;
        border-bottom: solid 2px transparent;
    }
    a:hover, a:focus{
        border-bottom-color: var(--clr-secondary);
        color: var(--clr-secondary);
    }
</style>