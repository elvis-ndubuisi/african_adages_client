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
        background-color: hsl(var(--clr-secondary), var(--btn-hsl-opacity));
        height: 36px;
        aspect-ratio: 1;
        padding: 4px;
        font-size: 1.2rem;
        color: hsl(var(--clr-secondary));
        border-radius: 0.3rem;
        transition: all 0.3s ease;
    }
    button:hover, button:focus, button.delete:hover, button.delete:focus {
        background-color: transparent;
    }
    button.delete {
        background-color: hsl(0, 100%, 50%, 0.3);
        color: red;
    }
</style>