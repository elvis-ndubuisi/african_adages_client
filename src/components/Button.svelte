<button>
    <a href={link}>
        <slot></slot>
    </a>
</button>

<script>
    export let link = "#";
</script>

<style>
    button {
        padding: 0.7em;
        width: 200px;
        border-radius: 5px;
        font-size: 1.1rem;
        font-weight: var(--fw-300);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        background-color: var(--clr-lime);
        border: solid 2px var(--clr-lime);
        transition: all 0.3s ease-in;
    }
    button:hover, button:focus{
        background-color: transparent;
        color: white;
    }
    a {
        width: inherit;
        height: inheit;
        text-decoration: none;
        color: inherit;
    }
</style>