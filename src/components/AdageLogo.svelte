<a href="/#/" class="adage-logo">
    <span class="svg">
        <AdageIcon/>
    </span>
    <span class="text"><span>African</span> Adages</span>
</a>

<script>
    import AdageIcon from './AdageIcon.svelte';
</script>

<style>
    .adage-logo {
        display:flex;
        align-items: center;
        gap: 10px;
        fill: hsl(var(--clr-secondary));
        text-decoration: none;
        color: hsl(var(--clr-dark));
        font-size: 1.6rem;
        transition: all 0.3s ease;
    }
    .adage-logo:hover, .adage-logo:focus{
        color: hsl(var(--clr-secondary));
    }
    .adage-logo .svg {
        width: 32px;
        height: 32px;
        margin: 2px 0;
    }
    .text {
        font-weight: var(--fw-100);
    }
    .text span {
        font-family: var(--ff-secondary);
        font-weight: var(--fw-500);
    }
</style>