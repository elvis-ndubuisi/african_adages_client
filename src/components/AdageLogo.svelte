<script>
    // import {link} from 'svelte-routing';
    import { link } from 'svelte-spa-router';
    import AdageIcon from './AdageIcon.svelte';
</script>

<a href="/" use:link class="adage-logo">
    <span class="svg">
        <AdageIcon/>
    </span>
    <span class="text"><span>African</span> Adages</span>
</a>

<style>
    .adage-logo {
        display:flex;
        align-items: center;
        gap: 10px;
        fill: var(--clr-foreground);
        text-decoration: none;
        color: inherit; 
        font-size: 1.6rem;
        transition: all 0.3s ease;
    }
    .adage-logo:hover, .adage-logo:focus{
        color: var(--clr-accent);
    }
    .adage-logo .svg {
        width: 32px;
        height: 32px;
        margin: 2px 0;
    }
    .text {
        font-weight: var(--fw-100);
    }
    .text span {
        font-family: var(--ff-secondary);
        font-weight: var(--fw-500);
    }
</style>