{#if type==='delete'}
    <button class="delete" on:click>
        <slot></slot>
    </button>
{:else}
    <button on:click>
        <slot></slot>
    </button>
{/if}

<script>
    export let type ="";
</script>

<style>
    button{
        height: 36px;
        aspect-ratio: 1;
        padding: 4px;
        font-size: 1.2rem;
        border-radius: 0.5rem;
        color: inherit var(--clr-foreground);
        background-color: inherit transparent;
        transition: all 0.3s ease;
    }
    button:hover, button:focus {
        background-color: var(--clr-foreground);
        color: var(--clr-background);
    }
    button.delete {
        background-color: hsl(0, 100%, 50%, 0.3);
        color: red;
    }
</style>