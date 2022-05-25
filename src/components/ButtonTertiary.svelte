<button class="btn" on:click>
    <slot></slot>
</button>

<style>
    button {
        background-color: transparent;
        color: hsl(var(--clr-secondary));
    }
    button:hover,button:focus{
        background-color: hsl(var(--clr-secondary), var(--btn-hsl-opacity));
    }
</style>