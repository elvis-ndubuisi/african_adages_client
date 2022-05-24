<li>
    <section class="content">
        <p><slot name="adage"></slot></p>
        <div>
            <span><slot name="unique-to"></slot></span>
            <span class="tags"><slot name="tag-items"></slot></span>
        </div>
    </section>
    <div class='action'>
        <ButtonIcon on:click={editAdage}>
            <i class="fa-solid fa-pen-to-square"></i>
        </ButtonIcon>
        <ButtonIcon type='delete'>
            <i class="fa-solid fa-trash-can"></i>
        </ButtonIcon>
    </div>
</li>

<script>
    import {adageItemState} from '../store.js';
    import ButtonIcon from "./ButtonIcon.svelte";

    function editAdage(){
       adageItemState.set({isEditing: true})
    }
</script>

<style>
    li {
        list-style: none;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr min-content;
        align-items: stretch;
        gap: 0.5rem;
        background-color: hsl(var(--clr-white));
        padding: 1rem;
        border-radius: 10px;
    }
    .content {
        display: grid;
        grid-template-rows: 1fr min-content;
    }
    .content p {
        font-size: 1.1rem;
        font-weight: var(--fw-300);
        color: hsl(var(--clr-primary));
    }
    .content > div {
        display: grid;
        grid-template-columns: max-content 1fr;
        align-items: center;
        justify-content: space-between;
        border-top: solid 1px hsl(var(--clr-secondary), 0.5);
        padding-top: 0.3rem;
    }
    .content > div span:first-child {
        font-size: 0.8rem;
        font-weight: var(--fw-300);
    }
    .content > div .tags {
        display: flex;
        align-items: flex-start;
        justify-content: right;
        gap: 10px;
        flex-wrap: wrap;
    }
    .action {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }
</style>