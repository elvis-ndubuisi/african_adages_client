<button class="btn">
    <slot></slot>
</button>

<style>
    button {
        background-color: hsl(var(--clr-white));
        color: hsl(var(--clr-secondary));
    }
    button:hover,button:focus{
        background-color: hsl(var(--clr-secondary), var(--btn-hsl-opacity));
    }
</style>