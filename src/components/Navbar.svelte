<div class="comp-wrapper">
    <nav>
        <AdageLogo/>
        <ul class="nav_list">
            <li><a href="#endpoints">endpoints</a></li>
            <li><a href="#endpoints">API</a></li>
            <li><a href="https://github.com/elvis-ndubuisi/african_proverb_api">GitHub <i class="fa-solid fa-up-right-from-square"></i></a></li>
        </ul>
    </nav>
</div>

<script>
    import AdageLogo from './AdageLogo.svelte';
</script>

<style>
    .comp-wrapper {
        background-color: hsl(var(--clr-white));
        height: var(--nav-height);
    }
    nav {
        height: inherit;
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    ul, li {
        display: inline-flex;
        align-items: center;
        text-transform: capitalize;
        font-weight: var(--fw-300);
    }
    a {
        text-decoration: none;
        Padding: 0.3rem 0.5rem;
        color: hsl(var(--clr-dark));
    }
    a:hover, a:focus{
        color: hsl(var(--clr-secondary))
    }
</style>