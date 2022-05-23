<button class="btn">
    <slot></slot>
</button>

<style>
    button {
        background-color: transparent;
        color: hsl(var(--clr-secondary));
        border-color: hsl(var(--clr-secondary));
    }
    button:hover, button:focus{
        background-color: hsl(var(--clr-secondary));
        color: hsl(var(--clr-white));
        border-color: hsl(var(--clr-secondary));
    }
</style>