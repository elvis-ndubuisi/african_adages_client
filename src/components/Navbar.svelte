<script>
    import Brand from './Brand.svelte';
    import BMC from './BMC.svelte';
</script>

<div class="nav-wrapper">
    <nav>
        <Brand/>
       <div>
           <p>kasfj</p>
           <p>kasfj</p>
           <p>kasfj</p>
       </div>
       <BMC/>
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
        border-top: solid var(--clr-lime) 2px;
        background-color: var(--clr-white)
    }
    nav {
        width: 100%;
        max-width: var(--max-width);
        height: 100%;
        padding: 0 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    nav > div {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
</style>