<script>
    import Brand from './Brand.svelte';
</script>

<div class="nav-wrapper">
    <nav>
        <p>omay</p>
        <p>omay</p>
        <p>omay</p>
    </nav>
</div>

<style>
    .nav-wrapper {
        display: block;
        position: sticky;
        top: 0;
        width: 100%;
        height: var(--nav-height);
        display: grid;
        place-items: center;
        background-color: var(--clr-space-cadet);
        color: var(--clr-selective-yellow);
    }
    nav {
        width: 100%;
        max-width: var(--max-width);
        height: 100%;
        padding: 0 0.4em;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
</style>