<div>
    <form action="">
        <input type="text" name="search" id="search" placeholder={placeholder}>
    </form>
    <span><i class="fa-solid fa-magnifying-glass"></i></span>
</div>

<script>
    export let placeholder = "";
</script>

<style>
    div {
        padding: 0.5rem;
        background-color: hsl(var(--clr-white));
        border-radius: 0.5rem;
        border: solid 2px hsl(var(--clr-secondary), 0.3);
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    i {
        padding: 0 0.3rem;
        cursor: pointer;
    }
    i:hover, i:focus {
        color: hsl(var(--clr-secondary));
    }
</style>